
import React from 'react';
import { Code, Database, Server, Cpu } from 'lucide-react';

const features = [
  {
    icon: <Code className="w-6 h-6 text-red-500" />,
    title: 'Vetra Language',
    description: 'A modern, expressive programming language designed for high performance and developer productivity.'
  },
  {
    icon: <Server className="w-6 h-6 text-red-500" />,
    title: 'VetraOS',
    description: 'A lightweight, secure operating system optimized for running Vetra applications with minimal overhead.'
  },
  {
    icon: <Database className="w-6 h-6 text-red-500" />,
    title: 'VetraDB',
    description: 'A high-performance, distributed database system with built-in support for complex data structures.'
  },
  {
    icon: <Cpu className="w-6 h-6 text-red-500" />,
    title: 'Vetra Compiler',
    description: 'An advanced compiler that optimizes code for maximum performance across different hardware architectures.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 px-6 lg:px-10 bg-[#151515]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Core Components</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          The Vetra Tech Stack is a comprehensive suite of tools designed to work seamlessly together, providing developers with everything they need.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="tech-card p-6">
              <div className="mb-4 p-2 bg-red-900/20 w-fit rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
