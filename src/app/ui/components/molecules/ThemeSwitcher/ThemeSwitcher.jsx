'use client'

import React, { useState, useEffect } from 'react';
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';
import { useAppContext } from '../../../../context';

const ThemeSwitcher = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const { ui, setUi } = useAppContext(); 


    useEffect(() => {
        const isDarkMode = sessionStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        sessionStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
        setIsDarkMode((prevMode) => !prevMode);
        toggleDark();
    };
    const toggleDark = () => {
        setUi((prevUi) => ({ ...prevUi, dark: !prevUi.dark }));
    };

    return (
        <div
            onClick={toggleDarkMode}
            className={`md:h-12 md:w-12 h-10 w-10 grid place-items-center rounded-full border dark:border-gray-200 shadow-md bg-white transition-all duration-300 cursor-pointer 2xl:size-16 border-darkSurface-300 ${isDarkMode ? 'text-[#241E20] hover:text-white hover:bg-[#241E20]' : 'text-orange-300 hover:text-white hover:bg-orange-300 bg-white'
                }`}
        >
            {isDarkMode ? <BiSolidMoon className='h-6 w-6 md:h-8 md:w-8' /> : <BiSolidSun className='h-8 w-8' />}
        </div>
    );
};

export default ThemeSwitcher;
