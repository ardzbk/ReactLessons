import {useEffect, useState} from 'react'
import List from "./List"
import Form from "./Form"


function Contacts() {

    const [contacts,setContacts]= useState([
        {
            fullname:"Arda",phone_number:"123123"
        },
        {
            fullname:"Sedat",phone_number:"231312"
        },
        {
            fullname:"Ayten",phone_number:"12321"
        },
        {
            fullname:"Omer",phone_number:"3212"
        }
    ]);

    useEffect(()=>{
        console.log(contacts)
    },[contacts])

  return (
    <div>
        <List contacts={contacts}/>
        <Form addContacts={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts