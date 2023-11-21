import advantageFirst from "@/assets/images/advantage/advantage1.svg";
import advantageSecond from "@/assets/images/advantage/advantage2.svg";
import advantageThird from "@/assets/images/advantage/advantage3.svg";
import advantageFourth from "@/assets/images/advantage/advantage4.svg";
import {
  OurAdvantageItem,
  OurAdvantageList,
  OurAdvantageSection,
  OurAdvantageText,
  OurAdvantageTitle,
} from "./Advantages.styled";
const Advantages = () => {
  return (
    <OurAdvantageSection>
      <OurAdvantageList>
        <OurAdvantageItem>
          <img src={advantageFirst} alt="Різноманітність смаків" />
          <div>
            <OurAdvantageTitle>Різноманітність смаків</OurAdvantageTitle>
            <OurAdvantageText>Широкий вибір асортименту</OurAdvantageText>
          </div>
        </OurAdvantageItem>
        <OurAdvantageItem>
          <img src={advantageSecond} alt="Ексклюзивність" />
          <div>
            <OurAdvantageTitle>Ексклюзивність</OurAdvantageTitle>
            <OurAdvantageText>Унікальний підхід до дизайну</OurAdvantageText>
          </div>
        </OurAdvantageItem>
        <OurAdvantageItem>
          <img src={advantageThird} alt="Гарантія доставки" />
          <div>
            <OurAdvantageTitle>Гарантія доставки</OurAdvantageTitle>
            <OurAdvantageText>
              Готові вчасно і доставлені в термін
            </OurAdvantageText>
          </div>
        </OurAdvantageItem>
        <OurAdvantageItem>
          <img src={advantageFourth} alt="Якість та Свіжість" />
          <div>
            <OurAdvantageTitle>Якість та Свіжість</OurAdvantageTitle>
            <OurAdvantageText>Найкращі інгредієнти</OurAdvantageText>
          </div>
        </OurAdvantageItem>
      </OurAdvantageList>
    </OurAdvantageSection>
  );
};
export default Advantages;
