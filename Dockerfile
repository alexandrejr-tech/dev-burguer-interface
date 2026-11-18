# ---------- Estágio 1: build ----------
# Usa Node só para gerar os arquivos estáticos; esta imagem é descartada no final.
# Fixada por digest (sha256): o build usa sempre exatamente esta imagem, no CI e
# no Dokploy. O Dependabot abre um PR quando a tag ganha uma versão nova.
FROM node:22-bookworm-slim@sha256:e9f565d32859f0cbfb52125eafe8be39390f24dac302dc3cdf566e8ba3ab21ee AS build

# Evita que o corepack pare o build perguntando se pode baixar o yarn.
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

WORKDIR /app

# Ativa o corepack, que instala o yarn na versão do campo packageManager (4.18.0).
RUN corepack enable

# Copia só os arquivos de dependências primeiro, para reaproveitar o cache do install.
# .yarn/empty-package: pacote vazio usado nas "resolutions" do package.json.
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn/empty-package ./.yarn/empty-package

# Instala as dependências exatamente como estão no yarn.lock (falha se ele estiver desatualizado).
RUN yarn install --immutable

# Copia o código do front (o .dockerignore deixa de fora node_modules, dist, .env...).
COPY . .

# Variáveis recebidas como build args. O Vite grava esses valores no JavaScript
# durante o build, por isso precisam existir AGORA, e não quando o container roda.
ARG VITE_API_URL
ARG VITE_STRIPE_PUBLIC_KEY

# Falha o build com mensagem clara se alguma variável não foi informada.
RUN test -n "$VITE_API_URL" || (echo "Build arg VITE_API_URL não informado" && exit 1)
RUN test -n "$VITE_STRIPE_PUBLIC_KEY" || (echo "Build arg VITE_STRIPE_PUBLIC_KEY não informado" && exit 1)

# Gera os arquivos finais em /app/dist.
RUN yarn build

# ---------- Estágio 2: servidor ----------
# Imagem final só com o Nginx: sem Node, sem código-fonte, sem node_modules.
# Fixada por digest, como a imagem do build acima.
FROM nginx:1.30-alpine@sha256:901e593c95dc85f5a729f5765516321366ef4ac401821431d408897e95287d0a

# Substitui a configuração padrão do Nginx pela nossa (SPA + cache).
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia do estágio "build" apenas a pasta dist para a pasta que o Nginx serve.
COPY --from=build /app/dist /usr/share/nginx/html

# Documenta que o Nginx escuta na porta 80 dentro do container.
EXPOSE 80
