import StyledButton from "./button.style";
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    [key: string]: any
}

export default function Button({ children, ...rest }: ButtonProps) {
    return (
        <StyledButton {...rest}>
            {
                children
            }
        </StyledButton>
    )
}