'use client'
import { FaBars, FaAngry, FaCalendarAlt, FaEye } from "react-icons/fa";

export default function Card() {

    function showModal(): void{
        alert(1)
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
                        Read full
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
