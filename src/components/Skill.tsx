import {
    SiReact,
    SiHtml5,
    SiCss3,
    SiSass,
    SiJavascript,
    SiTypescript,
    SiChakraui,

    SiAdobephotoshop,
    SiAdobeillustrator,
    SiAdobepremierepro,

} from 'react-icons/si'
import style from '@/styles/components/skill.module.scss'

export default function Skill() {
    return (
        <>
            <div className={style.wrap}>
                <div className={style.skillHead}>
                    <h2>Skill</h2>
                </div>
                <div className={style.skillBox}>
                    <div>
                        <h3></h3>
                        <div className={style.skillSubBox}>

                        </div>
                    </div>
                    <div>
                        <h3></h3>
                        <div className={style.skillSubBox}>

                        </div>
                    </div>
                    <div>
                        <h3></h3>
                        <div className={style.skillSubBox}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}