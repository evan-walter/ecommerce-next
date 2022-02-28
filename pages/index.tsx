import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const message: string = 'Hello, world!'

  let a: AddEventListenerOptions
  let b: Window

  console.log(b);
  
  return (
    <div>
      {message}
    </div>
  )
}
