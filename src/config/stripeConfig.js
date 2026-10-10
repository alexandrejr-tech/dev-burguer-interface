import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_live_51ULPqbEI2FrUyalzRjxpKu05hF9Vv5TMxV9zs1urWFbeVLY3TtWyRh6gOPxEN9xchIMKyGoXhFmZcnQUJQfQQt4m00fixvnTA0',
);

export default stripePromise;
