'use client';

import React, { useEffect, useRef } from 'react';

interface RazorpayButtonProps {
  paymentButtonId: string;
}

const RazorpayButton: React.FC<RazorpayButtonProps> = ({ paymentButtonId }) => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!paymentButtonId || !formRef.current) return;

    // Remove any existing scripts to prevent duplicates
    formRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://cdn.razorpay.com/static/widget/payment-button.js';
    script.async = true;
    script.dataset.payment_button_id = paymentButtonId;

    formRef.current.appendChild(script);
  }, [paymentButtonId]);

  return <form ref={formRef} />;
};

export default RazorpayButton;
