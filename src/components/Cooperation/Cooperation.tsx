import { initialValuesProps } from "@/helpers/generalInterface";
import { Formik } from "formik";
import { FC } from "react";
import CatalogNavigation from "../CatalogReusedComponents/CatalogNavigation";
import tarts from "@/assets/images/cooperation/tarts.webp";
import tartsRetina from "@/assets/images/cooperation/tartsRetina.webp";
import macaroon from "@/assets/images/cooperation/macaroon.webp";
import macaroonRetina from "@/assets/images/cooperation/macaroonRetina.webp";
import {
  ContactsForm,
  ContactsInput,
  ContactsLabel,
  ContactsLabelContainer,
  ContactsSection,
  CooperationContainer,
  CooperationContentContainer,
  CooperationContentTitle,
  CooperationList,
  CooperationMainTitle,
  CooperationTitle,
} from "./Cooperation.styled";
import Button from "../Button/Button";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  company: "",
  comment: "",
};

const Cooperation: FC = () => {
  const handleSubmit = (values: initialValuesProps) => {
    console.log(values);
  };

  return (
    <>
      <section>
        <CatalogNavigation
          navigationLinks={[
            { hash: "/cooperation", name: "Співпраця", $active: true },
          ]}
        />
        <CooperationContainer>
          <CooperationContentContainer>
            <CooperationMainTitle>Співпраця</CooperationMainTitle>
            <p>
              В Майстерні Десертів ми завжди відкриті до нових можливостей
              співпраці. Якщо ви прагнете додати солодкої нотки у ваш бізнес чи
              подію, ми готові обговорити індивідуальні умови співпраці. Наша
              команда кондитерів готова реалізувати ваші ідеї та створити
              солодкі десерти, які будуть смакувати вашим клієнтам та гостям.
            </p>
          </CooperationContentContainer>
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={`${tarts} 1x, ${tartsRetina} 2x`}
              type="image/webp"
            />
            <img src={tarts} alt="Tarts" loading="lazy" />
          </picture>
        </CooperationContainer>
        <CooperationContainer>
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={`${macaroon} 1x, ${macaroonRetina} 2x`}
              type="image/webp"
            />
            <img src={macaroon} alt="Macaroon" loading="lazy" />
          </picture>
          <CooperationContentContainer>
            <CooperationTitle>Області співпраці</CooperationTitle>
            <CooperationList>
              <li>
                <CooperationContentTitle>
                  Ресторани та кафе
                </CooperationContentTitle>
                <p>
                  Можливість розширити ваше меню та здивувати клієнтів
                  унікальними десертами
                </p>
              </li>
              <li>
                <CooperationContentTitle>
                  Оптові замовлення.{" "}
                </CooperationContentTitle>
                <p>
                  Готові стати вашим надійним партнером у сфері оптових
                  постачань солодких виробів. Звертайтеся до нас для обговорення
                  умов оптових замовлень.
                </p>
              </li>
              <li>
                <CooperationContentTitle>
                  Благодійні організації
                </CooperationContentTitle>
                <p>
                  Прагнемо бути частиною доброчинних ініціатив та готові
                  допомагати у реалізації благодійних проектів та громадських
                  ініціатив.
                </p>
              </li>
            </CooperationList>
          </CooperationContentContainer>
        </CooperationContainer>
      </section>
      <ContactsSection>
        <h5>Контактна інформація</h5>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          <ContactsForm>
            <ContactsLabelContainer>
              <ContactsLabel>
                Прізвище та ім’я
                <ContactsInput
                  type="text"
                  name="name"
                  placeholder="Введіть прізвище та ім’я"
                ></ContactsInput>
              </ContactsLabel>
              <ContactsLabel>
                Номер телефону
                <ContactsInput
                  type="tel"
                  name="phone"
                  placeholder="Введіть номер телефону"
                ></ContactsInput>
              </ContactsLabel>
            </ContactsLabelContainer>
            <ContactsLabelContainer>
              <ContactsLabel>
                Пошта
                <ContactsInput
                  type="email"
                  name="email"
                  placeholder="Введіть пошту"
                ></ContactsInput>
              </ContactsLabel>
              <ContactsLabel>
                Компанія
                <ContactsInput
                  type="text"
                  name="company"
                  placeholder="Введіть назву компанії"
                ></ContactsInput>
              </ContactsLabel>
            </ContactsLabelContainer>
            <label>
              Коментар
              <textarea name="comment" placeholder="Коментар"></textarea>
            </label>
            <Button
              type="submit"
              text="Відправити"
              maxwidth="398px"
              margintop="40px"
            />
          </ContactsForm>
        </Formik>
      </ContactsSection>
    </>
  );
};

export default Cooperation;
