import React from 'react';

export const TicketDisplay = () => {
  return (
    <section className="ticket">
      <div className="description">
        <h2>Exhibition Tickets: 10.00 EUR</h2>
      </div>
      <form
        action="http://localhost:4242/create-checkout-session"
        method="POST"
      >
        <button type="submit">PURCHASE FOR 10.00 EUR</button>
      </form>
    </section>
  );
};
