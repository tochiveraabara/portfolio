import Link from "next/link";
import logo from "../../../public/logo.png"
import "./navbar.css"


const Navbar = () => {


    return (
            <header className="header">
            <nav className="navbar">
                <ul className="navLink">
                    <Link href="/">home</Link>
                    <Link href="/about">about</Link>
                    <img className="logo" src={logo.src} alt="logo" />
                    <Link href="/projects">projects</Link>
                    <Link href="/contact">contact</Link>
                </ul>
            </nav>

                    </header>
        )

}

export default Navbar;