import Head from "next/head"
import NavBar from "./navbar"
// import style from "../styles/Layout.module.css";


export default function Layout({ children, title}){
    

    return (
        <>
            <Head>
                <title>PACTO {title? `| ${title}` : ""}</title>
                <meta name="description" content="PACTO" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/pacto-logo.png" />
            </Head>

            <NavBar/>

            <div>{children}</div>

        </>
    )
}