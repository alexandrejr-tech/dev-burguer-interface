import { useLocation } from 'react-router-dom';

import { Elements } from '@stripe/react-stripe-js';

import { CheckoutForm } from '../../components';
import stripePromise from '../../config/stripeConfig';
import { standardTheme } from '../../styles/themes/standard';
import { Container } from '../Cart/styles';

const stripeOptions = {
  locale: 'pt-BR',
  fonts: [
    {
      cssSrc:
        'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap',
    },
  ],
  appearance: {
    theme: 'stripe',
    variables: {
      colorPrimary: standardTheme.purple,
      colorText: standardTheme.secondBlack,
      colorDanger: standardTheme.darkRed,
      fontFamily: standardTheme.poppinsFont,
      borderRadius: '5px',
    },
  },
};

export function Checkout() {
  const {
    state: { clientSecret },
  } = useLocation();

  if (!clientSecret) {
    return <div>Erro, volte e tente novamente</div>;
  }

  return (
    <Container>
      <Elements
        stripe={stripePromise}
        options={{ clientSecret, ...stripeOptions }}
      >
        <CheckoutForm />
      </Elements>
    </Container>
  );
}
