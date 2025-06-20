import Image from "next/image";

const Header = () => {

    return (
        <header className="flex justify-start items-center p-4">
            <Image src="/icon/sun.png" alt="Sun Icon" width={50} height={50} />
        </header>
    );
};

export default Header;