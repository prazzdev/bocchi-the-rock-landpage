import Image from "next/image";
import StatsPart from "../partials/StatsPart";
import SectionHead from "../partials/SectionHead";
import Button from "../partials/Button";

export default function Hero({children}) {
    return (
        <>
        <section id="hero" className="relative flex flex-col">
        {children}
        <div className="flex flex-col justify-around z-[9] min-h-[600px] mt-[150px] mx-[50px]">
            <div id="hero-caption" className="w-[50%] text-white drop-shadow-md">
                <h5 id="japan-text" className="jp-font font-bold text-xl">ぼっち・ざ・ろっく！</h5>
                <SectionHead id="romaji-text" text="Anime - Bocchi The Rock!" />
                <p className="poppins-med text-lg text-justify py-4 pb-5">
                    Yearning to make friends and perform live with a band, lonely and socially anxious Hitori "Bocchi" Gotou devotes her time to playing the guitar.
                </p>
                <Button id={"watch"} text={"Watch Now"} Xpad={"px-[30px]"} />
            </div>
            <div className="flex flex-row">
                <div id="stats" className="w-[50%] flex justify-around text-white">
                    <StatsPart id="ratings" title="Ratings">
                        <Image src="/src/images/svg/star.svg" height={23} width={23} className="mr-2" />
                        <Image src="/src/images/svg/star.svg" height={23} width={23} className="mr-2" />
                        <Image src="/src/images/svg/star.svg" height={23} width={23} className="mr-2" />
                        <Image src="/src/images/svg/star.svg" height={23} width={23} className="mr-2" />
                        <Image src="/src/images/svg/star.svg" height={23} width={23} className="mr-2" />
                    </StatsPart>
                    <StatsPart id="genre" title="Genre">
                        <span className="poppins-reg text-[16px]">Comedy, Music</span>
                    </StatsPart>
                    <StatsPart id="studio" title="Studio">
                        <span className="poppins-reg text-[16px]">Aniplex, Houbunsha</span>
                    </StatsPart>
                </div>
                {/* <div id="slider" className="w-[50%] bg-red-200">
                    SLIDER
                </div> */}
            </div>
        </div>
        <div id="hero-backdrop"></div>
        </section>
        </>
    )
}
