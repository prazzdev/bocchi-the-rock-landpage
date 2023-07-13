import NavbarMenu from "../partials/NavbarMenu";
import NavOptMenu from "../partials/NavOptMenu";
import NavLogo from "../partials/NavLogo";

export default function Navbar() {
    return (
        <>
        <nav className="fixed top-0 left-0 right-0 z-10 flex justify-between py-6 px-10">
            <NavLogo />
            <NavbarMenu />
            <NavOptMenu />
        </nav>
        </>
    )
}
