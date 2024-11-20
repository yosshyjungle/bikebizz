'use client';

import { CartProvider as CProvider } from "use-shopping-cart";

const CartProvider = ({children}) => {
  return (
    <CProvider 
     mode="payment"
     cartMode="client-only"
     stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
     successUrl="https://bikebizz.vercel.app/stripe/success"
     cancelUrl="https://bikebizz.vercel.app/stripe/error"
     language="en-US"
     currency="USD"
     billingAddressCollection={true}
     shouldPersist={true}
     >
        {children}
    </CProvider>
  )
}

export default CartProvider
