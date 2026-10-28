import { useEffect, useState } from 'react';
import ReactMultiCarousel from 'react-multi-carousel';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { CarouselArrows } from '../CarouselArrows';
import {
  CarouselWrapper,
  CategoryButton,
  Container,
  ContainerItems,
  Title,
} from './styles';

import 'react-multi-carousel/lib/styles.css';

const Carousel = ReactMultiCarousel.default ?? ReactMultiCarousel;

export function CategoriesCasousel() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      setCategories(data);
    }

    loadCategories();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      partialVisibilityGutter: 50,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 3,
      partialVisibilityGutter: 50,
    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 2,
      partialVisibilityGutter: 60,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 1,
      partialVisibilityGutter: 60,
    },
  };

  return (
    <Container>
      <Title>Categorias</Title>
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
          {categories.map((category) => (
            <ContainerItems key={category.id} $imageUrl={category.url}>
              <CategoryButton
                onClick={() => {
                  navigate({
                    pathname: '/cardapio',
                    search: `?categoria=${category.id}`,
                  });
                }}
              >
                {category.name}
              </CategoryButton>
            </ContainerItems>
          ))}
        </Carousel>
      </CarouselWrapper>
    </Container>
  );
}
