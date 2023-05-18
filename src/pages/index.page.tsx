import Button from "@/components/button";
import Flex from "@/components/flex";
import List from "@/components/list";
import Heading from '@/components/heading';
import GlobalStyle from "./global.style";
import { FeatureSectionSlideGrid, ViewDetailSectionWrapper, PopularAreaSectionWrapper, FeatureSectionSlideWrapper, FeatureSectionWrapper, HeaderWrapper, HeroSectionWraper, HeroSlideWrapper, Overlay, OffPlanSectionWrapper } from "./index.style";
import Text from "@/components/text";
import withWrapper from "@/hoc/withWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Item } from "@/components/list";
import Imgs from "@/constants/imgs";
import Image from "next/image";
import debounce from "@/utils/debounce";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const { Bg, Bg2, Card4, Card5, Card6, Card7, Card8 } = Imgs;


const Header = () => {

    return (
        <Flex $flex $align="center" $justify="space-between">
            <Heading $color="white" $level={6}>DELATTIO</Heading>
            <List $row $gap={3}>
                <Item>Home</Item>
                <Item>Buy</Item>
                <Item>Sell</Item>
                <Item>Rent</Item>
                <Item>Properties</Item>
            </List>
            <Flex $gap={1}>
                <Button>
                    <Text $level={7}>Become a Host</Text>
                </Button>
                <Button>
                    <Text $level={7}>Sign in</Text>
                </Button>
            </Flex>
        </Flex>
    )
}

const HeroSection = () => {

    return (
        <Flex $flex $align="center" $justify="space-between">
            <Flex $align="flex-start" $col $maxWidth={40} $gap={3}>
                <Heading $color="white" $level={1}>Dubai dominates as top choice for UHNW primary residents</Heading>
                <Button $bg="white" $color="black">
                    <Text $level={7}>Get Started</Text>
                </Button>
            </Flex>
        </Flex>
    )
}

const FeaturedSection = () => {
    return (
        <Flex $col $gap={3}>
            <Flex $justify="space-between">
                <Heading $color="white">Featured Apartments</Heading>
                <Heading $color="white" $level={7} $maxWidth={30}>Delattio’s International Realty is excited to present the listing for this
                    bespoke 4-bedroom Garden Homes villa on Frond N, Palm Jumeirah.

                    As well as being positioned on one of the exclusive Fronds of Palm Jumeirah,
                    this exceptional Garden Homes villa has been expertly designed and fully
                    customised to create a dream luxury property.</Heading>
            </Flex>
            <FeatureSectionSlideGrid>
                <Flex $col $gap={2}>
                    <FeatureSectionSlideWrapper>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
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
                    </FeatureSectionSlideWrapper>
                    <Flex $col $gap={1}>
                        <Heading $color="white" $level={7}>DOWNTOWN DUBAI PENTHOUSE</Heading>
                        <Flex>
                            <Text $color="white" $level={7}>PENTHOUSE</Text>
                            <Text $color="white" $level={7}>3 BEDS</Text>
                            <Text $color="white" $level={7}>13,000 SQ.FT</Text>
                            <Text $color="white" $level={7}>READY</Text>
                        </Flex>
                        <Heading $color="white" level={7}>AED 144,220,00</Heading>
                    </Flex>
                </Flex>
                <Flex $col $gap={2}>
                    <FeatureSectionSlideWrapper>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
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
                    </FeatureSectionSlideWrapper>
                    <Flex $col $gap={1}>
                        <Heading $color="white" $level={7}>DOWNTOWN DUBAI PENTHOUSE</Heading>
                        <Flex>
                            <Text $color="white" $level={7}>PENTHOUSE</Text>
                            <Text $color="white" $level={7}>3 BEDS</Text>
                            <Text $color="white" $level={7}>13,000 SQ.FT</Text>
                            <Text $color="white" $level={7}>READY</Text>
                        </Flex>
                        <Heading $color="white" level={7}>AED 144,220,00</Heading>
                    </Flex>
                </Flex>
                <Flex $col $gap={2}>
                    <FeatureSectionSlideWrapper>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
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
                    </FeatureSectionSlideWrapper>
                    <Flex $col $gap={1}>
                        <Heading $color="white" $level={7}>DOWNTOWN DUBAI PENTHOUSE</Heading>
                        <Flex>
                            <Text $color="white" $level={7}>PENTHOUSE</Text>
                            <Text $color="white" $level={7}>3 BEDS</Text>
                            <Text $color="white" $level={7}>13,000 SQ.FT</Text>
                            <Text $color="white" $level={7}>READY</Text>
                        </Flex>
                        <Heading $color="white" level={7}>AED 144,220,00</Heading>
                    </Flex>
                </Flex>
            </FeatureSectionSlideGrid>
        </Flex>
    )
}

