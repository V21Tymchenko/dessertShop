export interface navItemsProp {
  href: string;
  text: string;
}
const navItems: navItemsProp[] = [
  { href: "catalog", text: "Каталог" },
  { href: "constructor", text: "Конструктор товарів" },
  { href: "about", text: "Про нас" },
  { href: "delivery", text: "Доставка і оплата" },
  { href: "cooperation", text: "Співпраця" },
  { href: "questions", text: "Питання та відповіді" },
  { href: "contacts", text: "Контакти" },
];

export default navItems;
