import React from "react";

export interface GridListProps {
  children: React.ReactNode;
  minColumns?: number;
  maxColumns?: number;
}

export function GridList({
  children,
  minColumns = 1,
  maxColumns = 6,
}: GridListProps) {
  const childArray = React.Children.toArray(children);
  const itemCount = childArray.length;
  const numColumns = Math.min(maxColumns, Math.max(minColumns, itemCount));

  return <div className={`grid grid-cols-${numColumns} gap-4`}>{children}</div>;
}
