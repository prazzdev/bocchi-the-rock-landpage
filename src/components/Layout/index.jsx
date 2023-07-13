import Head from "next/head";
import About from "../About";
import Characters from "../Characters";
import Footer from "../Footer";
import Hero from "../Hero";
import Merch from "../Merch";
import Navbar from "../Navbar";
import NewEpisodes from "../NewEpisodes";
import NotifSubs from "../NotifSubs";

export default function Layout() {
    return (
        <>
        <Head>
            <title>ぼっち・ざ・ろっく！</title>
        </Head>
        <Hero>
        <Navbar />
        </Hero>
        <About />
        <NewEpisodes />
        <Characters />
        <Merch />
        <NotifSubs />
        <Footer />
        </>
    )
}