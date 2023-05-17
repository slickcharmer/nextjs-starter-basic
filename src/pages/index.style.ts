import styled from "styled-components";
import Imgs from "@/constants/imgs";

export const HeroSectionWraper = styled.section`
    background-size:cover;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    position:absolute;
    z-index:10;
    width:100%;
`

export const HeaderWrapper = styled.header`
    position:absolute;
    width:100%;
    z-index:10;
`

export const HeroSlideWrapper = styled.div`
    height:100vh;
    position:relative;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    z-index:5;
`

export const Overlay = styled.div`
    background-color:rgba(0,0,0,0.6);
    position:absolute;
    width:100%;
    height:100%;
    z-index:10;
`

export const FeatureSectionWrapper = styled.section`
    padding-top:5rem;
    padding-bottom:5rem;
`

export const FeatureSectionSlideGrid = styled.div`
    display:grid;
    grid-template-columns:repeat(3, minmax(0px, 1fr));
    gap:2rem;
`

export const FeatureSectionSlideWrapper = styled.div`
    height:15rem;
`

export const PopularAreaSectionWrapper = styled.section`
    padding-bottom:5rem;
`

export const ViewDetailSectionWrapper = styled.section`
    height:100vh;
    background-image:url(${Imgs.Bg3.src});
    background-size:cover;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`

export const OffPlanSectionWrapper = styled.section`
    padding-top:5rem;
`