const PopularAreaSection = () => {
    return (
        <Flex $align="center" $justify="space-between">
            <Flex $col $gap={1} $maxWidth={25}>
                <Heading $color="white">Popluar Areas</Heading>
                <Flex $col $gap={1}>
                    <Heading $level={7} $color="white">
                        As well as being positioned on one of the exclusive Fronds of Palm Jumerah.
                    </Heading>
                    <Heading $level={7} $color="white">
                        It now features the architectural talents of Chakib Richani, att from the Tabari Gallery and a host of unique touches including Flos lighting and furniture from Minotti, Poltrona Frau, Bocci and Giorgetti.
                    </Heading>
                </Flex>
            </Flex>
            <Flex $gap={2} $align="center">
                <Image width={200} height={400} src={Imgs.Card} alt="card-image" className="image" />
                <Image width={250} height={500} src={Imgs.Card2} alt="card-image" className="image" />
                <Image width={200} height={400} src={Imgs.Card3} alt="card-image" className="image" />
            </Flex>
        </Flex>
    )
}

const ViewDetailSection = () => {
    return (
        <Flex $col $align="flex-start" $gap={2}>
            <Flex $col $gap={1}>
                <Heading $color="white" level={6}>Modern Architecture</Heading>
                <Heading $color="white">DOWNTOWN DUBAI VILLA</Heading>
            </Flex>
            <Button $bg="white" $color="black">
                <Text $level={7}>VIEW DETAILS</Text>
            </Button>
        </Flex>
    )
}

const OffPlanSection = () => {
    return (
        <Flex $col $align="center" $gap={3}>
            <Heading $color="white">Off-Plan properties</Heading>
            <Flex $gap={2}>
                <Image width={250} height={500} src={Card4.src} alt="card-image" />
                <Image width={250} height={500} src={Card5.src} alt="card-image" />
                <Image width={250} height={500} src={Card6.src} alt="card-image" />
                <Image width={250} height={500} src={Card7.src} alt="card-image" />
                <Image width={250} height={500} src={Card8.src} alt="card-image" />
            </Flex>
        </Flex>
    )
}

FeaturedSection.displayName = 'FeaturedSection';
HeroSection.displayName = 'HeroSection';
Header.displayName = 'Header';
PopularAreaSection.displayName = 'PopularAreaSection';


export default function Pages() {

    const HeaderWithWrapper = withWrapper(Header);
    const HeroSectionWithWrapper = withWrapper(HeroSection);
    const FeatureWithWrapper = withWrapper(FeaturedSection);
    const PopularAreaSectionWithWrapper = withWrapper(PopularAreaSection);
    const ViewDetailSectionWithWrapper = withWrapper(ViewDetailSection);
    const OffPlanSectionWithWrapper = withWrapper(OffPlanSection);
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
                <HeaderWithWrapper />
            </HeaderWrapper>
            <HeroSlideWrapper id="fullpage_0">
                <HeroSectionWraper>
                    <HeroSectionWithWrapper />
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
            <FeatureSectionWrapper id="fullpage_1">
                <FeatureWithWrapper />
            </FeatureSectionWrapper>
            <PopularAreaSectionWrapper id="fullpage_2">
                <PopularAreaSectionWithWrapper />
            </PopularAreaSectionWrapper>
            <ViewDetailSectionWrapper id="fullpage_3">
                <ViewDetailSectionWithWrapper />
            </ViewDetailSectionWrapper>
            <OffPlanSectionWrapper id="fullpage_4">
                <OffPlanSectionWithWrapper />
            </OffPlanSectionWrapper>
        </main>
    )
}