'use client'
import {AiOutlineClose} from 'react-icons/ai'
import { Data } from '@/context/Context'
import { useContext } from 'react'

export default function Modal() {
    const {modalIsClosed, setModalIsClosed} = useContext(Data);

    function closeModal():void{
        setModalIsClosed(false)
    }

    return (
    <div className={modalIsClosed ? `Modal-bg toggleModal` : `Modal-bg`}>
        <div className='Modal'>
            <h2>
                Lorem, ipsum dolor.
                <div className="closeModal" onClick={closeModal}>
                    <AiOutlineClose />
                </div>
            </h2>
            <h3>Lorem, ipsum dolor.</h3>
            <div className="text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, deserunt culpa? Suscipit laboriosam in, error ad cum neque deserunt rerum culpa atque itaque, vero sunt adipisci deleniti! Debitis, aperiam ea.</p>
            </div>
            <div className="btns">
                <button>Publish</button>
                <button>Delete</button>
            </div>
        </div>
    </div>
  )
}
