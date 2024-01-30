'use client'

import style from '@/styles/components/template/mainview.module.scss'
import { Cube } from '@/components/common/Cube'
import { Icon } from '@chakra-ui/react'
import { FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6"

export function MainView() {

    const linkArray = [
        {
            id: 1,
            linkIcon: FaXTwitter,
            link: 'https://twitter.com/Rikuto_Ogaki'
        },
        {
            id: 2,
            linkIcon: FaInstagram,
            link: 'https://www.instagram.com/rikut0_0531'
        },
        {
            id: 3,
            linkIcon: FaGithub,
            link: 'https://github.com/RikutoOgaki'
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
                        {
                            linkArray.map((v, idx) =>
                                <div
                                    key={idx}
                                    className={style.iconBox}
                                    onClick={() => location.href = `${v.link}`}
                                >
                                    <Icon as={v.linkIcon} className={style.icon} />
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className={style.cubeBox}>
                    <Cube />
                </div>
            </div>
        </>
    )
}