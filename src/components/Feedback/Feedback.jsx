import Avatar from "@/assets/delete/Ellipse 1.jpg";
import Stars from "@/assets/delete/Frame 6.svg";
import { useRef } from "react";
import "swiper/css/navigation";
import { Navigation, Keyboard } from "swiper/modules";

import {
  AboutUserContainer,
  ButtonsContainer,
  ContentContainer,
  FeedbackData,
  FeedbackItem,
  FeedbackList,
  FeedbackSection,
  FeedbackTitle,
  FeedbackTitleContainer,
  FeetbackAvatar,
  MainTitle,
  SliderButton,
  SliderIconLeft,
  SliderIconRight,
  UserContantContainer,
} from "./Feedback.styled";


const Feedback = () => {
  const swiperRef = useRef();

  return (
    <FeedbackSection>
      <FeedbackTitleContainer>
        <MainTitle>Про нас говорять</MainTitle>
        <ButtonsContainer>
          <SliderButton onClick={() => swiperRef.current.slideNext()}>
            <SliderIconLeft />
          </SliderButton>
          <SliderButton onClick={() => swiperRef.current.slidePrev()}>
            <SliderIconRight />
          </SliderButton>
        </ButtonsContainer>
      </FeedbackTitleContainer>
      <FeedbackList
        spaceBetween={40}
        mousewheel={true}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        }}
        slidesPerView={3}
        rewind={true}
        modules={[Navigation, Keyboard]}
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
        className="mySwiper"
      >
        <FeedbackItem>
          <p>
            Тут завжди можна знайти чудові тортики та солодощі на будь-який
            смак. Обожнюю їх шоколадні торти та безліч начинок для макаронс.
            Раджу спробувати!
          </p>
          <ContentContainer>
            <FeedbackData>15.11.2022</FeedbackData>
            <UserContantContainer>
              <FeetbackAvatar src={Avatar} title="avatar" />
              <AboutUserContainer>
                <FeedbackTitle>Ірина</FeedbackTitle>
                <p>студентка</p>
              </AboutUserContainer>
              <img src={Stars} title="stars" />
            </UserContantContainer>
          </ContentContainer>
        </FeedbackItem>
        <FeedbackItem>
          <p>
            Тут завжди можна знайти чудові тортики та солодощі на будь-який
            смак. Обожнюю їх шоколадні торти та безліч начинок для макаронс.
            Раджу спробувати!
          </p>
          <ContentContainer>
            <FeedbackData>15.11.2022</FeedbackData>
            <UserContantContainer>
              <FeetbackAvatar src={Avatar} title="avatar" />
              <AboutUserContainer>
                <FeedbackTitle>Ірина</FeedbackTitle>
                <p>студентка</p>
              </AboutUserContainer>
              <img src={Stars} title="stars" />
            </UserContantContainer>
          </ContentContainer>
        </FeedbackItem>
        <FeedbackItem>
          <p>
            Тут завжди можна знайти чудові тортики та солодощі на будь-який
            смак. Обожнюю їх шоколадні торти та безліч начинок для макаронс.
            Раджу спробувати!
          </p>
          <ContentContainer>
            <FeedbackData>15.11.2022</FeedbackData>
            <UserContantContainer>
              <FeetbackAvatar src={Avatar} title="avatar" />
              <AboutUserContainer>
                <FeedbackTitle>Ірина</FeedbackTitle>
                <p>студентка</p>
              </AboutUserContainer>
              <img src={Stars} title="stars" />
            </UserContantContainer>
          </ContentContainer>
        </FeedbackItem>
        <FeedbackItem>
          <p>
            Тут завжди можна знайти чудові тортики та солодощі на будь-який
            смак. Обожнюю їх шоколадні торти та безліч начинок для макаронс.
            Раджу спробувати!
          </p>
          <ContentContainer>
            <FeedbackData>15.11.2022</FeedbackData>
            <UserContantContainer>
              <FeetbackAvatar src={Avatar} title="avatar" />
              <div>
                <FeedbackTitle>Ірина</FeedbackTitle>
                <p>студентка</p>
              </div>
              <img src={Stars} title="stars" />
            </UserContantContainer>
          </ContentContainer>
        </FeedbackItem>
        <FeedbackItem>
          <p>
            Тут завжди можна знайти чудові тортики та солодощі на будь-який
            смак. Обожнюю їх шоколадні торти та безліч начинок для макаронс.
            Раджу спробувати!
          </p>
          <ContentContainer>
            <FeedbackData>15.11.2022</FeedbackData>
            <UserContantContainer>
              <FeetbackAvatar src={Avatar} title="avatar" />
              <div>
                <FeedbackTitle>Ірина</FeedbackTitle>
                <p>студентка</p>
              </div>
              <img src={Stars} title="stars" />
            </UserContantContainer>
          </ContentContainer>
        </FeedbackItem>
        <FeedbackItem>
          <p>
            Тут завжди можна знайти чудові тортики та солодощі на будь-який
            смак. Обожнюю їх шоколадні торти та безліч начинок для макаронс.
            Раджу спробувати!
          </p>
          <ContentContainer>
            <FeedbackData>15.11.2022</FeedbackData>
            <UserContantContainer>
              <img src={Avatar} title="avatar" />
              <div>
                <FeedbackTitle>Ірина</FeedbackTitle>
                <p>студентка</p>
              </div>
              <img src={Stars} title="stars" />
            </UserContantContainer>
          </ContentContainer>
        </FeedbackItem>
      </FeedbackList>
    </FeedbackSection>
  );
};
export default Feedback;
