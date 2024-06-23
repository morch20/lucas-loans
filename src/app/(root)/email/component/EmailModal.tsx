"use client";
import Image from "next/image";
import { useState } from "react";
import { emailValidator } from "@/utils/constants";
import { formatPhoneNumber, phoneValidator } from "@/utils/functions";

const EmailModal = ({ submit }: { submit: Function }) => {
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [terms, setTerms] = useState(false);

    const handleSubmit = () => {
        if (
            terms &&
            number &&
            phoneValidator(number) &&
            email &&
            email.trim() &&
            email.match(emailValidator) &&
            name &&
            name.trim()
        ) {
            submit(number, name.trim(), email.trim());
        }
    };

    return (
        <div className="bg-white flex-col items-center p-2 justify-around flex h-full flex-auto rounded-md shadow-md">
            <div className="w-4/5 flex items-center">
                <div className=" bg-secondary rounded-full">
                    <Image
                        alt="logo"
                        src={"/logo.svg"}
                        width={90}
                        height={90}
                        className=" "
                    />
                </div>
                <h2 className="text-xl pl-5 sm:pl-10 md:pl-12 lg:text-2xl xl:text-3xl font-medium">
                    Enter your phone number and name
                </h2>
            </div>

            <p className="text-gray-500 text-center xl:text-lg">
                Enter the information below to get the your home affordability.
            </p>

            <div className="w-4/5">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    className=" outline-none w-full rounded py-1 px-2 bg-gray-200 focus:outline-primary"
                    placeholder="Enter name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="w-4/5">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    className=" outline-none w-full rounded py-1 px-2 bg-gray-200 focus:outline-primary"
                    placeholder="Enter email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {email !== "" && !email.match(emailValidator) && (
                    <p className=" text-red-400">Enter a valid email *</p>
                )}
            </div>

            <div className="w-4/5">
                <label htmlFor="number">Phone number</label>
                <input
                    id="number"
                    type="tel"
                    className=" outline-none w-full rounded py-1 px-2 bg-gray-200 focus:outline-primary"
                    placeholder="(xxx)-xxx-xxxx"
                    value={number}
                    onChange={(e) =>
                        setNumber(formatPhoneNumber(e.target.value))
                    }
                />
            </div>

            <div className="flex items-start gap-x-3 w-11/12">
                <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    className=" cursor-pointer mt-1"
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                />
                <p className="text-xs leading-none">
                    I agree to{" "}
                    <a
                        href="https://www.termsfeed.com/live/961d7319-fe7d-47c0-9329-0ca64a876fd5"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-400"
                    >
                        terms & conditions
                    </a>{" "}
                    provided by Lucas Loans Inc. By providing my phone number, I
                    agree to receive text messages from the business.
                </p>
            </div>

            <button
                onClick={handleSubmit}
                className={
                    " flex items-center justify-center w-16 h-9 transition-all rounded-md " +
                    (terms &&
                    number &&
                    phoneValidator(number) &&
                    email &&
                    email.trim() &&
                    email.match(emailValidator) &&
                    name &&
                    name.trim()
                        ? " shadow-md hover:shadow-lg active:shadow-lg text-white hover:text-lg active:text-lg bg-primary "
                        : " cursor-default bg-gray-300")
                }
            >
                Send
            </button>
        </div>
    );
};

export default EmailModal;
