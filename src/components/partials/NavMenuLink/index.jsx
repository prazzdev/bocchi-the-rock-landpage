export default function NavMenuLink({ href, title }) {
    return (
        <>
        <a 
            href={href} 
            className="uppercase text-[19px] text-white drop-shadow-md">{title}</a>
        </>
    )
}