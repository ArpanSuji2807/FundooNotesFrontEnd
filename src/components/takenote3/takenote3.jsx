import React from "react";
import './takenote3.css'
import Pin from '../assets/pin.png'
import Reminder from '../assets/reminder.png'
import Collaborator from '../assets/collaboration.png'
import Background from '../assets/background.png'
import Image from '../assets/image.png'
import Archive from '../assets/archive.png'
import More from '../assets/more.png'

const Takenote3 = (props) =>{
    return(<div>
        <div className="noteBody">
                <div className="firstNotes">
                    <div className="notesTitle">
                    <div className="notesTitle1">{props.note.Title}</div>
                    <img src={Pin} alt="Pin" className="notesPin"/>
                    </div>
                    <div className="notesDescription">
                    <div className="notesDescription1" >{props.note.Description}</div>
                    </div>
                    <div className="notesIcon">
                        <img src={Reminder} alt="reminder" className="notesIcon1"/>
                        <img src={Collaborator} alt="reminder" className="notesIcon1"/>
                        <img src={Background} alt="reminder" className="notesIcon1"/>
                        <img src={Image} alt="reminder" className="notesIcon1"/>                        
                        <img src={Archive} alt="reminder" className="notesIcon1"/>                        
                        <img src={More} alt="reminder" className="notesIcon1"/>                                                
                    </div>
                </div>
        </div>
    </div>)
}
export default Takenote3;