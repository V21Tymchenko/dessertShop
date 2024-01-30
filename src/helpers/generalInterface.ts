import { PriceOptionProps } from "@/helpers/definitions/priceOptions";
import { GramOption } from '@/helpers/definitions/gramsOprions';

export interface AllCakesProps {
  id: number;
  name: string;
  price: number;
  imagePath: string;
  weight?: number;
  quantity?: string;
  for?: string;
  [key: string]: string | number | undefined;
}

export interface FiltersProps {
  type: string;
  priceOptions: PriceOptionProps[];
  gramsOptions: GramOption[];
  filterTypeCakes: string;
  typeGrams: string;
  filterName: string;
  setFilterCake: (filterCake: AllCakesProps[]) => void;
  options: string[];
}

export interface CakeTypeProps {
  type: string;
  title: string;
  cakeType: string;
  priceOptions: PriceOptionProps[];
  gramsOptions?: GramOption[];
  options: string[];
  filterName: string;
  typeGrams?: string;
}
export interface initialValuesProps {
  [key: string]: string;
}