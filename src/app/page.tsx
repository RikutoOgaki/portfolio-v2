import styles from './page.module.scss'
import { MainView } from '@/components/MainView'
import { AboutMe } from '@/components/AboutMe'

export default function Home() {
  return (
    <>
      <div>
        <MainView />
        <AboutMe />
      </div>
    </>
  )
}
