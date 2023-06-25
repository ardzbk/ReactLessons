import {useState} from 'react'

function Form({addContacts,contacts}) {
    const initialValues = {fullname:"",phone_number:""}
    const [form,setForm] = useState(initialValues)

    const onChangeInput = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) =>{
        e.preventDefault();

        if (form.fullname === "" || form.phone_number==="") {
            return false
        }

        addContacts([...contacts, form])

        setForm(initialValues)
    }
  return (
    <form onSubmit={onSubmit}>
        <div>
            <input type="text" name='fullname' placeholder='FullName' value={form.fullname} onChange={onChangeInput}/>
        </div>
        <div>
            <input type="text" name='phone_number' placeholder='PhoneNumber' value={form.phone_number}  onChange={onChangeInput}/>
        </div>
        <div>
            <button>Add</button>
        </div>
    </form>
  )
}

export default Form