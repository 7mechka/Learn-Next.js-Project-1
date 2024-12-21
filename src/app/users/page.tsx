'use client'
import { useLayoutEffect, useState } from 'react'
import style from './Users.module.scss'
import { User } from '../interface/interface'
import Btn from '@/components/UI/Btn'

function Users() {
    const [userList, setUserList] = useState<User[]>([])

    useLayoutEffect(() => {
        const fetchData = async () => {
            await fetch('https://learn-next-js-project-1-xxye.vercel.app/api/users')
                .then((res) => res.json())
                .then((data) => setUserList(data));
            }

        fetchData()
    }, [])

    return ( 
    <div className={style.root}>
        <h2>
            Its users page
        </h2>
        <div className={style.userBlock}>
            <p>Users:</p>
            <ul className={style.userList}>
                {userList && userList.map((item, index) => (
                    <li key={index}>
                        <p>ID: {item.id}</p>
                        <p>Name: {item.name}</p>
                        <p>Username: {item.username}</p>
                        <p>Email: {item.email}</p>
                        <Btn text='Go to page' href={`/users/${item.id}`}/>
                    </li>
                ))}
            </ul>
        </div>
    </div> 
    );
}

export default Users;