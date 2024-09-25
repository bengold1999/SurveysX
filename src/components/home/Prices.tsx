import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const Pricing: React.FC<Props> = () => {
  const navigate = useNavigate();

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$10',
      features: ['10 Surveys per month', 'Basic Support', 'Limited Templates'],
    },
    {
      name: 'Standard',
      price: '$20',
      features: ['50 Surveys per month', 'Priority Support', 'Custom Templates'],
    },
    {
      name: 'Premium',
      price: '$50',
      features: ['Unlimited Surveys', '24/7 Support', 'Advanced Analytics'],
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our Pricing Plans</h2>
        <p className="text-center text-gray-600 mb-12">
          Choose a plan that suits your needs. Upgrade or cancel at any time.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center text-center"
            >
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="text-4xl font-bold text-primary mt-4 mb-6">{plan.price}</p>
              <ul className="mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate('/SignUp')}
                className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition duration-200"
              >
                Start Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
