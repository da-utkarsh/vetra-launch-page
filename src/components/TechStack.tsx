
import React from 'react';

const techDetails = [
  {
    title: 'High Performance',
    description: 'Built from the ground up for speed, with optimizations at every layer of the stack'
  },
  {
    title: 'Developer Experience',
    description: 'Intuitive APIs, comprehensive documentation, and powerful developer tools'
  },
  {
    title: 'Seamless Integration',
    description: 'All components work together flawlessly while maintaining compatibility with existing tools'
  },
  {
    title: 'Future-Proof',
    description: 'Designed with extensibility in mind to support emerging technologies and paradigms'
  }
];

const TechStack: React.FC = () => {
  return (
    <section id="stack" className="py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why Choose Vetra?</h2>
            <p className="text-gray-400">
              The Vetra Tech Stack was designed by developers, for developers. We've combined cutting-edge technology with practical experience to create a suite of tools that makes development faster, more enjoyable, and more productive.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {techDetails.map((detail, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-medium">{detail.title}</h3>
                  <p className="text-gray-400 text-sm">{detail.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-900/20 to-gray-900/20 rounded-2xl p-8 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Placeholder for code or terminal visualization */}
              <div className="absolute inset-0 bg-[#0a0a0a] rounded-lg overflow-hidden">
                <pre className="text-xs text-red-400 p-5 font-mono">
                  <code>
{`// Vetra language example
import { data } from "vetradb"
import { render } from "vetraui"

@Component
class Dashboard {
  @State
  counter = 0
  
  increment() {
    this.counter++
  }
  
  render() {
    return (
      <Container>
        <Text>Count: {this.counter}</Text>
        <Button onClick={this.increment}>
          Increment
        </Button>
      </Container>
    )
  }
}

export default Dashboard`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
