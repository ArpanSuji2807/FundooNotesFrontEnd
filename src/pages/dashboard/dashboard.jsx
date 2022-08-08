import React, { useState } from 'react'
import Header from '../../components/header/header'
import Takenote1 from '../../components/takenote1/takenote1'
import Takenote2 from '../../components/takenote2/takenote2'
import Takenote3 from '../../components/takenote3/takenote3'
import { GetAllNotes } from '../../service/dataservice'
import './dashboard.css'
import SideDrawer from '../../components/drawer/drawer'

function Dashboard() {

  const[switchNote,setSwitchNote] = useState(false)
  const[notesArray,setNotesArray] = useState([])
  const[sideView,setSideView] = useState(false)
  const[notes,setNotes] = useState('Notes')
  const listenToHeader = () =>{
    setSwitchNote(true)
  }

  const GetNotes = () =>{
    GetAllNotes().then((res) =>{
      let filterArray = res.data.data.filter((noteData) =>{
          if(notes == 'Notes'){
            if(noteData.isArchived == false && noteData.isDeleted == false){
              return noteData;
            }
          }
          if(notes == 'Archive'){
            if(noteData.isArchived == true && noteData.isDeleted == false){
              return noteData;
          }
        }
        if(notes == 'Trash'){
          if(noteData.isArchived == false && noteData.isDeleted == true){
            return noteData;
        }
      }
      })
      console.log(filterArray);
      setNotesArray(filterArray)
      console.log(res);
    }).catch((err) =>{
      console.log(err);
    })
  }

  const listenToHeaderMenu =() =>{
    setSideView(!sideView)
  }

  const listenToDrawer = (data) =>{
    console.log(data);
    setNotes(data)
    // GetNotes();
  }


  React.useEffect(() =>{
    GetNotes()
  },[notes])
  return (
    <div>
        <Header listenToHeaderMenu ={listenToHeaderMenu}/>
        <SideDrawer listenToDrawer = {listenToDrawer} sideView = {sideView}/>
        {switchNote?<Takenote2 GetNote = {GetNotes}/>:<Takenote1 listenToHeader={listenToHeader}/>}
        <div className='notes3body'>
        {
          notesArray.map((note) => <Takenote3 GetNote = {GetNotes} note = {note}/>)
        }
        </div>     
    </div>
  )
}

export default Dashboard