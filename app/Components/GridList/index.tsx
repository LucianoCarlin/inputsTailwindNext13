import React from "react";

export interface GridListProps {
  children: React.ReactNode;
}

export function GridList({ children }: GridListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
      {children}
    </div>
  );
}
