import Stripe from 'stripe';
import express from 'express';
import dotenv from 'dotenv';

const app = express();
app.use(express.static('public'));

dotenv.config();

const MY_DOMAIN = 'http://localhost:3000';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: 'price_1OYQEJGrsDNmeaJscTqsRi23',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${MY_DOMAIN}?success=true`,
    cancel_url: `${MY_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

export default app;
