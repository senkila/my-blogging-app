'use client'

import Link from 'next/link'
import './navbar.css'
import { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    const handleLinkClick = () => {
        showNavbar && setShowNavbar(!showNavbar)
    }

    return (
        <nav className="navbar w-full">
            <div className="w-full py-4 flex">
                <div className="flex flex-row iconContainer">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={350}
                        height={36}
                        priority
                        className="logo"
                    />
                    <Image
                        onClick={handleShowNavbar}
                        className="menu-icon"
                        src="/icons/menu.svg"
                        alt="Logo"
                        width={36}
                        height={36}
                        priority
                    />
                </div>
                <div
                    className={`nav-elements w-full ${showNavbar && 'active'}`}
                >
                    <ul className="w-full grid grid-cols-5 justify-around">
                        <li>
                            <Link href="/" onClick={handleLinkClick}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" onClick={handleLinkClick}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" onClick={handleLinkClick}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" onClick={handleLinkClick}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" onClick={handleLinkClick}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
