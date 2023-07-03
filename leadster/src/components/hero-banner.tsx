"use client"

import { styled } from "styled-components"
import '../app/globals.css'

interface HeroBannerProps {

}

const HeroSection = styled.section`
    background-color: var(--color-light-blue);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 600px;

    > div h2 {
        color: var(--color-medium-blue);
        font-weight: 400;
    }

    > div h1 {
        color: var(--color-blue);
    }
`

const WebinarBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    > p {
        border: 2px solid var(--color-blue);
        border-radius: 1rem 1rem 1rem 0;
        color: var(--color-blue);
        font-weight: bold;
        padding: 3px 20px;
        display: inline-block;
    }
`

export function HeroBanner(props : HeroBannerProps){
    return(
        <HeroSection>
        <div>
            <WebinarBox><p>WEBINARS EXCLUSIVOS</p></WebinarBox>
            <h2>Menos Conversinha</h2>
            <div>
                <h1>Mais Conversão</h1>
            </div>
            <p>Conheça as estratégias que mudam o jogo e como aplicá-las no seu negócio</p>
        </div>
        </HeroSection>
    )
}