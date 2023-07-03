"use client"

import { styled } from "styled-components"
import Image from 'next/image'

interface HeaderProps {

}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 35px 0;
    background-color: white;
`

export function Header(props : HeaderProps){
    return(
        <TagHeader>
            <Image
              src="/logo.png"
              alt="Leadster Logo"
              width={194}
              height={42}
              priority
            />
        </TagHeader>
    )
}