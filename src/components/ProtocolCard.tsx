
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { InfoIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ProtocolData {
  id: string;
  name: string;
  apy: number;
  tvl: number; // in USD
  risk: number; // 1-10
  impermanentLoss: number; // percentage
  protocol: 'aave' | 'curve' | 'convex' | 'uniswap' | 'compound' | 'yearn';
  tokens: string[];
  description: string;
}

interface ProtocolCardProps {
  protocol: ProtocolData;
  onClick?: () => void;
}

const ProtocolCard: React.FC<ProtocolCardProps> = ({ protocol, onClick }) => {
  const { name, apy, tvl, risk, impermanentLoss, protocol: protocolName, tokens, description } = protocol;
  
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 2
    }).format(value);
  };

  const getRiskLabel = (risk: number): string => {
    if (risk <= 3) return 'Low';
    if (risk <= 6) return 'Medium';
    return 'High';
  };
  
  const getRiskColor = (risk: number): string => {
    if (risk <= 3) return 'bg-defi-green';
    if (risk <= 6) return 'bg-defi-yellow';
    return 'bg-defi-red';
  };

  return (
    <Card 
      className="defi-card cursor-pointer transition-all" 
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className={cn("protocol-badge", `protocol-badge-${protocolName}`)}>
              {protocolName.charAt(0).toUpperCase() + protocolName.slice(1)}
            </div>
            <div className="text-xs text-muted-foreground">{tokens.join(' / ')}</div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <InfoIcon className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="w-64">{description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <h3 className="text-lg font-semibold mt-1">{name}</h3>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">APY</div>
            <div className="text-xl font-bold text-primary">{apy.toFixed(2)}%</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">TVL</div>
            <div className="text-xl font-bold">{formatCurrency(tvl)}</div>
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">Risk</span>
            <span className="text-xs font-medium">{getRiskLabel(risk)}</span>
          </div>
          <Progress 
            value={risk * 10} 
            className="h-1.5" 
            indicatorClassName={getRiskColor(risk)} 
          />
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">Impermanent Loss</span>
            <span className="text-xs font-medium">{impermanentLoss}%</span>
          </div>
          <Progress 
            value={impermanentLoss} 
            className="h-1.5" 
            indicatorClassName="bg-defi-purple" 
          />
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <div className="w-full">
          <div className="text-xs text-muted-foreground mt-2">
            Optimal for medium-term deposits
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProtocolCard;
