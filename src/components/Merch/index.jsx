import Image from "next/image";
import SectionHead from "../partials/SectionHead";
import Button from "../partials/Button";

export default function Merch() {
    return (
        <>
        <section id="merch" className="pt-[90px] -mb-1 pb-[60px]">
            <div className="min-h-[500px] flex poppins-reg mt-2">
                <div className="w-[55%] text-gray-100 text-justify">
                <SectionHead id="merch" text="Bocchi the Rock's Merch" />
                    <p className="text-lg my-6">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem vitae nisi accusamus magnam distinctio asperiores voluptas est unde corrupti commodi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem vitae nisi accusamus magnam distinctio asperiores voluptas est unde corrupti commodi.
                    </p>
                    <p className="text-lg mb-6">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ipsam iusto repellat possimus doloremque, quo perferendis incidunt error earum molestias deserunt aliquam, molestiae expedita velit minima similique dolores praesentium consectetur provident dignissimos! Dolor doloribus inventore quisquam perferendis, doloremque ut explicabo?
                    </p>
                    <Button id={"merch-buy"} text={"Buy Now"} Xpad={"px-[30px]"} />
                </div>
                <div className="relative w-[45%] flex justify-center">
                    <div className="relative w-full flex justify-center items-center">
                        <div id="round-wrapper" className="absolute top-0 left-[50px] flex justify-center items-center text-center bg-[#ebbf2e] h-[170px] w-[170px] rounded-full border-4 border-black p-4">
                            <p className="inline-block text-[10px] text-black">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat cumque eaque facere debitis perferendis ratione ea officia libero totam itaque.
                            </p>
                        </div>
                        <figure className="h-full my-auto -mr-[130px]">
                            <Image 
                                src={"/src/images/bocchi-the-rock-merch.webp"}
                                height={290}
                                width={350} />
                        </figure>
                    </div>
                    <div id="merch-backdrop"></div>
                </div>
            </div>
        </section>
        </>
    )
}
