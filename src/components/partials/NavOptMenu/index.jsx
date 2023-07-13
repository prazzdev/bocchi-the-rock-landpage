// import React, { useState } from "react"
import Image from "next/image";

export default function NavOptMenu() {
    return (
        <>
        <div className="w-[15%] flex flex-end justify-around items-center px-12 poppins-med">
            <a href="#" className="">
                <Image 
                    src={"/src/images/svg/search.svg"}
                    height={25}
                    width={25} />
            </a>
            <a href="#" className="relative">
                <Image 
                    src={"/src/images/svg/notif.svg"}
                    height={25}
                    width={25} />
                <div id="notif-sign" className="absolute top-0 right-[2px] h-[8px] w-[8px] rounded-full bg-yellow-400"></div>
            </a>
        </div>
        </>
    )
}