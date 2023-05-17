import Flex from "@/components/flex";
import { ContentWrapper } from "@/pages/global.style";
import { ComponentType } from "react";

export default function withWrapper(Component: ComponentType<any>) {
    return (props: any) => (
        <Flex $justify="center">
            <ContentWrapper>
                <Component {...props} />
            </ContentWrapper>
        </Flex>
    )
}