import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>aleivc.com</h1>
      <h2>that's my website, huha!</h2>
      <h2>some change again</h2>
      <h2>one more time</h2>
      <h2>one more time</h2>
    </div>
  )
}


class Developer {
  constructor(aleivc) {

  }

  isInFrontOfComputer() {
    return false;
  }

  openChromeBrowser() {

  }

  copyCodeFromStackOverflow() {

  }

  pasteCodeInIDE() {

  }

  feelLikeAProfessionalDeveloper() {

  }
}

function defee() {

}

          const dev = new Developer('Aleivc');
          while (dev.isInFrontOfComputer()){
            dev.openChromeBrowser();
            dev.copyCodeFromStackOverflow();
            dev.pasteCodeInIDE();
            dev.feelLikeAProfessionalDeveloper();
          }
