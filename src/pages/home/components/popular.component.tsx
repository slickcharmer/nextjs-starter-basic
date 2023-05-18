import Text from "@/components/text";
import Flex from "@/components/flex";
import Heading from "@/components/heading";
import Image from "next/image";
import Imgs from "@/constants/imgs";
import withWrapper from "@/hoc/withWrapper";

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

PopularAreaSection.displayName = 'PopularAreaSection';

export default withWrapper(PopularAreaSection);