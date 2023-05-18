import GlobalStyle from "../global.style";
import { ViewDetailSectionWrapper, HeaderWrapper, HeroSectionWraper, HeroSlideWrapper, Overlay, FullPageWrapper } from "./index.style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import Imgs from "@/constants/imgs";
import Image from "next/image";
import debounce from "@/utils/debounce";
import FeaturedSection from "./components/feature.component";
import PopularAreaSection from "./components/popular.component";
import ViewDetailSection from "./components/detail.component";
import OffPlanSection from "./components/offplan.component";
import Header from "./components/header";
import HeroSection from "./components/hero.component";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useEffect, useState } from "react";

const { Bg, Bg2 } = Imgs;

export default function HomePage() {
    
    const [currentPage, setCurrentPage] = useState(0);
    const [direction, setDirection] = useState(true);

    
    useEffect(() => {
        window.addEventListener('keydown', changeCurrentPageWithDebounce);
        return () => window.removeEventListener('keydown', changeCurrentPageWithDebounce);
    }, [currentPage])
    
    useEffect(() => {
        animateFullPage();
    }, [currentPage])
    
    const changeCurrentPage = (e: any) => {
        if (e.key === "ArrowDown") {
            if (currentPage < 4) {
                setCurrentPage(previous => previous + 1);
                setDirection(true);
            }
        }
        if (e.key === "ArrowUp") {
            if (currentPage !== 0) {
                setDirection(false);
                setCurrentPage(previous => previous - 1);
            }
        }
    }

    const changeCurrentPageWithDebounce = debounce(changeCurrentPage, 100);
    
    const animateFullPage = () => {
        const obj: any = document.querySelector(`#fullpage_` + (direction ? currentPage : currentPage + 1));
        if (obj !== null && direction) {
            obj.style.top = "0px";
        }
        if (obj !== null && !direction) {
            obj.style.top = "100vh";
        }
    }

    return (
        <main>
            <GlobalStyle />
            <HeaderWrapper>
                <Header />
            </HeaderWrapper>
            <HeroSlideWrapper id="fullpage_0">
                <HeroSectionWraper>
                    <HeroSection/>
                </HeroSectionWraper>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    <SwiperSlide>
                        <Overlay />
                        <Image fill objectFit="cover" src={Bg.src} alt="slide-img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Overlay />
                        <Image fill objectFit="cover" src={Bg2.src} alt="slide-img" />
                    </SwiperSlide>
                </Swiper>
            </HeroSlideWrapper>
            <FullPageWrapper id="fullpage_1">
                <FeaturedSection/>
            </FullPageWrapper>
            <FullPageWrapper id="fullpage_2">
                <PopularAreaSection/>
            </FullPageWrapper>
            <ViewDetailSectionWrapper id="fullpage_3">
                <ViewDetailSection/>
            </ViewDetailSectionWrapper>
            <FullPageWrapper id="fullpage_4">
                <OffPlanSection/>
            </FullPageWrapper>
        </main>
    )
}