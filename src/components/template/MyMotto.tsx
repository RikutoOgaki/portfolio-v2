'use client'

import style from '@/styles/components/template/mymotto.module.scss'

export function MyMotto() {
    return (
        <>
            <div className={style.myMottoBox}>
                <div className={style.textBox}>
                    <h3 className={style.text}>まずやってみる。</h3>
                    <p className={style.subText}>
                        新しいことに挑戦するのはとても勇気がいると自分は思っています。
                        それでも恐れず頑張り続けることで、できた、達成したときに
                        自分がまたレベルアップしたと思えるので、
                        まるで自分が主人公のRPGを自分で遊んでいるような楽しい思いになることを大切にしています。
                    </p>
                </div>
            </div>
        </>
    )
}