declare module "swiper/react" {
  export interface SwiperRef {
    slidePrev: () => void;
    slideNext: () => void;
  }
  export interface SwiperProps {
    onSwiper?: (swiper: Swiper) => void;
  }
}
