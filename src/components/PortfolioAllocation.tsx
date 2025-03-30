
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { ProtocolData } from './ProtocolCard';
import { Button } from '@/components/ui/button';
import { Download, Share2, RotateCcw, Settings } from 'lucide-react';

interface PortfolioAllocationProps {
  protocols: ProtocolData[];
  allocations: { [key: string]: number }; // protocol id to percentage
}

const COLORS = {
  aave: '#B6509E',
  curve: '#FF0000',
  convex: '#1682FE',
  uniswap: '#FF007A',
  compound: '#00D395',
  yearn: '#0273F6',
};

const PortfolioAllocation: React.FC<PortfolioAllocationProps> = ({ protocols, allocations }) => {
  const data = protocols
    .filter((protocol) => allocations[protocol.id] > 0)
    .map((protocol) => ({
      name: protocol.name,
      value: allocations[protocol.id],
      protocol: protocol.protocol,
    }));

  // Calculate expected APY
  const expectedApy = protocols.reduce((total, protocol) => {
    const allocation = allocations[protocol.id] || 0;
    return total + (allocation / 100) * protocol.apy;
  }, 0);

  // Calculate risk score (weighted average)
  const riskScore = protocols.reduce((total, protocol) => {
    const allocation = allocations[protocol.id] || 0;
    return total + (allocation / 100) * protocol.risk;
  }, 0);

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-popover p-2 border border-border rounded-md shadow-md">
          <p className="font-medium">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="defi-card h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Optimal Portfolio Allocation</CardTitle>
        <div className="flex space-x-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="w-full h-[250px]">
              {data.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                      labelLine={false}
                    >
                      {data.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={COLORS[entry.protocol as keyof typeof COLORS]} 
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend 
                      layout="vertical" 
                      verticalAlign="middle" 
                      align="right"
                      wrapperStyle={{ fontSize: '12px', paddingLeft: '20px' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  No allocation data available
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">Expected APY</h4>
              <p className="text-3xl font-bold text-primary">{expectedApy.toFixed(2)}%</p>
              <p className="text-sm text-muted-foreground">Based on current market conditions</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">Risk Score</h4>
              <div className="flex items-center">
                <p className="text-3xl font-bold">{riskScore.toFixed(1)}</p>
                <span className="text-sm ml-2 text-muted-foreground">/ 10</span>
              </div>
              <p className="text-sm text-muted-foreground">Balanced risk profile</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">Rebalance Frequency</h4>
              <p className="text-lg font-medium">Weekly</p>
              <p className="text-sm text-muted-foreground">Next rebalance in 3 days</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-2">
              <Button variant="outline" size="sm">Auto-rebalance</Button>
              <Button variant="outline" size="sm">Set Alerts</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioAllocation;
