import { FC } from "react";
import { Formik } from "formik";
import macaroni from "@/assets/images/feedbackForm/macaroni.png";
import macaroniRetina from "@/assets/images/feedbackForm/macaroniX2.png";
import Button from "../Button/Button";
import ImageLeft from "@/assets/images/feedbackForm/Vector.webp";
import ImageLeftRetina from "@/assets/images/feedbackForm/VectorRetina.webp";
import bckImageRight from "@/assets/images/feedbackForm/rightBckImage.webp";
import ImageRightRetina from "@/assets/images/feedbackForm/rightBckImageX2.webp";

import {
  BackgroundImgLeft,
  BackgroundImgRight,
  BckImage,
  FeedbackFormSection,
  FormConytainer,
  MainTitle,
  StyledFeedbackForm,
  StyledInputForm,
} from "./FeedbackForm.styled";

interface ValuesProp {
  name: string;
  phone: string;
}
const initialValues = {
  name: "",
  phone: "",
};

const FeedbackForm: FC = () => {
  const handleSubmit = (values: ValuesProp):void => {
    console.log(values);
  };

  return (
    <FeedbackFormSection>
      <FormConytainer>
        <MainTitle>Замовити зворотній зв’язок</MainTitle>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <StyledFeedbackForm>
            <StyledInputForm type="text" name="name" placeholder="Ваше ім’я" />
            <StyledInputForm type="tel" name="phone" placeholder="Ваш номер" />
            <Button
              type="submit"
              variant={"input"}
              text={"Передзвоніть мені"}
            />
          </StyledFeedbackForm>
        </Formik>
      </FormConytainer>
      <BackgroundImgRight>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${bckImageRight} 1x, ${ImageRightRetina} 2x`}
            type="image/webp"
          />
          <BckImage
            src={bckImageRight}
            alt="background design"
            loading="lazy"
          />
        </picture>
      </BackgroundImgRight>
      <BackgroundImgLeft>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${ImageLeft} 1x, ${ImageLeftRetina} 2x`}
            type="image/webp"
          />
          <BckImage src={ImageLeft} alt="background design" loading="lazy" />
        </picture>
      </BackgroundImgLeft>

      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={`${macaroni} 1x, ${macaroniRetina} 2x`}
          type="image/webp"
        />
        <img src={macaroni} alt="image macaroni" loading="lazy" />
      </picture>
    </FeedbackFormSection>
  );
};
export default FeedbackForm;
