import React from 'react'
import styles from './Hero.module.css'
function Hero() {
  return (
    <>
          <div> 
            <img className={styles.img} src="https://picsum.photos/200/300" />
          </div>
          
          <h1 className={styles.h1}> Express Your Brand Through Prestige & Function!</h1>
          <p className={styles.p}>We Specialize In Custom interactive application development. SAAS integration that will set you apart from the competition.
          </p>
        </>
  )
}

export default Hero

