import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Navbar.module.css';

export default function Navbar(){
  return(
    <>
    <header>
      <nav className={styles.navBar} >
        {/* backgroud */}
        <svg className={styles.backgroundSvg} viewBox="0 0 500 80" preserveAspectRatio="none">
          <path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z" fill="#0C4D89" />
        </svg>
        <div className={styles.background}>
          
          <div className={styles.imageContainer}>
          
          <Image 
            loading="lazy"
            width="200px" 
            height="200px" 
            objectFit='cover'
            title='Foto de perfil'
            alt='imagem foto de perfil'
            style={{
            borderRadius: 200,
            position: 'absolute',
            boxShadow: "1px 3px 3px #333",
            }}  src="/images/perfil.png" /> 

            <h1 title='Anderson David'>Anderson David</h1>
            <p title='Front-End Developer & UX/UI Designer'>Front-End Developer & UX/UI Designer</p>
          </div>
          
        </div>
      </nav>
    </header>

    <div className={styles.acessoRapido}>
              <Link href="https://www.linkedin.com/in/andersond4vid/">
                <a target="_blank">
                  <Image 
                  loading="lazy"
                  width="135px" 
                  height="35px" 
                  objectFit='cover'
                  alt='imagem LinkedIn'
                  title='>>>>>> Meu LinkedIn'
                  style={{
                  borderRadius: 4,
                  boxShadow: "2px 3px 3px #333",
                  }}  src="https://blog.waalaxy.com/wp-content/uploads/2021/01/Linkedin-Logo-2048x1280.png" /> 
                </a>
              </Link>

              <Link href="mailto:contato@andersondsm.com?">
                <a>
                  <Image 
                  loading="lazy"
                  width="135px" 
                  height="35px" 
                  objectFit='cover'
                  alt='imagem Gmail'
                  title='>>>>>> Meu e-mail para contato'
                  style={{
                  borderRadius: 4,
                  boxShadow: "2px 3px 3px #333",
                  }}  src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" /> 
                </a>
              </Link>

              <Link href="https://api.whatsapp.com/send?phone=5511950312539&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20%3A">
                <a target="_blank">
                  <Image 
                  loading="lazy"
                  width="135px" 
                  height="35px" 
                  objectFit='cover'
                  alt='imagem whatsapp'
                  title='>>>>>> Qualquer que seja sua dúvida, clique aqui! Veja também o meu catálogo no WhatsApp '
                  style={{
                  borderRadius: 4,
                  boxShadow: "2px 3px 3px #333",
                  }}  src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" /> 
                </a>
              </Link>

              <Link href="https://github.com/AndersonD4vid">
                <a target="_blank">
                  <Image 
                  loading="lazy"
                  width="135px" 
                  height="35px" 
                  objectFit='cover'
                  alt='imagem github'
                  title='>>>>>> Meus projetos desenvolvidos em cursos e alguns feitos por mim.'
                  style={{
                  borderRadius: 4,
                  boxShadow: "2px 3px 3px #333",
                  }}  src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /> 
                </a>
              </Link>

              <Link href="https://www.figma.com/@andersondavid">
                <a target="_blank">
                  <Image 
                  loading="lazy"
                  width="135px" 
                  height="35px" 
                  objectFit='cover'
                  alt='imagem figma'
                  title='>>>>>> Meus trabalhos como Designer. Veja agora no Figma!'
                  style={{
                  borderRadius: 4,
                  boxShadow: "2px 3px 3px #333",
                  }}  src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" /> 
                </a>
              </Link>
            </div>

    </>
  )
}