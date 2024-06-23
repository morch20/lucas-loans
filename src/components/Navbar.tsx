"use client";
import { Sling } from "hamburger-react";
import { FaHome, FaCalendarAlt } from "react-icons/fa";
import { IoLinkSharp } from "react-icons/io5";
import { Roboto, Mina } from "next/font/google";
import { SetStateAction, useState, useRef } from "react";
import Link from "next/link";
import { pause } from "@/utils/functions";
import useOutsideClick from "@/hooks/useOutsideClick";
import CustomLink from "./CustomLink";

const roboto = Roboto({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-roboto",
});

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [animate, setAnimate] = useState("right-to-middle-fast");

    const ignoreRef = useRef<any>();
    const outsideClickRef = useOutsideClick(() => {
        handleClose();
    }, [ignoreRef]);

    const handleClose = async (
        value: boolean | SetStateAction<boolean> = false
    ) => {
        if (!value) {
            setAnimate("middle-to-right-fast");
            await pause();
        }
        setAnimate("right-to-middle-fast");
        setOpen(value);
    };

    return (
        <>
            {open && (
                <div className="lg:hidden fixed top-0 left-0 h-[100dvh] w-full bg-gray-500/50"></div>
            )}
            <nav className="bg-white relative w-full flex h-20 2xl:h-24 justify-center items-center">
                <div className=" px-5 sm:px-7 container w-full h-full flex items-center">
                    <div className="w-full h-full flex justify-between items-center">
                        <Link
                            href="/"
                            className="w-fit h-14 text-primary flex items-center justify-center "
                        >
                            <FaHome className=" w-6 h-6 md:w-10 md:h-10 " />
                            <div className="h-fit w-fit">
                                <h2 className=" text-xl md:text-2xl lg:text-3xl 2xl:text-4xl mina !leading-none">
                                    <span className={mina.className}>
                                        Lucas
                                    </span>
                                    <span className={roboto.className}>
                                        Loans
                                    </span>
                                </h2>
                                <p className="w-fit text-[8px] lg:text-xs !leading-[0] mx-auto">
                                    Your path to home ownership
                                </p>
                            </div>
                        </Link>
                        <ul className="hidden md:flex font-medium lg:text-lg justify-between items-center max-w-sm w-2/5 lg:w-3/5 lg:max-w-xl">
                            <CustomLink
                                path="/how-to-buy-a-house-in-8-steps"
                                onClick={() => handleClose()}
                                className="my-4 shake2 hidden lg:flex w-fit gap-x-2 items-center nav__links__animation"
                            >
                                <FaHome size={25} className=" text-primary" />
                                <Link href={"/how-to-buy-a-house-in-8-steps"}>
                                    How to buy a house
                                </Link>
                            </CustomLink>
                            <CustomLink
                                path="/calendar"
                                onClick={() => handleClose()}
                                className="my-4 shake2 flex w-fit gap-x-2 items-center nav__links__animation"
                            >
                                <FaCalendarAlt
                                    size={25}
                                    className=" text-primary"
                                />
                                <Link href={"/calendar"}>Book a free call</Link>
                            </CustomLink>
                            <li
                                onClick={() => handleClose()}
                                className="my-4 shake2 flex w-fit gap-x-2 items-center nav__links__animation"
                            >
                                <IoLinkSharp
                                    size={25}
                                    className=" text-primary"
                                />
                                <a
                                    href="https://www.blink.mortgage/app/signup/p/lucasloansinc"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Apply Now
                                </a>
                            </li>
                        </ul>
                        <div ref={ignoreRef} className="lg:hidden">
                            <Sling
                                toggle={(value) => handleClose(value)}
                                toggled={open}
                                size={30}
                                duration={0.7}
                            />
                        </div>
                    </div>
                </div>

                <div className=" lg:hidden">
                    {open && (
                        <div
                            ref={outsideClickRef}
                            className={
                                " absolute z-10 bg-white top-20 left-0 w-full h-fit flex flex-col items-center " +
                                animate
                            }
                        >
                            <hr className="w-full h-[1px] bg-gray-300" />
                            <ul className="p-5 sm:p-7 text-lg container w-full">
                                <CustomLink
                                    path="/how-to-buy-a-house-in-8-steps"
                                    onClick={() => handleClose()}
                                    className="my-4 shake2 flex w-fit gap-x-2 items-center nav__links__animation"
                                >
                                    <FaHome
                                        size={25}
                                        className=" text-primary"
                                    />
                                    <Link
                                        href={"/how-to-buy-a-house-in-8-steps"}
                                    >
                                        How to buy a house
                                    </Link>
                                </CustomLink>
                                <CustomLink
                                    path="/calendar"
                                    onClick={() => handleClose()}
                                    className="my-4 shake2 flex w-fit gap-x-2 items-center nav__links__animation"
                                >
                                    <FaCalendarAlt
                                        size={25}
                                        className=" text-primary"
                                    />
                                    <Link href={"/calendar"}>
                                        Book a free call
                                    </Link>
                                </CustomLink>
                                <li
                                    onClick={() => handleClose()}
                                    className="my-4 shake2 flex w-fit gap-x-2 items-center nav__links__animation"
                                >
                                    <IoLinkSharp
                                        size={25}
                                        className=" text-primary"
                                    />
                                    <a
                                        href="https://www.blink.mortgage/app/signup/p/lucasloansinc"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Apply Now
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
