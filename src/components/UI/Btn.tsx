import Link from 'next/link';
import style from './UI.module.scss'
import { UrlObject } from 'url';

type BtnProps = {
    href?: string | UrlObject;
    callback?: () => void;
    text?: string;
    className?: string;
}

const Btn: React.FC<BtnProps> = ({ href, text, callback, className = '' }) => {
    if (href) {
        return ( 
        <Link href={href} className={`${className} ${style.btn}`}>
            <p>{text}</p>
        </Link>
     );}

     return (
        <button className={`${className} ${style.btn}`} onClick={callback}>
            <p>{text}</p>
        </button>
     )
}

export default Btn;