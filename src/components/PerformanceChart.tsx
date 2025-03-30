
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for the performance chart
const performanceData = [
  {
    name: 'Jan',
    optimized: 1000,
    staticYield: 1000,
    marketIndex: 1000,
  },
  {
    name: 'Feb',
    optimized: 1120,
    staticYield: 1080,
    marketIndex: 1040,
  },
  {
    name: 'Mar',
    optimized: 1250,
    staticYield: 1150,
    marketIndex: 1090,
  },
  {
    name: 'Apr',
    optimized: 1480,
    staticYield: 1230,
    marketIndex: 1110,
  },
  {
    name: 'May',
    optimized: 1390,
    staticYield: 1200,
    marketIndex: 1050,
  },
  {
    name: 'Jun',
    optimized: 1590,
    staticYield: 1330,
    marketIndex: 1120,
  },
  {
    name: 'Jul',
    optimized: 1740,
    staticYield: 1400,
    marketIndex: 1170,
  },
  {
    name: 'Aug',
    optimized: 1980,
    staticYield: 1510,
    marketIndex: 1230,
  },
  {
    name: 'Sep',
    optimized: 2220,
    staticYield: 1640,
    marketIndex: 1280,
  },
  {
    name: 'Oct',
    optimized: 2490,
    staticYield: 1750,
    marketIndex: 1340,
  },
  {
    name: 'Nov',
    optimized: 2710,
    staticYield: 1880,
    marketIndex: 1390,
  },
  {
    name: 'Dec',
    optimized: 3100,
    staticYield: 2020,
    marketIndex: 1450,
  },
];

// Custom tooltip
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-popover p-3 border border-border rounded-md shadow-md">
        <p className="font-medium mb-2">{label}</p>
        {payload.map((item: any, index: number) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
            <p className="text-sm">{`${item.name}: $${item.value.toLocaleString()}`}</p>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const PerformanceChart = () => {
  return (
    <Card className="defi-card">
      <CardHeader>
        <CardTitle>Performance Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="1y" className="mb-4">
          <TabsList>
            <TabsTrigger value="1m">1M</TabsTrigger>
            <TabsTrigger value="3m">3M</TabsTrigger>
            <TabsTrigger value="6m">6M</TabsTrigger>
            <TabsTrigger value="1y">1Y</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }} 
                axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
                tickLine={{ stroke: 'rgba(255,255,255,0.2)' }}
              />
              <YAxis 
                tickFormatter={(value) => `$${value.toLocaleString()}`}
                tick={{ fontSize: 12 }}
                axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
                tickLine={{ stroke: 'rgba(255,255,255,0.2)' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="optimized"
                name="ML-Optimized"
                stroke="#10B981"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="staticYield"
                name="Static Yield"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="marketIndex"
                name="Market Index"
                stroke="#8B5CF6"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="p-3 rounded-lg bg-secondary/30">
            <p className="text-xs text-muted-foreground">ML-Optimized ROI</p>
            <p className="text-lg font-bold text-defi-green">+210.0%</p>
          </div>
          <div className="p-3 rounded-lg bg-secondary/30">
            <p className="text-xs text-muted-foreground">Static Yield ROI</p>
            <p className="text-lg font-bold text-defi-blue">+102.0%</p>
          </div>
          <div className="p-3 rounded-lg bg-secondary/30">
            <p className="text-xs text-muted-foreground">Market Index ROI</p>
            <p className="text-lg font-bold text-defi-purple">+45.0%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
