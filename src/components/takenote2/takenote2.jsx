import React, { useState } from "react";
import './takenote2.css'
import { CreateNote } from "../../service/dataservice";
import Pin from '../assets/pin.png'
import Reminder from '../assets/reminder.png'
import Collaborator from '../assets/collaboration.png'
import Background from '../assets/background.png'
import Image from '../assets/image.png'
import Archive from '../assets/archive.png'
import More from '../assets/more.png'
import Undo from '../assets/undo.png'
import Redo from '../assets/redo.png'

const Takenote2 = () =>{

    const[noteObj,setNoteObj] = React.useState({Title:'',Description:''})

    const takeTitle = (event) =>{
        setNoteObj(prevState =>({...prevState,Title:event.target.value}))
    }

    const takeDescription = (event) =>{
        setNoteObj(prevState =>({...prevState,Description:event.target.value}))
    }

    const AddNote = () =>{
        CreateNote(noteObj).then((res) =>{
            console.log(res);
        }).catch((err) =>{
            console.log(err);
        })
    }

    return(<div>
        <div className="takenote2">
            <div className="takenote2a">
                <div className="note2a">
                    <input onChange={takeTitle} className="title" placeholder="Title.."></input>
                    <img src={Pin} alt="Pin" className="Pin"></img>
                </div>
                <div className="note2b">
                <input onChange={takeDescription} className="takenote" placeholder="Take a note..."></input>
                </div>
                <div className="note2c">
                    <div className="noteIcons">
                    <img src={Reminder} alt="icons" className="icons"></img>
                    <img src={Collaborator} alt="icons" className="icons"></img>
                    <img src={Background} alt="icons" className="icons"></img>
                    <img src={Image} alt="icons" className="icons"></img>
                    <img src={Archive} alt="icons" className="icons"></img>
                    <img src={More} alt="icons" className="icons"></img>
                    <img src={Undo} alt="icons" className="icons"></img>
                    <img src={Redo} alt="icons" className="icons"></img>
                    </div>
                    <div className="close">
                        <button onClick={AddNote} className="closebutton">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Takenote2;