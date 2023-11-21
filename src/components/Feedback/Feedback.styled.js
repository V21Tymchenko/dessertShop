import styled from "styled-components";
import RightArrow from "@/assets/images/feedback/right-arrow-alt.svg?react";
import LeftArrow from "@/assets/images/feedback/left-arrow-alt.svg?react";
import { flexSpaceBetween } from "@/helpers/styles/fragments";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const FeedbackSection = styled.section`
  margin-top: ${({ theme }) => theme.spacing(30)};
  overflow: hidden;
`;

export const MainTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.mediumTitle};
`;

export const FeedbackList = styled(Swiper)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(10)};
  margin-top: ${({ theme }) => theme.spacing(10)};
`;
export const FeedbackItem = styled(SwiperSlide)`
  padding: ${({ theme }) => theme.spacing(9)};
  width: calc((100% - 302px) / 3) !important;
  border-radius: ${({ theme }) => theme.spacing(4)};
  border: 1px solid ${({ theme }) => theme.colors.borderCards};
  box-shadow: ${({ theme }) => theme.shadows.primary};
  background-color: ${({ theme }) => theme.colors.body};
`;
export const ContentContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(8)};
`;
export const FeedbackData = styled.p`
  text-align: end;
`;
export const UserContantContainer = styled.div`
  display: flex;
`;
export const FeedbackTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;
export const SliderButton = styled.button`
  padding: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ theme }) => theme.colors.buttons};
  border: ${({ theme }) => theme.borders.none};
  border-radius: ${({ theme }) => theme.radii.button};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.active};
  }
`;
export const SliderIconRight = styled(RightArrow)`
  width: ${({ theme }) => theme.spacing(10)};
  height: ${({ theme }) => theme.spacing(10)};
`;
export const SliderIconLeft = styled(LeftArrow)`
  width: ${({ theme }) => theme.spacing(10)};
  height: ${({ theme }) => theme.spacing(10)};
`;
export const FeedbackTitleContainer = styled.div`
  ${flexSpaceBetween}
`;
export const ButtonsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(10)};
`;
export const FeetbackAvatar = styled.img`
  margin-right: ${({ theme }) => theme.spacing(4)};
`;
export const AboutUserContainer = styled.div`
  margin-right: ${({ theme }) => theme.spacing(8)};
`;
