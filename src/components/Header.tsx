
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, BarChart4, Wallet, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-lg bg-background/50 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">
            Yield<span className="text-primary">Wizardry</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <NavItem href="#" icon={<BarChart4 className="h-4 w-4 mr-2" />}>Dashboard</NavItem>
          <NavItem href="#" icon={<Wallet className="h-4 w-4 mr-2" />}>Portfolio</NavItem>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:flex border border-primary/20 text-primary hover:bg-primary/10 hover:text-primary">
            Connect Wallet
          </Button>
          <Button variant="default" className="hidden md:flex">
            Start Optimizing
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

interface NavItemProps {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const NavItem = ({ href, icon, children, className }: NavItemProps) => {
  return (
    <a 
      href={href} 
      className={cn(
        "flex items-center text-sm font-medium transition-colors hover:text-primary",
        className
      )}
    >
      {icon}
      {children}
    </a>
  );
};

export default Header;
