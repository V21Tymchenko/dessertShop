import { FC } from "react";
import { Formik } from "formik";
import macaroons from "@/assets/images/aboutUs/macaroons.png";
import { initialValuesProps } from "@/helpers/generalInterface";
import {
  HelpForYouButton,
  HelpForYouContainer,
  HelpForYouContentContainer,
  HelpForYouForm,
  HelpForYouInput,
  HelpForYouPositionContainer,
  HelpForYouSection,
  HelpForYouTitle,
} from "./HelpForYou.styled";

const initialValues = {
  phone: "",
};

const HelpForYou: FC = () => {
  const handleSubmit = (values: initialValuesProps): void => {
    console.log(values);
  };
  return (
    <HelpForYouSection>
      <HelpForYouContainer>
        <HelpForYouPositionContainer>
          <HelpForYouContentContainer>
            <HelpForYouTitle>Потрібна допомога?</HelpForYouTitle>
            <p>
              Залиште свій контактний номер телефону, наш менеджер обов’язково
              зв’яжеться з тобою найближчим часом.
            </p>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <HelpForYouForm>
                <HelpForYouInput
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                />
                <HelpForYouButton type="submit">
                  Замовити дзвінок
                </HelpForYouButton>
              </HelpForYouForm>
            </Formik>
          </HelpForYouContentContainer>
          <img src={macaroons} alt="Macaroons" />
        </HelpForYouPositionContainer>
      </HelpForYouContainer>
    </HelpForYouSection>
  );
};

export default HelpForYou;
