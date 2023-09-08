import styles from "./styles.module.scss"
import Image from "next/image"
import Logo from "../../../public/images/logo.svg"

import { ActiveLink } from "../ActiveLink/index";

export function Header () {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                 <ActiveLink href="/" activeClassName={styles.active} legacyBehavior>
                    <a>
                        <Image src={Logo} alt="logo" />
                    </a>
                </ActiveLink>

                <nav>
                    <ActiveLink href="/" activeClassName={styles.active} legacyBehavior>
                        <a>Home</a>
                    </ActiveLink>

                    <ActiveLink href="/posts" activeClassName={styles.active} legacyBehavior>
                        <a>Conteúdo</a>
                    </ActiveLink>

                    <ActiveLink href="/sobre" activeClassName={styles.active} legacyBehavior>
                        <a>Quem somos?</a>
                    </ActiveLink>
                </nav>

                <a className={styles.readyButton} type="button" href="http://sujeitoprogramador.com">COMEÇAR</a>
            </div>
        </header>
    )
}