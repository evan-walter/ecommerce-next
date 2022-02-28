import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const message: string = 'Hello, world!'

  let a: AddEventListenerOptions
  let b: NodeJS.Process

  console.log(b.browser);
  
  return (
    <div>
      {message}
    </div>
  )
}
