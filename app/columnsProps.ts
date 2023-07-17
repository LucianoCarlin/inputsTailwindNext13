export interface MenuProps {
  id?: number;
  name?: string;
  icon: string;
  type: "parent" | "children" | "subChildren";
  relacionamento: number;
}
