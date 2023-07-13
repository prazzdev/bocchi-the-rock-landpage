import Image from "next/image";

export default function NavLogo() {
    return (
        <>
        <div className="w-[25%] flex items-center flex-start">
            <Image src="/src/images/logo.webp" height={150} width={230} />
        </div>
        </>
    )
}
