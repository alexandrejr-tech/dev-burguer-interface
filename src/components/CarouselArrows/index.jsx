import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';
import PropTypes from 'prop-types';

import { ArrowButton } from './styles';

export function CarouselArrows({ next, previous, carouselState }) {
  const {
    currentSlide = 0,
    totalItems = 0,
    slidesToShow = 0,
  } = carouselState || {};

  const isFirst = currentSlide === 0;
  const isLast = currentSlide + slidesToShow >= totalItems;

  return (
    <>
      <ArrowButton
        type="button"
        $side="left"
        onClick={() => previous()}
        disabled={isFirst}
        aria-label="Anterior"
      >
        <CaretLeftIcon size={40} weight="bold" />
      </ArrowButton>
      <ArrowButton
        type="button"
        $side="right"
        onClick={() => next()}
        disabled={isLast}
        aria-label="Próximo"
      >
        <CaretRightIcon size={40} weight="bold" />
      </ArrowButton>
    </>
  );
}

CarouselArrows.propTypes = {
  next: PropTypes.func,
  previous: PropTypes.func,
  carouselState: PropTypes.object,
};
