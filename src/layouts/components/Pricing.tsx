import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      description: 'For individuals',
      price: '0$',
      flows: '100 flows/month',
      buttonText: 'Get started',
    },
    {
      name: 'Starter',
      description: 'For small teams and projects',
      price: '9$',
      flows: '1000 flows/month',
      buttonText: 'Buy',
    },
    {
      name: 'Pro',
      description: 'For bigger teams and projects',
      price: '18$',
      flows: '5000 flows/month',
      buttonText: 'Buy',
    },
  ];

  return (
    <div>
      {plans.map((plan, index) => (
        <div key={index}>
          <h2>{plan.name}</h2>
          <p>{plan.description}</p>
          <p>{plan.price}</p>
          <p>{plan.flows}</p>
          <button>{plan.buttonText}</button>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
