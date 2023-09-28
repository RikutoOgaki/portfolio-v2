import Link from 'next/link'
import style from '@/styles/components/header.module.scss'

export default function Header() {
    return (
        <>
            <header className={style.head}>
                <ul className={style.list}>
                    <li className={style.itemList}><Link href={''}>Top</Link></li>
                    <li className={style.itemList}><Link href={''}>About</Link></li>
                    <li className={style.itemList}><Link href={''}>Skill</Link></li>
                    <li className={style.itemList}><Link href={''}>Archive</Link></li>
                </ul>
            </header>
        </>
    )
}