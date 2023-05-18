'use client'
import {AiOutlineClose} from 'react-icons/ai'
import { Data } from '@/context/Context'
import { useContext } from 'react'

export default function Modal() {
    const {modalIsClosed, setModalIsClosed, currentModalInfo} = useContext(Data);

    function closeModal():void{
        setModalIsClosed(false)
    }

    return (
    <div className={modalIsClosed ? `Modal-bg toggleModal` : `Modal-bg`}>
        <div className='Modal'>
            {
               currentModalInfo && <>
                    <div className="closeModal" onClick={closeModal}>
                        <AiOutlineClose style={{fontSize: '1rem'}} />
                    </div>
                    <h2>
                        {currentModalInfo.title}
                    </h2>
                    <h3>{currentModalInfo.author} | {currentModalInfo.date}</h3>
                    <div className="text">
                        <p>
                            {currentModalInfo.content}
                        </p>
                    </div>
                    <div className="btns">
                        <button>Publish</button>
                        <button>Delete</button>
                    </div>
               </> 
            }
        </div>
    </div>
    )
}
