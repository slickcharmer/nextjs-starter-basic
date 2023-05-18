import Flex from "@/components/flex"
import Heading from "@/components/heading"
import Button from "@/components/button"
import Text from "@/components/text"
import withWrapper from "@/hoc/withWrapper"

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

HeroSection.displayName = 'HeroSection';

export default withWrapper(HeroSection);