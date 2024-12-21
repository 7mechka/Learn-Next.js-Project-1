import style from './User.module.scss'
import { User } from '@/app/interface/interface';


async function getUser(id: string): Promise<User | null> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        next: { revalidate: 10 }, // Указание времени для ISR (опционально)
    });

    if (!res.ok) return null;

    return res.json();
}

interface Props {
    params: { id: string };
}

async function UserPage({ params }: Props) {

    const user = await getUser((await params).id);

    return ( 
        <div className={style.root}>
            <h2>User info:</h2>
            {user && 
            <div className={style.userInfo}>
                <p>ID: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
            </div>
            }
        </div>
     );
}

export default UserPage;