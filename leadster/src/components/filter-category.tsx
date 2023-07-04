"use client"

import { styled } from "styled-components"

interface FilterItemProps{
    selected: boolean
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const FilterItem = styled.li<FilterItemProps>`
    text-align: center;
    list-style: none;
    cursor: pointer;

    background-color: ${props => props.selected ? 'var(--color-blue)' : ''}
`



export function FilterCategory (){
    return(
        <FilterList>
            <FilterItem selected>Agencias</FilterItem>
            <FilterItem selected={false}>Chatbot</FilterItem>
            <FilterItem selected={false}>Marketing Digital</FilterItem>
            <FilterItem selected={false}>Geracao de leads</FilterItem>
            <FilterItem selected={false}>Midia Paga</FilterItem>
        </FilterList>
    )
}