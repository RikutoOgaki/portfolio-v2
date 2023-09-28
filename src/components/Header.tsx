import Link from 'next/link'
import style from '@/styles/components/header.module.scss'

export default function Header() {
    return (
        <>
            <header className={style.head}>
                <ul className={style.link}>
                    <li className={style.Itemlink}><Link href={''}>Top</Link></li>
                    <li className={style.Itemlink}><Link href={''}>About</Link></li>
                    <li className={style.Itemlink}><Link href={''}>Skill</Link></li>
                    <li className={style.Itemlink}><Link href={''}>Archive</Link></li>
                </ul>
            </header>
        </>
    )
}