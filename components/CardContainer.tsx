'use client'
import Card from './Card';
import { Data } from '@/context/Context';
import { useContext } from 'react'
import { DataType } from '@/context/Context';

export default function CardContainer() {
    const {cardsArray} = useContext(Data)

  return <div className="card-container">
    {
        cardsArray.map((item: DataType, i: number) => {
            if (!cardsArray.includes(item.id)){
                return <Card
                    key={item.id}
                    {...item}
                />;
            }
        })
    }
    </div>
}
