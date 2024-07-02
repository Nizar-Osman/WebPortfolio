import React from 'react'
import styles from './Hero.module.css'
function Hero() {
  return (
    <>
          <section>

          <div className={styles.hero}> 
            <img className={styles.img} src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          
          <h1 className={styles.h1}> Express Your Brand Through Prestige & Function!</h1>
          <p className={styles.p}>We Specialize In Custom interactive application development. SAAS integration that will set you apart from the competition.
          </p>
        </div>
          
          </section>
        </>
  )
}

export default Hero

