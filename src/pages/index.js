import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import NewNav from '@/components/newNav/newNav'
import Slideshow from '@/components/slideshow/slideshow'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <NewNav/>
    <Slideshow/>
     
    </>
  )
}
