import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

// COMPONENTS
import DisplayFiles from './components/DisplayFiles'

export default function Home() {

  const onDrop = useCallback(acceptedFiles => {

    // Upload files to server
    acceptedFiles.forEach(file => {

      var formData = new FormData();
      formData.append('file', file);

      fetch('/api/files', {
        method: 'POST',
        body: formData,
      });

    })

  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className={styles.container} {...getRootProps()}>

      <input {...getInputProps()} />

      <Head>
        <title>Uploadr</title>
        <meta name="description" content="Drag-and-drop File Uploader" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Uploadr
        </h1>

        <DisplayFiles />
        
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
