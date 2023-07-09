import {useParams,Link} from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'

function User() {
  const [user,setUsers] = useState([])
  const [loading,setLoading]=useState(true);
  const {id} = useParams()

  useEffect(()=> {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>setUsers(res.data))
    .finally(()=>setLoading(false))
  },[id]);

  return (
    <div>
      <h1>User Detail</h1>
      {loading && <div>Loading...</div>}
      <code>{JSON.stringify(user)}</code>
    <br /><br />
      <Link to={`/users/${parseInt(id)+1}`}>Next User({user.id +1})</Link>
    </div>
  )
}

export default User