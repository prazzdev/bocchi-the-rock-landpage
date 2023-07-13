import NavMenuLink from "../NavMenuLink";

export default function NavbarMenu() {
    return (
        <>
        <div className="w-[60%] flex justify-around items-center poppins-med">
            <NavMenuLink href="#" title="Home"/>
            <NavMenuLink href="#about" title="About" />
            <NavMenuLink href="#episodes" title="Episodes" />
            <NavMenuLink href="#characters" title="Characters" />
            <NavMenuLink href="#merch" title="Merch" />
        </div>
        </>
    )
}