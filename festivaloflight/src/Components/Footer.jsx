import React from 'react'
import logoimg from '../assets/images/Logo.jpg'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-900 border-y border-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logoimg}
                                className="mr-3 h-20"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2024 

                        <a href="https://www.linkedin.com/in/saarthak-agarwal-982200287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:underline">
                             Saarthak Agarwal
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}