import bentoCakes from "@/assets/images/category/bento.webp";
import bentoRetina from "@/assets/images/category/bentoRetina.webp";
import macaroni from "@/assets/images/category/macaroni.webp";
import macaroniRetina from "@/assets/images/category/macaroniRetina.webp";
import pastry from "@/assets/images/category/pastry.webp";
import pastryRetina from "@/assets/images/category/pastryRetina.webp";
import cakes from "@/assets/images/category/cake.webp";
import CakesRetina from "@/assets/images/category/cakeRetina.webp";
import newCake from "@/assets/images/category/newCake.webp";
import newCakesRetina from "@/assets/images/category/newCakeRetina.webp";

export interface CakesCategoryProps {
  id: number;
  text: string;
  path: string;
  src: string;
  cakesRetina: string;
  color: string;
  home: boolean;
}

const cakesCategory: CakesCategoryProps[] = [
  {
    id: 1,
    text: "Торти на різні події",
    path: "/cakes",
    src: cakes,
    cakesRetina: CakesRetina,
    color: "#f7d1de",
    home: true,
  },
  {
    id: 2,
    text: "Бенто-торти",
    path: "/bento",
    src: bentoCakes,
    cakesRetina: bentoRetina,
    color: "#ffeb98",
    home: true,
  },
  {
    id: 3,
    text: "Макаруни",
    path: "/macaroon",
    src: macaroni,
    cakesRetina: macaroniRetina,
    color: "#bff3ee",
    home: true,
  },
  {
    id: 4,
    text: "Тістечка",
    path: "/tarts",
    src: pastry,
    cakesRetina: pastryRetina,
    color: "#cddafa",
    home: true,
  },
  {
    id: 5,
    text: "Новинки",
    path: "/newCakes",
    src: newCake,
    cakesRetina: newCakesRetina,
    color: "#cddafa",
    home: false,
  },
];
export default cakesCategory;
