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

export const UpdateColorNotes = (colorObj,_id) =>{
  console.log(colorObj);
  let response = axios.put(`http://localhost:3001/api/v1/userNotes/${_id}`,colorObj,configObj)
  return response;
}

export const ArchiveNotes = (_id) =>{
  let response = axios.put(`http://localhost:3001/api/v1/userNotes/${_id}/isArchive`,null,configObj)
  return response;
}

export const TrashNotes = (_id) =>{
  let response = axios.put(`http://localhost:3001/api/v1/userNotes/${_id}/isDelete`,null,configObj)
  return response;
}

export const UpdateNotes = (Obj,_id) =>{
  let response = axios.put(`http://localhost:3001/api/v1/userNotes/${_id}`,Obj,configObj)
  return response;
}
