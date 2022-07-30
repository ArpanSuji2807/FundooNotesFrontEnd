import React, { useState } from 'react'
import Header from '../../components/header/header'
import Takenote1 from '../../components/takenote1/takenote1'
import Takenote2 from '../../components/takenote2/takenote2'
import Takenote3 from '../../components/takenote3/takenote3'
import { GetAllNotes } from '../../service/dataservice'
import './dashboard.css'

function Dashboard() {

  const[switchNote,setSwitchNote] = useState(false)
  const[notesArray,setNotesArray] = useState([])

  const listenToHeader = () =>{
    setSwitchNote(true)
  }

  const GetNotes = () =>{
    GetAllNotes().then((res) =>{
      setNotesArray(res.data.data)
      console.log(res);
    }).catch((err) =>{
      console.log(err);
    })
  }


  React.useEffect(() =>{
    GetNotes()
  },[])
  return (
    <div>
        <Header/>
        {switchNote?<Takenote2/>:<Takenote1 listenToHeader={listenToHeader}/>}
        <div className='notes3body'>
        {
          notesArray.map((note) => <Takenote3 note = {note}/>)
        }
        </div>     
    </div>
  )
}

export default Dashboard