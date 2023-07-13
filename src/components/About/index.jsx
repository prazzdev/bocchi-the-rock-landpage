import SectionHead from "../partials/SectionHead";

export default function About() {
    return (
        <>
        <section 
            id="about" 
            className="flex flex-row justify-between pt-[110px] pb-[20px] text-white">
            <div className="w-[60%]">
                <SectionHead id="about-head" text="About Anime" />
                <p className="poppins-med text-lg text-justify pt-8">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In illum facilis nostrum quos ab eos eveniet voluptates fugiat ipsam sed, dignissimos recusandae et, voluptatem ipsa quisquam laudantium molestias, doloremque nam esse enim minima dolore exercitationem hic omnis. Molestiae eligendi fuga, fugit, ipsam quasi ex consequatur dignissimos repellat doloremque odio ipsum.
                </p>
                <p className="poppins-med text-lg text-justify pt-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In illum facilis nostrum quos ab eos eveniet voluptates fugiat ipsam sed, dignissimos recusandae et, voluptatem ipsa quisquam laudantium molestias, doloremque nam esse enim minima dolore exercitationem hic omnis.
                </p>
            </div>
            <div className="relative w-[37%] h-[420px] flex justify-center items-center overflow-hidden ml-14">
                <div id="aboutImg" className="rounded-full overflow-hidden"></div>
                <div id="about-backdrop"></div>
            </div>
        </section>
        </>
    )
}
