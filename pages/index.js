import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.card} title="Sobre mim">
        <div className={styles.line}>
          <h1>Sobre mim</h1>
        </div>

        <div 
          style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
          }}>

          <div className={styles.descricao}>
            <p>
              Olá, eu tenho  22 anos  e adoro  aprender e sou
              completamente curioso. 
              Costumo estudar diferentes tecnologias 
              sempre que eu posso. 
              Acredito que umas das minhas habilidades 
              profissional é a capacidade de reunir
              amigos e juntar nossos diferentes conhecimentos 
              e nossa criatividade para 
              solucionar algum problema.
            </p>
          </div>

        </div>
      </section>

      {/* ================================== */}

      <section className={styles.card} title="Conhecimentos">
        <div className={styles.line}>
          <h1>Conhecimentos</h1>
        </div>

        <div 
          style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          }}>

          <div className={styles.conhecimentos}>
            <div className={styles.box} title="HTML">
              <Image 
              width="115px" 
              height="115px" 
              alt='imagem html'
              objectFit='cover'  src="/images/html.png" /> 
              <p>HTML</p>
            </div>
            {/* ========================= */}
            <div className={styles.box} title="CSS">
              <Image 
              width="115px" 
              height="115px" 
              alt='imagem css'
              objectFit='cover'  src="/images/css.png" /> 
              <p>CSS</p>
            </div>
            {/* ========================= */}
            <div className={styles.box} title="JAVASCRIPT">
              <Image 
              width="115px" 
              height="115px" 
              alt='imagem javascript'
              objectFit='cover'  src="/images/js.png" /> 
              <p>JAVASCRIPT</p>
            </div>
            {/* ========================= */}
            <div className={styles.box} title="REACT">
              <Image 
              width="115px" 
              height="115px" 
              alt='imagem react.js'
              objectFit='cover'  src="/images/react.png" /> 
              <p>REACT</p>
            </div>
            {/* ========================= */}
            <div className={styles.box} title="Node.js">
              <Image 
              width="115px" 
              height="115px" 
              alt='imagem node.js'
              objectFit='cover'  src="/images/nodejs.png" /> 
              <p>Node.js</p>
            </div>
            {/* ========================= */}
            <div className={styles.box} title="NEXT.js">
              <Image 
              width="115px" 
              height="115px" 
              alt='imagem next.js'
              objectFit='cover'  src="/images/nextjs.png" /> 
              <p>NEXT.js</p>
            </div>
            {/* ========================= */}
            <div className={styles.box} title="STYLED COMPONENTS">
              <Image 
              width="115px" 
              height="115px" 
              alt='imagem styled components'
              objectFit='cover'  src="/images/styled.png" /> 
              <p>STYLED COMP...</p>
            </div>
            {/* ========================= */}
            <div className={styles.box} title="BOOTSTRAP">
              <Image 
              width="115px" 
              height="115px" 
              alt='imagem bootstrap'
              objectFit='cover'  src="/images/bootstrap.png" /> 
              <p>BOOTSTRAP</p>
            </div>
            {/* ========================= */}
            <div className={styles.box} title="GIT">
              <Image 
              width="115px" 
              height="115px" 
              alt='imagem git'
              objectFit='cover'  src="/images/git.png" /> 
              <p>GIT</p>
            </div>
            {/* ========================= */}
            <div className={styles.box} title="GITHUB">
              <Image 
              width="115px" 
              height="115px" 
              alt='imagem github'
              objectFit='cover'  src="/images/github.png" /> 
              <p>GITHUB</p>
            </div>
            {/* ========================= */}

          </div>

        </div>
      </section>

       {/* ================================== */}

      <section className={styles.card} title="Meus projetos">
        <div className={styles.line}>
          <h1>Meus projetos</h1>
        </div>

        <div 
          style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
          }}>

          <div className={styles.descricao}>
            <div className={styles.box} title="GITHUB">
              <Link href="https://github.com/AndersonD4vid">
              <a target="_blank">
                <Image 
                width="115px" 
                height="115px" 
                alt='imagem github'
                objectFit='cover'  src="/images/github.png" /> 
                <p>Veja meus projetos!</p>
              </a>
              </Link>
            </div>
          </div>

        </div>
      </section>

     
    </>
  )
}
