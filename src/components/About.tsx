import style from '@/styles/components/about.module.scss'

export default function About() {
    return (
        <>
            <div className={style.aboutBox}>
                <div className={style.aboutHead}>
                    <h2>About</h2>
                </div>
                <div className={style.aboutMe}>
                    <p>おおがき りくと</p>
                    <h3>大垣 陸斗</h3>
                    <p>
                        楽しさを求め探究心を常に持っているところが自分の長所です。
                    </p>
                </div>
            </div>
        </>
    )
}