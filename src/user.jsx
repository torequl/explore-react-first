import { useEffect, useState } from 'react'
import './user.css'
import SingleFriend from './single-user';
export default function Friends (){
    
    const [users, setUser] = useState([])

    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data));
    },[])
    

    return (
        <div>
            <h2>Friends: {users.length} </h2>
            <div className='box'>
            {
                users.map(user => <SingleFriend userx={user}></SingleFriend>)
            }
            </div>
        </div>
    )
}