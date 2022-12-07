import React from 'react'
import styles from './styles.module.css'
import Link from "next/link"

const Header = () => {
    return(
        <React.Fragment>
            <div className={styles.menu1}>
                <div Classname='container mx-auto'>
                <Link href='/'>
                    <a><img className= 'mx-auto' src='/Testejs.jpg'alt='Dúvidas sobre música' /></a>
                </Link>
                </div>
            </div>
            <div class={styles.menu2}>
                <Link href='http://localhost:3000'>
                    <a class={styles.formatmenu}>Início</a>
                </Link>
            <Link href='/sobre'>
                <a class={styles.formatmenu}>Sobre</a>
            </Link>
            <Link href='/contato'>
                <a className={styles.formatmenu}>Contato</a>
            </Link>
            <Link href='/pesquisa'>
                <a className={styles.formatmenu}>Pesquisa</a>
            </Link>
            </div>
        </React.Fragment>
)
}

export default Header