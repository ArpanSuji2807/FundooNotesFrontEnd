import axios from 'axios'

let configObj= {
    headers: {
      Authorization:  `Bearer ${localStorage.getItem('token')}`
    },
  }

export const CreateNote =(Obj) =>{
    console.log(configObj);
    let response = axios.post(' http://localhost:3001/api/v1/userNotes',Obj,configObj)
    return response;
}

export const GetAllNotes = () =>{
  console.log(configObj);
  let response = axios.get('http://localhost:3001/api/v1/userNotes',configObj)
  return response;
}