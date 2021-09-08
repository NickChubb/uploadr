import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'

// COMPONENTS
import FileCard from './FileCard'

export default function DisplayFiles() {

  // const [ files, setFiles ] = useState(null);

  const getFiles = () => {
  
  }

  useEffect(() => {
  
  });

  const files = [
    {
      name: 'file1',
      path: 'files/file1.png',
      size: 10000
    },
    {
      name: 'file1',
      path: 'files/file1.png',
      size: 10000
    },
    {
      name: 'file1',
      path: 'files/file1.png',
      size: 10000
    },

  ]

  return (
    <div className={styles.grid}>

      {
        // Return card for each file.
        files && files.length > 0 ? 

          files.map(( file, key ) => (
            <FileCard file={file} key={key} />
          ))
          :
          <p>No files to display, drag and drop anywhere to upload.</p> 
      }

    </div>
  )
}