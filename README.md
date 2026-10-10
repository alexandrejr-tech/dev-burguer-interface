# DevBurguer — Interface

Front-end da hamburgueria **DevBurguer**, feito com React + Vite. Permite que o cliente navegue pelo cardápio, monte o carrinho e pague com Stripe, e oferece um painel administrativo para gerenciar pedidos e produtos.

## Funcionalidades

### Área do cliente
- **Cadastro e login** de usuários
- **Home** com carrossel de categorias e carrossel de ofertas
- **Cardápio** com filtro por categoria (`/cardapio?categoria=<id>`)
- **Carrinho** com aumento/diminuição de quantidade, remoção de itens e resumo do pedido (itens + taxa de entrega)
- **Checkout** com pagamento via Stripe (Payment Element)
- Carrinho e dados do usuário persistidos no `localStorage`

### Painel administrativo (`/admin`)
Acessível apenas para usuários admin.
- **Pedidos**: listagem com filtro por status e atualização de status
  - Status: Pedido Realizado, Em Preparação, Pedido Pronto, Pedido à Caminho, Entregue
- **Produtos**: listagem com preço, imagem e indicação de oferta
- **Adicionar produto**: nome, preço, categoria e imagem (PNG/JPEG até 3 MB)
- **Editar produto**

## Tecnologias

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [styled-components](https://styled-components.com/)
- [Material UI](https://mui.com/) (tabelas do painel admin)
- [React Hook Form](https://react-hook-form.com/) + [Yup](https://github.com/jquense/yup) (formulários e validação)
- [Axios](https://axios-http.com/) (requisições à API)
- [Stripe](https://stripe.com/) (`@stripe/react-stripe-js` e `@stripe/stripe-js`)
- [React Toastify](https://fkhadra.github.io/react-toastify/) (notificações)
- [React Select](https://react-select.com/), [React Multi Carousel](https://www.npmjs.com/package/react-multi-carousel), [Phosphor Icons](https://phosphoricons.com/)
- ESLint + Prettier

## Rotas

| Rota | Página |
| --- | --- |
| `/` | Home |
| `/cardapio` | Cardápio |
| `/carrinho` | Carrinho |
| `/checkout` | Pagamento |
| `/complete` | Pagamento concluído |
| `/login` | Login |
| `/cadastro` | Cadastro |
| `/admin/pedidos` | Admin — Pedidos |
| `/admin/produtos` | Admin — Produtos |
| `/admin/novo-produto` | Admin — Adicionar produto |
| `/admin/editar-produto` | Admin — Editar produto |

## Estrutura de pastas

```
src/
├── assets/       # Imagens e SVGs
├── components/   # Componentes reutilizáveis (Header, CartItems, CartResume, Stripe, SideNavAdmin...)
├── config/       # Configuração do Stripe
├── containers/   # Páginas (Home, Menu, Cart, Checkout, Login, Register, Admin...)
├── hooks/        # Contextos (UserContext e CartContext)
├── layouts/      # Layouts de usuário e admin
├── routes/       # Definição das rotas
├── services/     # Instância do Axios (api)
├── styles/       # Estilos globais e tema
└── utils/        # Funções utilitárias (formatPrice, formatDate)
```

## Pré-requisitos

- Node.js
- Yarn
- A API do DevBurguer rodando em `http://localhost:3001` (endereço configurado em `src/services/api.js`)

## Como rodar

```bash
# instalar as dependências
yarn

# rodar em modo de desenvolvimento
yarn dev
```

A aplicação fica disponível em `http://localhost:5173`.

### Outros scripts

```bash
yarn build     # gera o build de produção
yarn preview   # visualiza o build localmente
yarn lint      # roda o ESLint
```

## Configuração do Stripe

A chave publicável do Stripe é definida em `src/config/stripeConfig.js`. Use a chave do seu próprio ambiente Stripe, do mesmo modo (teste ou produção) da chave secreta configurada na API.
