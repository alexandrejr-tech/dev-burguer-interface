import { toast } from 'react-toastify';

import { HeartIcon } from '@phosphor-icons/react';
import PropTypes from 'prop-types';

import { useCart } from '../../hooks/CartContext';
import { CartButton } from '../CartButton';
import { CardImage, Container, FavoriteIcon } from './styles';

export function CardProduct({ product }) {
  const { putProductInCart } = useCart();

  function addToCart() {
    putProductInCart(product);
    toast.success(`${product.name} adicionado ao carrinho`);
  }

  return (
    <Container>
      <CardImage src={product.url} alt={product.name} />
      <FavoriteIcon aria-hidden="true">
        <HeartIcon size={22} />
      </FavoriteIcon>
      <div>
        <p>{product.name}</p>
        <strong>{product.currencyValue}</strong>
      </div>
      <CartButton onClick={addToCart}></CartButton>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};
