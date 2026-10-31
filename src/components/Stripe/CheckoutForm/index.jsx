import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import '../styles.css';

import { useCart } from '../../../hooks/CartContext';
import { api } from '../../../services/api';
import { Button } from '../../Button';
import { Card, Content, PaymentMethodsNote } from './styles';

const isStripeTestMode =
  import.meta.env.VITE_STRIPE_PUBLIC_KEY?.startsWith('pk_test_') ?? false;

export function CheckoutForm() {
  const { cartProducts, clearCart } = useCart();

  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();
  const {
    state: { dpmCheckerLink },
  } = useLocation();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe ou Elements com falha, tente novamente');
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    if (error) {
      setMessage(error.message);
      toast.error(error.message);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      try {
        const products = cartProducts.map((product) => {
          return {
            id: product.id,
            quantity: product.quantity,
            price: product.price,
          };
        });
        const { status } = await api.post(
          '/orders',
          { products },
          {
            validateStatus: () => true,
          },
        );

        if (status === 200 || status === 201) {
          setTimeout(() => {
            navigate(
              `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,
            );
          }, 2000);
          clearCart();
          toast.success('Pedido Realizado com Sucesso');
        } else if (status === 400) {
          toast.error('Falha ao realizar o seu pedido');
        } else {
          throw new Error();
        }
      } catch {
        toast.error('😭 Falha no sistema! Tente novamente');
      }
    } else {
      navigate(
        `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,
      );
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: 'accordion',
  };

  return (
    <Content>
      {isStripeTestMode && (
        <Card role="note">
          <h2 className="title">Ambiente de demonstração</h2>
          <div className="content">
            <p>
              Este é um projeto de portfólio com o Stripe em modo de teste.
              Nenhuma cobrança real é feita.
            </p>
            <p>
              <strong>Cartão:</strong>{' '}
              <strong className="card-number">4242 4242 4242 4242</strong> ·{' '}
              <strong>Validade:</strong> qualquer data futura ·{' '}
              <strong>CVC:</strong> qualquer número de 3 dígitos
            </p>
          </div>
        </Card>
      )}

      <Card>
        <h2 className="title">Dados do pagamento</h2>
        <form
          id="payment-form-content"
          className="content"
          onSubmit={handleSubmit}
        >
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          />
          <Button
            type="submit"
            id="submit"
            disabled={isLoading || !stripe || !elements}
          >
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              'Pagar Agora'
            )}
          </Button>
          {/* Show any error or success messages */}
          {message && <div id="payment-message">{message}</div>}
        </form>
      </Card>

      {isStripeTestMode && dpmCheckerLink && (
        <PaymentMethodsNote>
          Os métodos de pagamento são exibidos de acordo com a localização do
          cliente, o valor do pedido e a moeda.{' '}
          <a href={dpmCheckerLink} target="_blank" rel="noopener noreferrer">
            Visualizar métodos de pagamento por transação
          </a>
        </PaymentMethodsNote>
      )}
    </Content>
  );
}
