import style from './Posts.module.scss'

function Posts({ params }: {params: {id: number}}) {
    return ( 
        <div className={style.root}>
            <p>Посты пользователя с ID: {params.id}</p>
        </div>
     );
}

export default Posts;