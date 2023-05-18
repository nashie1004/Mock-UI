'use client'
import { Data } from "@/context/Context"
import { useContext } from "react"

export default function Header() {
    const {checkedCards} = useContext(Data);

    function deleteSelectedCards():void{
        console.log(checkedCards)
    }

  return <div className="header">
        <h2>News Articles</h2>
        <div className="header-options">
            <button>Publish</button>
            <button onClick={deleteSelectedCards}>Delete</button>
            <input type="text" placeholder='Search..' />
        </div>
    </div>
}
