export interface GramOption {
  weight: number;
  label: string;
}
export const gramsOptionsTarts: GramOption[] = [
  { weight: 50, label: "50 г" },
  { weight: 55, label: "55 г" },
  { weight: 120, label: "120 г" },
  { weight: 160, label: "160 г" },
];
export const quantityOptionsMacaroon: GramOption[] = [
  { weight: 8, label: "8 шт" },
  { weight: 12, label: "12 шт" },
  { weight: 24, label: "24 шт" },
  { weight: 32, label: "30 і більше" },
];
export const quantityOptionsCakes: GramOption[] = [
  { weight: 1000, label: "1 кг" },
  { weight: 2500, label: "2,5 кг" },
  { weight: 4000, label: "4 кг" },
];