import React from 'react';
import { cn } from '@/lib/utils';

interface TicketCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  headerContent?: React.ReactNode;
}

export function TicketCard({ children, headerContent, className, ...props }: TicketCardProps) {
  return (
    <div 
      className={cn(
        "relative flex flex-col w-full rounded-2xl overflow-hidden bg-[var(--bg-surface)] shadow-lg hover:shadow-xl transition-all duration-300 border-none group",
        className
      )}
      {...props}
    >
      {/* Top Section */}
      {headerContent && (
        <div className="relative w-full">
          {headerContent}
        </div>
      )}
      
      {/* Perforated Divider (Ticket Tear Line) */}
      <div className="relative h-8 w-full flex items-center bg-transparent overflow-hidden z-10">
        {/* Left Notch */}
        <div className="absolute left-0 -ml-4 w-8 h-8 rounded-full bg-[var(--bg-base)] border-none z-20 shadow-inner" />
        {/* Right Notch */}
        <div className="absolute right-0 -mr-4 w-8 h-8 rounded-full bg-[var(--bg-base)] border-none z-20 shadow-inner" />
        {/* Dashed Line */}
        <div className="w-full border-t-2 border-dashed border-amber-300/40 mx-6 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Bottom Section */}
      <div className="relative flex-1 p-6 pt-0 bg-transparent flex flex-col">
        {children}
      </div>
    </div>
  );
}
