import style from "./page.module.scss";

import { Cube } from '@/components/common/Cube'


export default function Home() {

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
      <div className={style.portfolioWrap}>
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
      </div>
    </>
  )
}
