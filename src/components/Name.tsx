import { SiGithub, SiInstagram, SiTwitter } from 'react-icons/si'
import Link from 'next/link'
import Icon from '@chakra-ui/react'
import Wave from 'react-wavify'
import style from '@/styles/components/name.module.scss'

export default function Name() {

    const IconLinkArray = [
        { icon: SiGithub, link: 'https://github.com/RikutoOgaki' },
        { icon: SiInstagram, link: 'https://www.instagram.com/rikut0_0531/' },
        { icon: SiTwitter, link: 'https://twitter.com/Rikuto_Ogaki' }
    ]

    return (
        <>
            <div className={style.box}>
                <div className={style.nameBox}>
                    <p>Hello</p>
                    <h1>Rikuto Ogaki</h1>
                    <p>Front End Enginner</p>
                    <div>
                        {IconLinkArray.map((idx, v) => (
                            <div>

                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.waveBox}>
                    <Wave fill='#6C00DE'
                        className={style.wave}
                        paused={false}
                        style={{ display: 'flex' }}
                        options={{
                            height: 10,
                            amplitude: 10,
                            speed: .75,
                            points: 3
                        }}
                    />
                    <Wave fill='#A04AFA'
                        className={style.wave}
                        paused={false}
                        style={{ display: 'flex' }}
                        options={{
                            height: 25,
                            amplitude: 25,
                            speed: .5,
                            points: 3
                        }}
                    />
                    <Wave fill='#9539f7'
                        className={style.wave}
                        paused={false}
                        style={{ display: 'flex' }}
                        options={{
                            height: 50,
                            amplitude: 50,
                            speed: .25,
                            points: 3
                        }}
                    />
                </div>
            </div>
        </>
    )
}