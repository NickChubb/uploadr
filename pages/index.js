import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// COMPONENTS
import FileCard from './components/FileCard'

export default function Home() {

  const [ files, setFiles ] = useState(null);

  const getFiles = () => {
    
  }

  useEffect(() => {
    
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Uploadr</title>
        <meta name="description" content="Drag-and-drop File Uploader" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Uploadr
        </h1>

        <div className={styles.grid}>

          {
            // Return card for each file.
            files && files.length > 0 ? 
              files.map((file, key) => {
                <FileCard name={file.name} path={file.path} />
              })
              :
              <p>No files to display, drag and drop anywhere to upload.</p> 
          }

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/NickChubb/uploadr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check me out on 👉 Github
        </a>
      </footer>
    </div>
  )
}
