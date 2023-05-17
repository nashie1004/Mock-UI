'use client'
import { FaBars, FaAngry, FaCalendarAlt, FaEye } from "react-icons/fa";
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
            <FaBars />
            <input type="checkbox" />
        </div>
        <div className="info">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
            <h3>
                <FaAngry />
                <span>Lorem, ipsum dolor.</span>
                <FaCalendarAlt />
                <span>09/10/20</span>
            </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, nulla!
                <span>
                    <FaEye />
                    <span onClick={showModal} className="modal-click">
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
