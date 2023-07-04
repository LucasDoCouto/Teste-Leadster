"use client"
import { FilterCat } from "@/category/filter-cat"
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
    page: 0,
    category: FilterCat.Marketing_Digital,
    setPage: (value: number) => {},
    setCategory: (value: FilterCat) => {}
})

interface ProviderProps {
    children: ReactNode
}

export function FilterCatProvider({children}: ProviderProps){
    const[page, setPage] = useState(0)
    const[category, setCategory] = useState (FilterCat.Marketing_Digital)

    return(
        <FilterContext.Provider value={{page, category, setPage, setCategory}}>
            {children}
        </FilterContext.Provider>
    )

}

