import { Roboto } from "next/font/google";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Disclaimer from "./Disclaimer";

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
                        <p>
                            For numerous years, we{"'"}ve been assisting clients
                            in realizing their aspirations of owning their ideal
                            homes, and we are passionate about our work.
                        </p>
                        <p>Company NMLS: 2556582</p>
                    </div>
                </div>

                <div className="text-center w-80">
                    <h3 className="text-xl font-medium ">Contact Us</h3>
                    <div className="my-2 flex flex-col gap-y-2 text-gray-300">
                        <p>Individual NMLS: 2171747</p>
                        <p>32543 Hawks lake ln, Sorrento FL, 32776</p>
                        <p>954-495-6135</p>
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

                <div className="text-center w-80">
                    <h3 className="text-xl font-medium ">Disclaimer</h3>
                    <div className="my-2 flex flex-col gap-y-2 text-gray-300">
                        <Disclaimer />
                    </div>
                </div>

                <div className="text-center w-80">
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
