import style from './Posts.module.scss'

interface Props {
    params: { id: string };
}

async function Posts({ params }: Props) {
    return ( 
        <div className={style.root}>
            <p>Посты пользователя с ID: {(await params).id}</p>
        </div>
     );
}

export default Posts;