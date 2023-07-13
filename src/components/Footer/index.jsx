import NavLogo from "../partials/NavLogo";
import NavbarMenu from "../partials/NavbarMenu";

export default function Footer() {
    return (
        <>
        <footer className="flex justify-between items-center -mt-1 py-[50px]">
            <NavLogo />
            <NavbarMenu />
        </footer>
        </>
    )
}
