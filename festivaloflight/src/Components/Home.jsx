import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl h-auto">
            <aside className="relative overflow-hidden text-white rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl pr-4">
                            Welcome to the website
                        </h2>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://images.pexels.com/photos/8818623/pexels-photo-8818623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://images.pexels.com/photos/15512817/pexels-photo-15512817/free-photo-of-fireworks-over-the-maidens-tower-uskudar-istanbul-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium text-white">The Festival of Lights Is Here</h1>
        </div>
    );
}