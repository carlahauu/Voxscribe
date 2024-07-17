import React from 'react'

export default function Header() {
    return (
        <header className='z-10 flex items-center justify-between gap-4 pl-10 mt-10 pr-10'>
            <a href="/"><h1 className='font-medium text-2xl bold text-white'>Vox<span className='text-blue-500 bold'>Scribe</span></h1></a>
            <a href="/" className='flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-blue-950'>
                    <p>New</p>
                    <i className="fa-solid fa-plus"></i>
                </a>
        </header>
    )
}
