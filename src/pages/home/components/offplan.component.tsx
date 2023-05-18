import Flex from "@/components/flex";
import Heading from "@/components/heading";
import { OffPlanSectionImageWrapper } from "../index.style";
import Image from "next/image";
import Imgs from "@/constants/imgs";
import withWrapper from "@/hoc/withWrapper";

const { Card4, Card5, Card6, Card7, Card8 } = Imgs;

const OffPlanSection = () => {
    return (
        <Flex $col $align="center" $gap={3}>
            <Heading $color="white">Off-Plan properties</Heading>
            <Flex $gap={2}>
                <OffPlanSectionImageWrapper>
                    <Image width={250} height={500} src={Card4.src} alt="card-image" />
                </OffPlanSectionImageWrapper>
                <OffPlanSectionImageWrapper>
                    <Image width={250} height={500} src={Card5.src} alt="card-image" />
                </OffPlanSectionImageWrapper>
                <OffPlanSectionImageWrapper>
                    <Image width={250} height={500} src={Card6.src} alt="card-image" />
                </OffPlanSectionImageWrapper>
                <OffPlanSectionImageWrapper>
                    <Image width={250} height={500} src={Card7.src} alt="card-image" />
                </OffPlanSectionImageWrapper>
                <OffPlanSectionImageWrapper>
                    <Image width={250} height={500} src={Card8.src} alt="card-image" />
                </OffPlanSectionImageWrapper>
            </Flex>
        </Flex>
    )
}

OffPlanSection.displayName = "OffPlanSection";

export default withWrapper(OffPlanSection);