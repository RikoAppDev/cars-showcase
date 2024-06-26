import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomButton } from ".";

const NavBar = () => {
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 py-4 px-6">
                <Link href="/" className="flex justify-center items-center">
                    <Image
                        src="/logo.svg"
                        alt="Car Hub Logo"
                        height={18}
                        width={118}
                        className="object-contain"
                    />
                </Link>

                <CustomButton
                    title="Sign In"
                    btnType="button"
                    containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
                />
            </nav>
        </header>
    );
};

export default NavBar;
