import style from './Posts.module.scss'

interface Props {
    params: { id: string };
}

function Posts({ params }: Props) {
    return ( 
        <div className={style.root}>
            <p>Посты пользователя с ID: {params.id}</p>
        </div>
     );
}

export default Posts;