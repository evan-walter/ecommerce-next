import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import play from '../playground'
import styles from '../styles/Home.module.css'

export default function Home() {

  useEffect(() => {
    play()
  }, [])

  return (
    <div>
      Hello, world!
    </div>
  )
}
