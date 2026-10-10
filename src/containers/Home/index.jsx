import { OffersCasousel, CategoriesCasousel } from '../../components';
import { Banner, Container } from './styles';

export function Home() {
  return (
    <main>
      <Banner>
        <h1>Bem vindo(a)!</h1>
      </Banner>
      <Container>
        <div>
          <CategoriesCasousel />
          <OffersCasousel />
        </div>
      </Container>
    </main>
  );
}
