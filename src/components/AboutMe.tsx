'use client'

import style from '@/styles/components/aboutme.module.scss'
import { MyData } from '@/types/deta'

export function AboutMe() {

    return (
        <>
            <div className={style.aboutMeWrap}>
                <div className={style.meBox}>
                    <figure>
                        <img src={MyData.img} alt="自分の写真" />
                    </figure>
                    <div className={style.meTexts}>

                    </div>
                </div>
                <div className={style.detailBox}>

                </div>
            </div>
        </>
    )
}