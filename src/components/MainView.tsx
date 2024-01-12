'use client'

import style from '@/styles/components/mainview.module.scss'

export function MainView() {
    return (
        <>
            <div className={style.mainViewWrap}>
                <div className={style.myBox}>
                    <p>Hi👋</p>
                    <h1 className={style.name}>Rikuto Ogaki</h1>
                    <p>Front end Developer</p>
                </div>
            </div>
        </>
    )
}