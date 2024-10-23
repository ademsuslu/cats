"use client"
import { FC, ReactNode } from "react"
import Navbar from "../navbar"


interface ProvidersProps {
    children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {

    return (
        <div className="px-8">
            <Navbar/>
            {children}
        </div>
    )
}