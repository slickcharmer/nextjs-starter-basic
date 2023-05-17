import Button from "@/components/button";
import Flex from "@/components/flex";
import List from "@/components/list";
import Heading from '@/components/heading';
import GlobalStyle from "./global.style";
import { HeaderWrapper, HeroSectionWraper, HeroSlideWrapper } from "./index.style";
import Text from "@/components/text";
import Input from "@/components/input";
import withWrapper from "@/hoc/withWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Item } from "@/components/list";
import Imgs from "@/constants/imgs";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
            <Button>
                <Text $level={7}>Sign in</Text>
            </Button>
        </Flex>
    )
}

const HeroSection = () => {

    return (
        <Flex $flex $align="center" $justify="space-between">
            <Flex $align="flex-start" $col $maxWidth={40} $gap={3}>
                <Heading $color="white" $level={1}>Dubai dominates as top choice for UHNW primary residents</Heading>
                <Button $bg="white" $color="black">
                    <Text $level={7}>Learn More</Text>
                </Button>
            </Flex>
            <Flex $col $bg="white" $gap={2} $radius={1} $padding='1rem' $maxWidth={25} $flex>
                <Flex $col $gap={1}>
                    <Flex $col $gap={0.5}>
                        <Heading $level={7}>Property</Heading>
                        <Input placeholder="Seaside Hills" />
                    </Flex>
                    <Flex $col $gap={0.5}>
                        <Heading $level={7}>Location</Heading>
                        <Input placeholder="Boulevard, MTC+X0" />
                    </Flex>
                    <Flex $col $gap={0.5}>
                        <Heading $level={7}>Price Range</Heading>
                        <Input placeholder="132,220" />
                    </Flex>
                </Flex>
                <Button>
                    <Text $level={7}>Find your property</Text>
                </Button>
            </Flex>
        </Flex>
    )
}

const FeaturedSection = () => {
    return (
        <Flex $justify="space-between">
            <Heading $color="white">Featured Apartments</Heading>
            <Heading $color="white" $level={7} $maxWidth={30}>Delattio’s International Realty is excited to present the listing for this
                bespoke 4-bedroom Garden Homes villa on Frond N, Palm Jumeirah.

                As well as being positioned on one of the exclusive Fronds of Palm Jumeirah,
                this exceptional Garden Homes villa has been expertly designed and fully
                customised to create a dream luxury property.</Heading>
        </Flex>
    )
}

FeaturedSection.displayName = 'FeaturedSection';
HeroSection.displayName = 'HeroSection';
Header.displayName = 'Header';

export default function Pages() {

    const HeaderWithWrapper = withWrapper(Header);
    const HeroSectionWithWrapper = withWrapper(HeroSection);
    const FeatureWithWrapper = withWrapper(FeaturedSection);

    const { Bg, Bg2 } = Imgs;

    return (
        <main>
            <GlobalStyle />
            <HeaderWrapper>
                <HeaderWithWrapper />
            </HeaderWrapper>
            <HeroSlideWrapper>
                <HeroSectionWraper>
                    <HeroSectionWithWrapper />
                </HeroSectionWraper>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Image fill objectFit="cover" src={Bg.src} alt="slide-img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image fill objectFit="cover" src={Bg2.src} alt="slide-img" />
                    </SwiperSlide>
                </Swiper>
            </HeroSlideWrapper>
            <section>
                <FeatureWithWrapper />
            </section>
        </main>
    )
}