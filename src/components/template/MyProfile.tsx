'use client'

import style from '@/styles/components/template/myprofile.module.scss'

export function MyProfile() {
    return (
        <>
            <div className={style.myProfileBox}>
                <div className={style.myPrifile}>
                    <div className={style.myImgBox}>
                        <figure>
                            <img src="/img/myface.jpg" alt="" />
                        </figure>
                    </div>
                    <div className={style.myTextBox}>
                        <span className={style.subName}>おおがき りくと</span>
                        <h3 className={style.name}>大垣 陸斗</h3>
                        <p className={style.schoolText}>
                            ECCコンピュータ専門学校
                            マルチメディア学科<br />
                            Webデザインコース
                        </p>
                        <p className={style.text}>第18回 若年者物作り大会 出場</p>
                    </div>
                </div>
            </div>
        </>
    )
}