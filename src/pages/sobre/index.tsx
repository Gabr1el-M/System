import { GetStaticProps } from "next"

import Head from "next/head";
import styles from './styles.module.scss'
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaFacebookF } from 'react-icons/fa';

import { RichText } from 'prismic-dom';
import Prismic from '@prismicio/client';
import { getPrismicClient } from "@/src/services/prismic"


type Content = {
    title: string
    description: string,
    banner: string,
    facebook: string,
    instagram: string,
    youtube: string,
    linkedin: string
}

interface ContentProps {
    content: Content
}

export default function Sobre({ content }: ContentProps) {
    return ( 
    <>
        <Head>
            <title>Quem somos? | "nome da empresa"</title>
        </Head>

        <main className={styles.container}>
            <div className={styles.containerHeader}>
                <section className={styles.ctaText}>
                    <h1>{content.title}</h1>
                    <p>{content.description}</p>
                    
                    <a href={content.youtube}>
                        <FaYoutube size={40} />
                    </a>

                    <a href={content.instagram}>
                        <FaInstagram size={40} />
                    </a>

                    <a href={content.linkedin}>
                        <FaLinkedin size={40} />
                    </a>

                    <a href={content.facebook}>
                        <FaFacebookF size={40} />
                    </a>
                </section>

                <img
                  className={styles.image}
                  src={content.banner}
                  alt="banner"
                />
            </div>
        </main>
    </>
  ) 
}

export const getStaticProps: GetStaticProps = async () => {

    const prismic = getPrismicClient(); //Abrindo conexão

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'about') 
    ])

    const {
        title,
        description,
        banner,
        facebook,
        instagram,
        youtube,
        linkedin

    } = response.results[0].data

    const content = {
        title: RichText.asText(title),
        description: RichText.asText(description),
        banner: banner.url,
        facebook: facebook.url,
        instagram: instagram.url,
        youtube: youtube.url,
        linkedin: linkedin.url
    }

    return {
        props: {
            content
        },
        revalidate: 60 * 15 // a cada 15 min vai ser revalidado.
    }
}