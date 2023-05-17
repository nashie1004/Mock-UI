'use client'

import { Dispatch, SetStateAction, createContext, useState } from "react"

interface ObjectType{
    modalIsClosed: boolean, 
    setModalIsClosed: Dispatch<SetStateAction<boolean>>
}

export const Data = createContext();

export default function Context({children}) {
    const [modalIsClosed, setModalIsClosed] = useState<boolean>(false);


    const object: ObjectType = {
        modalIsClosed, 
        setModalIsClosed
    }

    return (
        <Data.Provider value={object}>
            {children}
        </Data.Provider>
    )
}
