import React, { useState } from 'react'
import Header from '../../components/header/header'
import Takenote1 from '../../components/takenote1/takenote1'
import Takenote2 from '../../components/takenote2/takenote2'
import Takenote3 from '../../components/takenote3/takenote3'

function Dashboard() {

  const[switchNote,setSwitchNote] = useState(false)

  const listenToHeader = () =>{
    setSwitchNote(true)
  }

  return (
    <div>
        <Header/>
        {switchNote?<Takenote2/>:<Takenote1 listenToHeader={listenToHeader}/>}
        <Takenote3/>
    </div>
  )
}

export default Dashboard