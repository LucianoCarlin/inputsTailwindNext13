import React, { useEffect, useState } from "react";
import { tv } from "tailwind-variants";

const gridList = tv({
  base: "grid gap-4",
  variants: {
    columns: {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
      7: "grid-cols-7",
      8: "grid-cols-8",
    },
  },
  defaultVariants: {
    columns: 2,
  },
});

export interface GridListProps {
  children: React.ReactNode;
  numColumns?:
    | number
    | {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        "2xl"?: number;
      };
}

export function GridList({ children, numColumns }: GridListProps) {
  const [responsiveColumns, setResponsiveColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (typeof numColumns === "object") {
        if (window.innerWidth >= 1536 && numColumns["2xl"] !== undefined) {
          setResponsiveColumns(numColumns["2xl"]);
        } else if (window.innerWidth >= 1280 && numColumns.xl !== undefined) {
          setResponsiveColumns(numColumns.xl);
        } else if (window.innerWidth >= 1024 && numColumns.lg !== undefined) {
          setResponsiveColumns(numColumns.lg);
        } else if (window.innerWidth >= 768 && numColumns.md !== undefined) {
          setResponsiveColumns(numColumns.md);
        } else if (window.innerWidth >= 640 && numColumns.sm !== undefined) {
          setResponsiveColumns(numColumns.sm);
        } else if (numColumns.xs !== undefined) {
          setResponsiveColumns(numColumns.xs);
        }
      } else {
        setResponsiveColumns(numColumns || 3);
      }
    };

    handleResize(); // Set initial columns
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [numColumns]);

  return (
    <div className={`grid gap-4 grid-cols-${responsiveColumns}`}>
      {children}
    </div>
  );
}
