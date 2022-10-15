import Head from "next/head";
import Footer from "./Footer";

import Navbar from "./NavBar";

export default function Layout({ children }){
  return(
    <>
     <Head>
        <title>Front-end & UX/UI Designer - Anderson David</title>
        <meta name="description" content="Criação de Landing Pages, Blog, WebSites. UX/UI Designer para aplicações Web, Destktop e Mobile." />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="UX/UI Designer e Front-End Developer - Anderson David" />
        <meta property="og:description" content="Confira agora mesmo as melhores soluções para seu negócio em 2022." />
        <meta property="og:url" content="https://andersondsm.com" />
        <meta property="og:site_name" content="Anderson David" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  )
}