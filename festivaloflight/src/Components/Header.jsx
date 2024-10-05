"use client";
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoimg from "../assets/images/Logo.jpg"
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu"; // Assuming these components are defined
import { cn } from '../lib/utils';  // Adjust the path based on your directory structure

export default function Header() {
    const [active, setActive] = useState(null);

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logoimg}
                            className="mr-3 h-20"
                            alt="Logo"
                        />
                    </Link>

                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <Menu  setActive={setActive}>
                            <li className='flex justify-center px-4'>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `duration-200 ${isActive ? "text-blue-400" : "text-white"}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className='flex justify-center px-4'>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `duration-200 ${isActive ? "text-blue-400" : "text-white"}`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            
                        </Menu>
                    </div>
                </div>
            </nav>
        </header>
    );
}
