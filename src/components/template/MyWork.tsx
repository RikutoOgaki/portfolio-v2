'use client'

import style from '@/styles/components/template/mywork.module.scss'
import { WorkData } from "@/types/WorkData";
import { StudyData } from "@/types/StudyData";
import Link from 'next/link'

export function MyWork() {
    return (
        <>
            <div className={style.myWorkBox}>
                {WorkData.map((v, idx) =>
                    <div key={idx} className={style.workItem}>
                        <div className={style.imgBox}>
                            <figure>
                                <img src={v.imgLink} alt="Mockup" />
                            </figure>
                        </div>
                        <div className={style.textBox}>
                            <p>{v.workName}</p>
                            <div className={style.skill}>
                                {v.workSkill.map((x, idx2) =>
                                    <p key={idx2}>{x}</p>
                                )}
                            </div>
                            <p>{v.workTime}</p>
                            <p>{v.overview}</p>
                            <Link href={v.workLink} className={style.link}>作品はこちら</Link>
                        </div>
                    </div>
                )}
                {StudyData.map((j, idx3) =>
                    <div key={idx3} className={style.workItem}>
                        <div className={style.imgBox}>
                            <figure>
                                <img src={j.imgLink} alt="Mockup" />
                            </figure>
                        </div>
                        <div className={style.textBox}>
                            <p>{j.workName}</p>
                            <div className={style.skill}>
                                {j.workSkill.map((x, idx2) =>
                                    <p key={idx2}>{x}</p>
                                )}
                            </div>
                            <p>{j.workTime}</p>
                            <p>{j.overview}</p>
                            <Link href={j.workLink} className={style.link}>作品はこちら</Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}