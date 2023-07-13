import CharacterBox from "../partials/CharacterBox";
import SectionHead from "../partials/SectionHead";

export default function Characters() {
    return (
        <>
        <section id="characters" className="pt-[90px] -mb-1 pb-[50px]">
            <SectionHead id="characters-head" text="Main Characters" />
            <div id="character-list" className="w-full flex justify-around items-center mt-14">
                <CharacterBox 
                    imgSrc={"hitori-gotou1"}
                    charName={"Hitori Gotou"}
                    charHeight={"159"}
                    charSkill={"Lead Guitarist"} />
                <CharacterBox 
                    imgSrc={"ryou-yamada1"}
                    charName={"Ryou Yamada"}
                    charHeight={"160"}
                    charSkill={"Bassist"} />
                <CharacterBox 
                    imgSrc={"nijika-ichiji1"}
                    charName={"Nijika Ijichi"}
                    charHeight={"155"}
                    charSkill={"Drummer"} />
                <CharacterBox 
                    imgSrc={"ikuyo-kita1"}
                    charName={"Ikuyo Kita"}
                    charHeight={"159"}
                    charSkill={"Guitarist and Vocal"} />
            </div>
        </section>
        </>
    )
}
