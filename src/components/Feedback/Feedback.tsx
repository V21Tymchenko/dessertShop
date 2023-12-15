import { FC, useRef } from "react";
import { Navigation, Keyboard } from "swiper/modules";
import { SwiperProps, SwiperRef } from "swiper/react";
import Avatar from "@/assets/delete/Ellipse 1.jpg";
import Stars from "@/assets/delete/Frame 6.svg";
import "swiper/css/navigation";
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


interface KeyBoardProps {
  enabled: boolean;
  onlyInViewport: boolean;
  pageUpDown: boolean;
}

interface MySwiperProps extends SwiperProps {
  spaceBetween: number;
  mousewheel: boolean;
  keyboard: KeyBoardProps;
  slidesPerView: number;
  rewind: boolean;
}

const Feedback: FC = () => {
  const swiperRef = useRef<SwiperRef | null>(null);

  const onClickPrev = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slidePrev();
    }
  };
  const onClickNext = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slidePrev();
    }
  };

  const onSwiperHandler: SwiperProps["onSwiper"] = swiper => {
    swiperRef.current = swiper;
  };

  return (
    <FeedbackSection>
      <FeedbackTitleContainer>
        <MainTitle>Про нас говорять</MainTitle>
        <ButtonsContainer>
          <SliderButton onClick={onClickNext}>
            <SliderIconLeft />
          </SliderButton>
          <SliderButton onClick={onClickPrev}>
            <SliderIconRight />
          </SliderButton>
        </ButtonsContainer>
      </FeedbackTitleContainer>
      <FeedbackList<MySwiperProps>
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
        ref={swiperRef}
        onSwiper={onSwiperHandler}
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
