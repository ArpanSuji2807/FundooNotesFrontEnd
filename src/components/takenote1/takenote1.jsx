import React from "react";
import './takenote1.css'
import NewNote from '../assets/newlist.png'
import Draw from '../assets/notedraw.png'
import Image from '../assets/image.png'

const Takenote1 = (props) => {

    const switchToNote2 = () =>{
        props.listenToHeader()
    }
    return (<div>
        <div onClick={switchToNote2} className="takenote">
            <div className="takenote1">
                <input placeholder="Take note" className="note1"></input>
                <div className="takenoteIcon">
                    <img src={NewNote} alt="new note" className="newnote"></img>
                    <img src={Draw} alt="new note" className="newnote"></img>
                    <img src={Image} alt="new note" className="newnote"></img>
                </div>
            </div>
        </div>
        </div>)
}

export default Takenote1;