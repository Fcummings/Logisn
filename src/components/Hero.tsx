import React from 'react';
import { ArrowRight, Box, Zap, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTBlOGYyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40 dark:opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="pt-28 pb-12 md:pt-40 md:pb-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6 md:mb-8 opacity-0 animate-fade-up">
              <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-xs md:text-sm font-medium animate-pulse-slow">
                New Feature
              </span>
              <span className="text-sm md:text-base text-gray-500 dark:text-gray-400">AI-Powered Route Optimization →</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="block opacity-0 animate-fade-left animate-delay-100">
                <span className="gradient-text">Transform</span> <span className="text-gray-900 dark:text-white">Your</span>
              </span>
              <span className="block opacity-0 animate-fade-right animate-delay-200 text-gray-900 dark:text-white">
                Logistics Operations
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto opacity-0 animate-fade-up animate-delay-300 px-4">
              Streamline payments, optimize routes, and access working capital with our all-in-one logistics technology platform.
            </p>

            <div className="flex justify-center opacity-0 animate-fade-up animate-delay-400 px-4">
              <a href="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover-scale text-base md:text-lg font-medium">
                Get Started
              </a>
            </div>

            <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 px-4">
              {[
                { icon: Box, text: "99.9% Uptime", delay: "100" },
                { icon: Zap, text: "2.5M+ Shipments Optimized", delay: "200" },
                { icon: Shield, text: "$500M+ Processed Securely", delay: "300" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300 opacity-0 animate-fade-up animate-delay-${item.delay}`}
                >
                  <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm md:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}