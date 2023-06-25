import { useEffect ,useState } from 'react'

function Users() {

    const [users,setUsers] = useState([]);
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) =>  res.json())
        .then(data => setUsers(data))
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false))
    },[])

  return <div>
    <h1 className='display-6 p-3'>Users</h1>
    {
        isLoading && <div>Loading...</div>
    }
    {
        users.map((user) => (
        <div className='card p-4 m-2 w-50 mx-auto' key={user.id}>{user.name}</div>
    ))}
  </div>
}

export default Users;