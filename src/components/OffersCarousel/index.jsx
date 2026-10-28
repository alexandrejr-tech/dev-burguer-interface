import { useEffect } from 'react';
import { useState } from 'react';
import ReactMultiCarousel from 'react-multi-carousel';
const Carousel = ReactMultiCarousel.default ?? ReactMultiCarousel;
import 'react-multi-carousel/lib/styles.css';

import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { CardProduct } from '../CardProduct';
import { CarouselArrows } from '../CarouselArrows';
import { CarouselWrapper, Container, Title } from './styles';

export function OffersCasousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products');

      const onlyOffers = data
        .filter((product) => product.offer)
        .map((product) => ({
          currencyValue: formatPrice(product.price),
          ...product,
        }));

      setOffers(onlyOffers);
    }

    loadProducts();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    laptop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      partialVisibilityGutter: 60,
    },
  };

  return (
    <Container>
      <Title>Ofertas do Dia</Title>
      <CarouselWrapper>
        <Carousel
          responsive={responsive}
          infinite={false}
          partialVisible={true}
          itemClass="carousel-item"
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<CarouselArrows />}
        >
          {offers.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </Carousel>
      </CarouselWrapper>
    </Container>
  );
}
