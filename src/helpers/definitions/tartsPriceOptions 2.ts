export interface PriceOption {
  price: number;
  label: string;
}
export const priceOptions: PriceOption[] = [
  { price: 70, label: "0 - 100 грн" },
  { price: 145, label: "101 - 150 грн" },
  { price: 160, label: "від 160 грн" },
];
