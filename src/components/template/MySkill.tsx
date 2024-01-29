'use client'

import style from '@/styles/components/template/myskill.module.scss'

import {
    SiHtml5,
    SiCss3,
    SiSass,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiVite,
    SiNpm,
    SiChakraui,

    SiPhp,
    SiPython,
    SiMysql,
    SiPostgresql,
    SiRuby,

    SiVisualstudiocode,
    SiFigma,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiAdobeindesign,
    SiAdobexd,
    SiNotion,
    SiSlack
} from 'react-icons/si'

export function MySkill() {
    return (
        <>
            <div className={style.mySkillBox}>
                <div className={style.mySkill}>
                    <div className={style.iconWrap}>
                        <p className={style.text}>普段使う技術</p>
                        <div className={style.iconBox}>
                            <SiHtml5 className={style.icon} />
                            <SiCss3 className={style.icon} />
                            <SiSass className={style.icon} />
                            <SiJavascript className={style.icon} />
                            <SiTypescript className={style.icon} />
                            <SiReact className={style.icon} />
                            <SiNextdotjs className={style.icon} />
                            <SiVite className={style.icon} />
                            <SiNpm className={style.icon} />
                            <SiChakraui className={style.icon} />
                        </div>
                    </div>
                    <div className={style.iconWrap}>
                        <p className={style.text}>勉強している技術</p>
                        <div className={style.iconBox}>
                            <SiPhp className={style.icon} />
                            <SiPython className={style.icon} />
                            <SiMysql className={style.icon} />
                            <SiPostgresql className={style.icon} />
                            <SiRuby className={style.icon} />
                        </div>
                    </div>
                    <div className={style.iconWrap}>
                        <p className={style.text}>普段使うアプリケーション</p>
                        <div className={style.iconBox}>
                            <SiVisualstudiocode className={style.icon} />
                            <SiFigma className={style.icon} />
                            <SiAdobeillustrator className={style.icon} />
                            <SiAdobephotoshop className={style.icon} />
                            <SiAdobepremierepro className={style.icon} />
                            <SiAdobeindesign className={style.icon} />
                            <SiAdobexd className={style.icon} />
                            <SiNotion className={style.icon} />
                            <SiSlack className={style.icon} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}