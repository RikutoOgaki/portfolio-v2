'use client'

import style from "./page.module.scss";
import { MainView } from "@/components/template/MainVIew";
import { MyMotto } from "@/components/template/MyMotto";
import { MyProfile } from "@/components/template/MyProfile";
import { MySkill } from "@/components/template/MySkill";
import { MyWork } from "@/components/template/MyWork";


import { FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6"
import { Icon } from '@chakra-ui/react'


export default function Home() {

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
      <div className={style.portfolioWrap}>
        <MainView />
        <MyMotto />
        <MyProfile />
        <MySkill />
        <MyWork />
        <div className={style.foot}>
          <div className={style.adressBox}>
            <p>Gmail</p>
            <p>orikutobasuke@gmail.com</p>
          </div>
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
      </div>
    </>
  )
}
