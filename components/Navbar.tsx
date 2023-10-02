import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1400px] mx-auto flex justify-between items-center sm:pz:16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          {/* <Image
            src="/logo.svg"
            alt="car logo"
            width={118}
            height={18}
            className="object-contain"
          ></Image> */}
          <h1 className="font-black font-mono text-[28px]">CarClub</h1>
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        ></CustomButton>
      </nav>
    </header>
  );
};

export default Navbar;
