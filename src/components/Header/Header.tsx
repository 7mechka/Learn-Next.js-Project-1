import Link from 'next/link';
import style from './../style.module.scss'

function Header() {
    return ( 
        <div className={style.header}>
            <Link href={'/'}>Главная</Link>
            <nav>
                <Link href={'/users'}>Пользователи</Link>
                <Link href={'/posts/1'}>Посты</Link>
                <Link href={'/'}>Коментарии</Link>
                <Link href={'/'}>Списки задач</Link>
            </nav>
        </div>
     );
}

export default Header;