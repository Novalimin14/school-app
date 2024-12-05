"use client";
import Link from 'next/link';

const Nav = () => {
    return (
        <nav className="bg-green-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" >
                    School Website
                </Link>
                <ul className="flex space-x-4">
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Aboutt</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
