
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { ProtocolData } from './ProtocolCard';

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
      <CardHeader>
        <CardTitle>Optimal Portfolio Allocation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  labelLine={false}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[entry.protocol as keyof typeof COLORS]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex flex-col justify-center space-y-8">
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
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioAllocation;
