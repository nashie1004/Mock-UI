'use client'
import { FiEye, FiUser, FiCalendar, FiMoreVertical } from "react-icons/fi";
import { Data } from "@/context/Context";
import { useContext } from "react";

export default function Card() {
    const {setModalIsClosed} = useContext(Data);

    function showModal(): void{
        setModalIsClosed(true)
    }

  return (
        <div className="Card">
            <div className="options">
                <FiMoreVertical style={{marginTop: '-.5rem'}} />
                <input type="checkbox" />
            </div>
            <div className="info">
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
                <p>
                    <FiUser style={{stroke: 'rgb(80, 80, 80)'}} />
                    <span>Lorem, ipsum dolor.</span>
                    <FiCalendar style={{stroke: 'rgb(80, 80, 80)'}} />
                    <span>09/10/20</span>
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, nulla!
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
