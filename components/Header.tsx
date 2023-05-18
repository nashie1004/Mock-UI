'use client'
import { Data } from "@/context/Context"
import { useContext } from "react"
import { DataType } from "@/context/Context";

export default function Header() {
    const {checkedCards, setCardsArray, setCheckedCards} = useContext(Data);

    function deleteSelectedCards():void{
        setCardsArray((prev: DataType[]) => {
            return prev.filter((item: DataType) => !checkedCards.includes(item.id))
        });
        setCheckedCards([]);
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
