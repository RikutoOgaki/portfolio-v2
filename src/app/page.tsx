'use client'

import style from "./page.module.scss";
import { MainView } from "@/components/template/MainVIew";
import { MyMotto } from "@/components/template/MyMotto";
import { MyProfile } from "@/components/template/MyProfile";
import { MySkill } from "@/components/template/MySkill";
import { Cube } from '@/components/common/Cube'


export default function Home() {

  return (
    <>
      <div className={style.portfolioWrap}>
        {/* <MainView /> */}
        {/* <MyMotto /> */}
        {/* <MyProfile /> */}
        {/* <MySkill /> */}

      </div>
    </>
  )
}
