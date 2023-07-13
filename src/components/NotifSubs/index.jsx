import Image from "next/image";
import Button from "../partials/Button";
import SectionHead from "../partials/SectionHead";

export default function NotifSubs() {
    return (
        <>
        <section id="notif-subs" className="pb-[120px]">
            <div className="min-h-[300px] flex items-center poppins-reg">
                <div className="w-[55%] text-gray-100 text-justify bg-teal-">
                <SectionHead id="notif-subs-head" text="Welcome to the Kessoku Band" />
                    <p className="w-[90%] font-bold text-xl my-4 mb-[70px]">
                        Enter your Email Address to receive notification about new episode and new merch!
                    </p>
                    <form className="">
                        <input 
                            type="email" 
                            name="email"
                            placeholder="abcd123@gmail.com" 
                            className="py-3 px-6 rounded-lg bg-gray-200 text-slate-800 text-xl mr-6" />
                        <Button id={"merch-buy"} text={"Subscribe"} Xpad={"px-[50px]"} />
                    </form>
                </div>
                <div className="relative w-[45%] flex justify-center bg-red-">
                    <figure className="h-full w-full bg-green- text-center">
                        <Image 
                            src={"/src/images/hero.webp"}
                            height={350}
                            width={520}
                            className="rounded-[35px] inline-block" />
                    </figure>
                    <div id="subs-backdrop"></div>
                </div>
            </div>
        </section>
        </>
    )
}
