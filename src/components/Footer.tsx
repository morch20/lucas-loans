import { Roboto } from "next/font/google";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Disclaimer from "./Disclaimer";
import Link from "next/link";

const roboto = Roboto({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-roboto",
});

const Footer = () => {
    return (
        <footer
            className={
                roboto.className +
                " bg-tertiary mt-10 text-white min-h-24 w-full flex flex-col items-center"
            }
        >
            <div className="w-full h-full container p-5 py-10 flex flex-wrap gap-10 justify-around">
                <div className="text-center w-80">
                    <h3 className="text-xl font-medium ">About Us</h3>
                    <div className="my-4 flex flex-col gap-y-2 text-gray-300">
                        <p className="text-sm">
                            At Lucas Loans, we understand that buying a home is
                            one of your most significant decisions. Unlike big
                            corporations, we offer a personalized touch with our
                            team of dedicated mortgage experts who genuinely
                            care about your journey. We are a faith based
                            organization and we are here to support you every
                            step of the way with personalized service and expert
                            advice. Let&#39;s make your home-buying experience
                            smooth and stress-free!
                        </p>
                        <p>Company NMLS: 2556582</p>
                        <a
                            href="https://www.nmlsconsumeraccess.org"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-400"
                        >
                            www.nmlsconsumeraccess.org
                        </a>
                    </div>
                </div>

                <div className="text-center w-80">
                    <h3 className="text-xl font-medium ">Contact Us</h3>
                    <div className="my-2 flex flex-col gap-y-2 text-gray-300">
                        <p>104 Angel Lane Panama City Beach, Fl 32407</p>
                        <p>Phone: 833-954-1998</p>
                        <div>
                            <span>Email: </span>
                            <a
                                className="text-blue-400"
                                href="mailto:lucas@lucas-loans.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                lucas@lucas-loans.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center w-80">
                    <h3 className="text-xl font-medium ">Legal</h3>
                    <div className="my-2 flex flex-col gap-y-2 text-gray-300">
                        <Disclaimer />
                        <a
                            href="https://www.termsfeed.com/live/961d7319-fe7d-47c0-9329-0ca64a876fd5"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-400"
                        >
                            Privacy Policy
                        </a>
                        <Link className="text-blue-400" href={"/settings"}>
                            Settings
                        </Link>
                    </div>
                </div>

                <div className="text-center w-80 2xl:hidden">
                    <div className="flex justify-around items-center">
                        <a
                            href="https://www.instagram.com/lucasloans/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaInstagram size={50} className="text-[#d03f77]" />
                        </a>
                        <Image
                            src={"/equalhousing.png"}
                            alt="Equal Housing Lender"
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
            </div>

            <div className="w-full container p-5 hidden 2xl:block">
                <div className="text-center w-80 mx-auto">
                    <div className="flex justify-around items-center">
                        <a
                            href="https://www.instagram.com/lucasloans/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaInstagram size={50} className="text-[#d03f77]" />
                        </a>
                        <Image
                            src={"/equalhousing.png"}
                            alt="Equal Housing Lender"
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
