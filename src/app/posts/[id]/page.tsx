import style from './Posts.module.scss'

interface Props {
    id: string ;
}

async function Posts({ params }: { params: Promise<Props> }) {
    const { id } = await params;

    return ( 
        <div className={style.root}>
            <p>Посты пользователя с ID: {id}</p>
        </div>
     );
}

export default Posts;