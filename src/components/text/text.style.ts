import styled from "styled-components";

interface StyledTextProps {
    $level?:number
}

const StyledText = styled.p<StyledTextProps>`
    font-family:Roboto;
    font-size:${({$level}) => `var(--font-${$level})`};
`

export default StyledText;