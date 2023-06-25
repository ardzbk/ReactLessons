import {useEffect,useState} from 'react'
import axios from 'axios'

function Users() {
    const [isLoading,setIsLoading] = useState(true);
    const [users,setUsers] = useState([]);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setUsers(res.data))
        .catch((e)=>console.log(e))
        .finally(()=>setIsLoading(false))

    },[])
  return <div>
    <h1 className='display-5  p-2'>Users</h1>

    {
        isLoading && <div>Loading...</div>
    }
    {
        users.map((user) =>(
        <div className='card   bg-success p-4 m-2 w-50 mx-auto' key={user.id}>
            {user.name}
        </div>
    ))}
  </div>
}

export default Users