import React from 'react';
import { TrendingUp, Clock, DollarSign, Percent } from 'lucide-react';

const stats = [
  { 
    icon: TrendingUp,
    number: '99.9%', 
    label: 'Platform Uptime',
    description: 'Ensuring your operations never stop'
  },
  { 
    icon: Clock,
    number: '2.5M+', 
    label: 'Shipments Optimized',
    description: 'Across global supply chains'
  },
  { 
    icon: DollarSign,
    number: '$500M+', 
    label: 'Processed Payments',
    description: 'Secure financial transactions'
  },
  { 
    icon: Percent,
    number: '30%', 
    label: 'Cost Reduction',
    description: 'Average customer savings'
  }
];

export default function Stats() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl shadow-blue-100 dark:shadow-none hover-scale">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</p>
              <p className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2">{stat.label}</p>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}