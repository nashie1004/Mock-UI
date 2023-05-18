'use client'
import data from '@/app/MOCK_DATA.json'
import { Dispatch, SetStateAction, createContext, useState } from "react"
import {useEffect} from 'react'

interface ObjectType{
    // modal
    modalIsClosed: boolean, 
    setModalIsClosed: Dispatch<SetStateAction<boolean>>
    currentModalInfo: DataType | null, 
    setCurrentModalInfo: Dispatch<SetStateAction<DataType | null>>,
    
    // cards
    cardsArray: DataType[], 
    setCardsArray: Dispatch<SetStateAction<DataType[]>>,
    checkedCards: number[], 
    setCheckedCards: Dispatch<SetStateAction<number[]>>
}

export interface DataType{
    id: number,
    author: string,
    title: string,
    content: string,
    date: string
}

const contextObject: ObjectType = {
    // modal
    modalIsClosed: false, 
    setModalIsClosed: () => {}, 
    currentModalInfo: null, 
    setCurrentModalInfo: () => {},
    
    // cards
    cardsArray: [], 
    setCardsArray: () => {},
    checkedCards: [], 
    setCheckedCards: () => {}
}

export const Data = createContext(contextObject);

export default function Context({children}) {
    const [modalIsClosed, setModalIsClosed] = useState<boolean>(false);
    const [currentModalInfo, setCurrentModalInfo] = useState<DataType | null>(null)
    const [checkedCards, setCheckedCards] = useState<number[]>([]);
    const [cardsArray, setCardsArray] = useState<DataType[]>([]);

    useEffect(() => {
        setCardsArray(data)
    }, [])

    const object: ObjectType = {
        // modal
        modalIsClosed, 
        setModalIsClosed, 
        currentModalInfo, 
        setCurrentModalInfo,
        
        // cards
        cardsArray, 
        setCardsArray,
        checkedCards, 
        setCheckedCards
    }

    return (
        <Data.Provider value={object}>
            {children}
        </Data.Provider>
    )
}
