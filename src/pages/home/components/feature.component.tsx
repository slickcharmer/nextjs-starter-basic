import Flex from "@/components/flex";
import { FeatureSectionSlideGrid } from "../index.style";
import Heading from "@/components/heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { FeatureSectionSlideWrapper } from "../index.style";
import { Overlay } from "../index.style";
import Image from "next/image";
import { Pagination, Navigation, Autoplay } from "swiper";
import Text from "@/components/text";
import Imgs from "@/constants/imgs";
import withWrapper from "@/hoc/withWrapper";

const { Bg, Bg2 } = Imgs;

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

FeaturedSection.displayName = 'FeaturedSection';

export default withWrapper(FeaturedSection);