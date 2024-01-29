import { FC, useState } from "react";
import {
  DescriptionCakeButton,
  DescriptionCakeContainer,
  DescriptionCakeList,
  DescriptionCakeTitle,
  DescriptionDeliveryList,
  DescriptionText,
} from "./CakeDescriptionById.styled";

const CakeDescriptionById: FC = () => {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <DescriptionCakeContainer>
      <DescriptionCakeList>
        <li>
          {" "}
          <DescriptionCakeButton
            type="button"
            active={activeTab === "description" ? "true" : "false"}
            onClick={() => setActiveTab("description")}
          >
            Опис
          </DescriptionCakeButton>
        </li>
        <li>
          {" "}
          <DescriptionCakeButton
            type="button"
            active={activeTab === "storage" ? "true" : "false"}
            onClick={() => setActiveTab("storage")}
          >
            Терміни та умови зберігання
          </DescriptionCakeButton>
        </li>
        <li>
          {" "}
          <DescriptionCakeButton
            type="button"
            active={activeTab === "delivery" ? "true" : "false"}
            onClick={() => setActiveTab("delivery")}
          >
            Доставка
          </DescriptionCakeButton>
        </li>
      </DescriptionCakeList>
      {activeTab === "description" && (
        <>
          <DescriptionCakeTitle>Опис</DescriptionCakeTitle>
          <DescriptionText>
            Вага: <span>4 кг</span>
          </DescriptionText>
          <DescriptionText>
            Торт вражає своєю ніжністю та легкістю завдяки повітряним бісквітним
            коржам та невагомому крему на основі маскарпоне. Вишукані живі квіти
            додають елегантності, створюючи витвір мистецтва на фоні білого
            крему. Оберіть свою улюблену начинку для торта, і ми створимо
            неповторний десерт для вашого особливого дня.
          </DescriptionText>
        </>
      )}
      {activeTab === "storage" && (
        <>
          <DescriptionCakeTitle>
            Терміни та умови зберігання
          </DescriptionCakeTitle>
          <DescriptionText>
            Термін зберігання: <span>3 доби (72 години)</span>
          </DescriptionText>
          <DescriptionText>
            Умови зберігання: <span>+2-6°С та вологості не більше 75%</span>
          </DescriptionText>
        </>
      )}
      {activeTab === "delivery" && (
        <>
          <DescriptionCakeTitle>Доставка</DescriptionCakeTitle>

          <DescriptionDeliveryList>
            <li>
              <DescriptionText>
                Самовивіз - здійснюється з 09:00 до 20:00 за адресою м. Дніпро,
                вул. Кірова 1а
              </DescriptionText>
            </li>
            <li>
              <DescriptionText>
                Кур’єром на вашу адресу - додаткова оплата +200 грн
              </DescriptionText>
            </li>
          </DescriptionDeliveryList>
          <DescriptionText>
            Під час воєнного стану ми не можемо гарантувати точний час доставки
            виробів
          </DescriptionText>
        </>
      )}
    </DescriptionCakeContainer>
  );
};
export default CakeDescriptionById;
