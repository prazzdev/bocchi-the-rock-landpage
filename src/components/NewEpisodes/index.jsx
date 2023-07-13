import EpisodeBox from "../partials/EpisodeBox";
import SectionHead from "../partials/SectionHead";

export default function NewEpisodes() {
    return (
        <>
        <section id="episodes" className="pt-[90px] -mt-1 -mb-1 pb-[50px]">
            <SectionHead id="new-episodes-head" text="New Episodes" />
            <div id="episode-list" className="flex flex-row justify-between items-center mt-10">
                <EpisodeBox
                    imgSrc="hero"
                    eps="1"
                    title="Lonely Rolling Bocchi"
                    viewCount="33k" />
                <EpisodeBox
                    imgSrc="hero"
                    eps="2"
                    title="See you Tommorow"
                    viewCount="33k" />
                <EpisodeBox
                    imgSrc="hero"
                    eps="3"
                    title="Be Right There"
                    viewCount="33k" />
            </div>
        </section>
        </>
    )
}
