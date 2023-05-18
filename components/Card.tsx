'use client'
import { FiEye, FiUser, FiCalendar, FiMoreVertical } from "react-icons/fi";
import { Data } from "@/context/Context";
import { useContext } from "react";
import { DataType } from "@/app/page";

export default function Card(props: DataType) {
    const {id, author, title, content, date}: DataType = props;
    const {setModalIsClosed, setCurrentModalInfo} = useContext(Data);

    function showModal(): void{
        setCurrentModalInfo(props)
        setModalIsClosed(true)
    }

  return (
        <div className="Card">
            <div className="options">
                <FiMoreVertical style={{marginTop: '-.5rem'}} />
                <input type="checkbox" />
            </div>
            <div className="info">
                <h3>{title}</h3>
                <p>
                    <FiUser style={{stroke: 'rgb(80, 80, 80)'}} />
                    <span>{author}</span>
                    <FiCalendar style={{stroke: 'rgb(80, 80, 80)'}} />
                    <span>{date}</span>
                </p>
                <p>
                    {
                        content.slice(0, 70)
                    }...
                    <span onClick={showModal} >
                        <FiEye style={{stroke: 'blue'}} />
                        <span className="modal-click">
                            Read Full
                        </span>
                    </span>
                </p>
            </div>
            <div className="boxes">
                <button>#Sports</button>
                <button>#Worldwide</button>
                <button>#Local</button>
            </div>
        </div>
  )
}
