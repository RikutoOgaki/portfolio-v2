'use client'

import style from '@/styles/components/template/mainview.module.scss'
import { Cube } from '@/components/common/Cube'

export function MainView() {

    const linkArray = [
        {
            id: 1,
            linkIcon: '',
            link: ''
        },
        {
            id: 2,
            linkIcon: '',
            link: ''
        },
        {
            id: 3,
            linkIcon: '',
            link: ''
        }
    ]

    return (
        <>
            <div className={style.firstViewBox}>
                <div className={style.textBox}>
                    <p>Hi</p>
                    <h2>Rikuto Ogaki</h2>
                    <p>Full Stack Engineer</p>
                    <div className={style.linkBox}>
                        {/* {
                linkArray.map((v, idx) =>
                <div
                    onClick={() => location.href = `${v.link}`}
                >
                    {v.linkIcon}
                </div>
                )
              } */}
                    </div>
                </div>
                <div className={style.cubeBox}>
                    <Cube />
                </div>
            </div>
        </>
    )
}