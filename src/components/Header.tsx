
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, BarChart4, Wallet, Menu, X, Bell, Settings, HelpCircle, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <NavItem href="#" icon={<Settings className="h-4 w-4 mr-2" />}>Settings</NavItem>
          <NavItem href="#" icon={<HelpCircle className="h-4 w-4 mr-2" />}>Help</NavItem>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
          </Button>
          
          <Button variant="outline" className="hidden md:flex border border-primary/20 text-primary hover:bg-primary/10 hover:text-primary">
            Connect Wallet
          </Button>
          <Button variant="default" className="hidden md:flex">
            Start Optimizing
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="py-4">
                <div className="flex flex-col space-y-4 px-2">
                  <MobileNavItem href="#" icon={<BarChart4 className="h-5 w-5 mr-3" />}>Dashboard</MobileNavItem>
                  <MobileNavItem href="#" icon={<Wallet className="h-5 w-5 mr-3" />}>Portfolio</MobileNavItem>
                  <MobileNavItem href="#" icon={<Settings className="h-5 w-5 mr-3" />}>Settings</MobileNavItem>
                  <MobileNavItem href="#" icon={<HelpCircle className="h-5 w-5 mr-3" />}>Help</MobileNavItem>
                  <MobileNavItem href="#" icon={<Bell className="h-5 w-5 mr-3" />}>Notifications</MobileNavItem>
                  <MobileNavItem href="#" icon={<User className="h-5 w-5 mr-3" />}>Account</MobileNavItem>
                </div>
                <div className="mt-8 px-2 space-y-4">
                  <Button variant="outline" className="w-full border border-primary/20 text-primary hover:bg-primary/10 hover:text-primary">
                    Connect Wallet
                  </Button>
                  <Button variant="default" className="w-full">
                    Start Optimizing
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
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

const MobileNavItem = ({ href, icon, children, className }: NavItemProps) => {
  return (
    <a 
      href={href} 
      className={cn(
        "flex items-center text-base font-medium py-3 px-3 rounded-md transition-colors hover:bg-secondary",
        className
      )}
    >
      {icon}
      {children}
    </a>
  );
};

export default Header;
