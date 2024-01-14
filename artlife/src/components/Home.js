import React, { useState, useEffect } from 'react';
import { SearchArts } from './SearchArts';
import { Message } from './Message';

export const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setMessage(
        'Order placed! You will receive your ticket in the email confirmation.',
      );
    }

    if (query.get('canceled')) {
      setMessage("Order canceled - continue with checkout when you're ready.");
    }
  }, []);
  return (
    <div className="container">
      <SearchArts />
      {message && <Message message={message} />}
    </div>
  );
};
