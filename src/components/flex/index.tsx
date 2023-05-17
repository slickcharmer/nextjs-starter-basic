import StyledFlex from './flex.style';
import { ReactNode } from 'react';

interface FlexProps {
    children: ReactNode;
    [key: string]: any;
}

export default function Flex({ children, ...rest }: FlexProps) {
    return (
        <StyledFlex {...rest}>
            {
                children
            }
        </StyledFlex>
    )
}