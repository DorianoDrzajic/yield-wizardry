
import React, { useState } from 'react';
import Header from '@/components/Header';
import ProtocolCard from '@/components/ProtocolCard';
import OptimizationCard from '@/components/OptimizationCard';
import PortfolioAllocation from '@/components/PortfolioAllocation';
import PerformanceChart from '@/components/PerformanceChart';
import { protocols, optimalAllocations } from '@/data/mockData';

const Index = () => {
  const [selectedProtocol, setSelectedProtocol] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col space-y-6">
            {/* Hero section */}
            <section className="text-center space-y-4 mb-8">
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-defi-green via-defi-blue to-defi-purple">
                Yield Wizardry
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                ML-driven yield optimization that dynamically reallocates capital across DeFi protocols for maximum risk-adjusted returns.
              </p>
            </section>
            
            {/* Analytics Overview */}
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
              <div className="glass-card p-6">
                <div className="text-sm text-muted-foreground">Total Value Locked</div>
                <div className="text-3xl font-bold mt-2">$4.28B</div>
                <div className="text-sm text-defi-green mt-1">↑ 5.2% (24h)</div>
              </div>
              <div className="glass-card p-6">
                <div className="text-sm text-muted-foreground">Average APY</div>
                <div className="text-3xl font-bold mt-2">8.12%</div>
                <div className="text-sm text-defi-red mt-1">↓ 0.4% (24h)</div>
              </div>
              <div className="glass-card p-6">
                <div className="text-sm text-muted-foreground">Active Strategies</div>
                <div className="text-3xl font-bold mt-2">24</div>
                <div className="text-sm text-defi-green mt-1">↑ 2 (24h)</div>
              </div>
              <div className="glass-card p-6">
                <div className="text-sm text-muted-foreground">Gas Saved (7d)</div>
                <div className="text-3xl font-bold mt-2">$183K</div>
                <div className="text-sm text-defi-green mt-1">↑ 12.5% (24h)</div>
              </div>
            </section>
            
            {/* Main dashboard grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 space-y-6">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Yield Opportunities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {protocols.slice(0, 6).map((protocol) => (
                      <ProtocolCard
                        key={protocol.id}
                        protocol={protocol}
                        onClick={() => setSelectedProtocol(protocol.id)}
                      />
                    ))}
                  </div>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">Performance Analysis</h2>
                  <PerformanceChart />
                </section>
              </div>
              
              <div className="lg:col-span-4 space-y-6">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Optimization</h2>
                  <OptimizationCard />
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">Allocation</h2>
                  <PortfolioAllocation 
                    protocols={protocols} 
                    allocations={optimalAllocations} 
                  />
                </section>
              </div>
            </div>
            
            <section className="mt-12 mb-8">
              <h2 className="text-2xl font-bold mb-4">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass-card p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-defi-green/20 flex items-center justify-center text-defi-green font-bold text-xl">1</div>
                  <h3 className="text-xl font-semibold">Data Collection</h3>
                  <p className="text-muted-foreground">Real-time monitoring of yields, impermanent loss, and risk metrics across major DeFi protocols.</p>
                </div>
                <div className="glass-card p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-defi-blue/20 flex items-center justify-center text-defi-blue font-bold text-xl">2</div>
                  <h3 className="text-xl font-semibold">ML Optimization</h3>
                  <p className="text-muted-foreground">Markowitz-style portfolio optimization adjusted for DeFi-specific risks and market conditions.</p>
                </div>
                <div className="glass-card p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-defi-purple/20 flex items-center justify-center text-defi-purple font-bold text-xl">3</div>
                  <h3 className="text-xl font-semibold">Smart Rebalancing</h3>
                  <p className="text-muted-foreground">Automated capital reallocation via gas-optimized smart contracts to maximize risk-adjusted returns.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <footer className="border-t border-border">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="font-bold text-xl">
                Yield<span className="text-primary">Wizardry</span>
              </div>
              <div className="text-sm text-muted-foreground">© 2023</div>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">About</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Documentation</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">GitHub</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
