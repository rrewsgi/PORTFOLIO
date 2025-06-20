'use client'

import { useState } from 'react';
import Image from "next/image";

const Header = () => {
    // const [isDarkMode, setIsDarkMode] = useState(false);
    // const [isMuted, setIsMuted] = useState(true);

    return (
        <header className="flex justify-start items-center p-4">
            <Image src="/icon/sun.png" alt="Sun Icon" width={50} height={50} />
        </header>
    );
};

export default Header;