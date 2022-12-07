import React from 'react'
import styles from './styles.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>       
            <div className={styles.footerletter}>
                Projeto desenvolvido por: Myke Martins / {' '}
                <a className={styles.assinatura} href='https://www.instagram.com/myke_schnaider/'>Instagram</a> /{' '}         
                <div>
                <img className={styles.space} src='Logoimef.png'/>
                </div>
            </div>
        </div>
)
}

export default Footer