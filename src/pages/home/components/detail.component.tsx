import Heading from "@/components/heading";
import Flex from "@/components/flex";
import Button from "@/components/button";
import Text from "@/components/text";
import withWrapper from "@/hoc/withWrapper";

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

ViewDetailSection.displayName = 'ViewDetailSection';

export default withWrapper(ViewDetailSection);