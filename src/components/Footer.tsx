"use client"
import React from 'react'
import {
    AiOutlineGithub,
    AiOutlineTwitter,
    AiOutlineLinkedin,
    AiOutlineYoutube,
  } from "react-icons/ai"

const Footer = () => {
  return (
    <footer id='contact' className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
        <hr className='w-full h-0.5 mx-auto mt-8 ng-neutral-200 border-0'></hr>
        <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-center">
            <div className="flex flex-row items-center justify-center space-x-2 mb-1">
                    <a href="https://github.com/Fellipe-Tripovichy" rel="noreferrer" target="_blank">
                    <AiOutlineGithub
                    className="hover:-translate-y-1 transition-transform cursor-pointer text-gray-200"
                    size={30}
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/fellipe-tripovichy/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <AiOutlineLinkedin
                    className="hover:-translate-y-1 transition-transform cursor-pointer text-gray-200"
                    size={30}
                    />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer