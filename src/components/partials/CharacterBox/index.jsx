import Image from "next/image";

export default function CharacterBox({ imgSrc, charName, charHeight, charSkill }) {
    return (
        <>
        <div id="character-box" className="relative w-[25%] bg-teal-00">
            <div id="char-thumb" className="h-[260px] flex justify-center  bg-blue-00">
                <Image 
                    src={`/src/images/${imgSrc}.webp`}
                    height={380} width={200}
                    className="inline-block bg-red-00" />
            </div>
            <div id="char-desc" className="poppins-reg py-6 px-6 bg-green-">
                <h1 className="poppins-bold text-3xl text-center text-[#f8cc3bef] mb-5">{charName}</h1>
                <span className="flex justify-between mb-2">
                    <span className="">Height:</span>
                    <span className="">{charHeight} cm</span>
                </span>
                <span className="flex justify-between">
                    <span className="">Skill:</span>
                    <span className="">{charSkill}</span>
                </span>
                <button className="mt-3 text-sm underline text-[#f8cc3bef]  ">{"Learn More ➝"}</button>
            </div>
            <div id="char-backdrop"></div>
        </div>
        </>
    )
}