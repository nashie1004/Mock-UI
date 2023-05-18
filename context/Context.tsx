'use client'

import { DataType } from "@/app/page";
import { Dispatch, SetStateAction, createContext, useState } from "react"

interface ObjectType{
    modalIsClosed: boolean, 
    setModalIsClosed: Dispatch<SetStateAction<boolean>>
    currentModalInfo: DataType | null, 
    setCurrentModalInfo: Dispatch<SetStateAction<DataType | null>>,
    checkedCards: number[], 
    setCheckedCards: Dispatch<SetStateAction<number[]>>
}

export const Data = createContext<ObjectType | null>(null);

export default function Context({children}) {
    const [modalIsClosed, setModalIsClosed] = useState<boolean>(false);
    const [currentModalInfo, setCurrentModalInfo] = useState<DataType | null>(null)
    const [checkedCards, setCheckedCards] = useState<number[]>([]);

    const object: ObjectType = {
        modalIsClosed, 
        setModalIsClosed, 
        currentModalInfo, 
        setCurrentModalInfo, 
        checkedCards, 
        setCheckedCards
    }

    return (
        <Data.Provider value={object}>
            {children}
        </Data.Provider>
    )
}
