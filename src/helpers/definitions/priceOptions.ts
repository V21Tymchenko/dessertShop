export interface PriceOptionProps {
  minPrice: number;
  maxPrice: number;
  label: string;
}
export const priceTartsOptions: PriceOptionProps[] = [
  { minPrice: 0, maxPrice: 100, label: "0 - 100 грн" },
  { minPrice: 101, maxPrice: 150, label: "101 - 150 грн" },
  { minPrice: 160, maxPrice: 10000, label: "від 160 грн" },
];
export const priceMacaroonOptions: PriceOptionProps[] = [
  { minPrice: 440, maxPrice: 560, label: "440 - 560 грн" },
  { minPrice: 660, maxPrice: 800, label: "660 - 800 грн" },
  { minPrice: 1100, maxPrice: 1400, label: "1100 - 1400 грн" },
  { minPrice: 1500, maxPrice: 3000, label: "1500 - 3000 грн" },
];
export const priceBentoOptions: PriceOptionProps[] = [
  { minPrice: 200, maxPrice: 350, label: "200 - 350 грн" },
  { minPrice: 350, maxPrice: 450, label: "350 - 450 грн" },
  { minPrice: 450, maxPrice: 600, label: "450 - 600 грн" },
];
export const priceCakesOptions: PriceOptionProps[] = [
  { minPrice: 500, maxPrice: 1500, label: "500 - 1500 грн" },
  { minPrice: 1600, maxPrice: 2600, label: "1600 - 2600 грн" },
  { minPrice: 2700, maxPrice: 3700, label: "2700 - 3700 грн" },
  { minPrice: 3800, maxPrice: 4900, label: "3800 - 4900 грн" },
];
