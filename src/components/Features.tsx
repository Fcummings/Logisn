import React from 'react';
import { CreditCard, BarChart3, Truck, Shield } from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: 'Smart Payments',
    description: 'Streamlined payment processing with instant settlements and automated invoicing'
  },
  {
    icon: BarChart3,
    title: 'Factoring Solutions',
    description: 'Quick access to working capital through invoice factoring and financial tools'
  },
  {
    icon: Truck,
    title: 'Route Optimization',
    description: 'AI-powered route planning that reduces fuel costs and delivery times'
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Enterprise-grade security protecting your logistics and financial data'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight">
            <span className="gradient-text">Powerful Features</span>{' '}
            <span className="text-gray-900 dark:text-white">for<br />Modern Logistics</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 px-4">
            Everything you need to optimize your logistics operations in one platform
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-gradient dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 p-6 md:p-8 rounded-2xl hover-scale"
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}