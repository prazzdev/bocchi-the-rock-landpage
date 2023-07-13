import Image from "next/image";

export default function EpisodeBox({ imgSrc, eps, title, viewCount }) {
    return (
        <>
        <div id="episode-box" className="w-[30%]">
            <Image 
                src={`/src/images/${imgSrc}.webp`} 
                height={90} 
                width={1000}
                className="rounded-xl" />
                <div id="desc" className="flex flex-col poppins-med text-lg py-4 px-2">
                    <h5 id="episode" className="">Episode {eps}</h5>
                    <h5 id="episode" className="w-[100%] flex justify-between">
                        <span>{title}</span>
                        <div className="flex flex-row justify-around items-center">
                            <span className="mr-2">{viewCount}</span>
                            <Image 
                                src="/src/images/svg/eye.svg"
                                height={21} width={21}
                                className="inline-block" />
                        </div>
                    </h5>
                </div>
        </div>
        </>
    )
}