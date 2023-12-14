"use client";
import { useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

const Disclaimer = ({ top = true }) => {
    const [open, setOpen] = useState(false);
    const outsideClickRef = useOutsideClick(() => {
        setOpen(false);
    }, []);

    return (
        <div className=" text-tertiary " ref={outsideClickRef}>
            <p
                onClick={() => setOpen((prev) => !prev)}
                className="text-blue-400 cursor-pointer"
            >
                Disclaimer
            </p>
            {open && (
                <div
                    className={
                        " fixed flex flex-col items-center justify-around p-4 max-w-2xl px w-[90%] h-[450px] border bg-white shadow-xl rounded-md  top-1/2 left-1/2 translate-x-[-50%] " +
                        (top ? "translate-y-[-50%]" : "translate-y-[50%]")
                    }
                >
                    <h3 className="text-2xl font-semibold ">Disclaimer</h3>
                    <div className=" border p-2 w-full h-3/4 bg-[#eff4f7] rounded text-start overflow-y-auto">
                        <p>
                            The Max Affordability Calculator is made available
                            as a tool for your research purposes only it is not
                            made to be a credit decision. Lucas loans Inc. does
                            not guarantee the accuracy of the results as they
                            are based on assumptions and the information you
                            provide. You should seek further advice from
                            qualified professional(s) who can assist you in
                            regard to your personal financial circumstances.
                            Your final payment, interest rate, loan, amount
                            and/or all necessary finances fees are unknown and
                            all calculations are estimates only. There are
                            certain assumptions will be utilized, including, but
                            not limited to the following:
                        </p>
                        <h4 className="text-xl my-2 font-semibold">
                            Assumptions
                        </h4>
                        <p>
                            Estimated monthly property tax insurance and
                            estimated monthly homeowner’s insurance along with
                            mortgage insurance is estimated to be a total of
                            $550 per month. Annual homeowner’s association (HOA)
                            dues are $0. Loan term is 30 years. These are
                            examples only are not guaranteed amounts for any one
                            location. Estimated taxes and insurance amounts will
                            adjust using the above assumptions when a new
                            purchase/refinance/home estimated value is placed
                            into the field and is not a guarantee of what actual
                            amounts may be for any particular product or
                            property. The Debt-to-Income ratio (DTI) used for
                            the Max Affordability calculator is 50%. This means
                            that your total monthly debt payments have to be 50%
                            of your monthly before tax income.
                        </p>
                    </div>
                    <button
                        onClick={() => setOpen(false)}
                        className="bg-secondary w-16 h-9 text-white hover:bg-primary active:bg-primary transition-all rounded hover:text-lg active:text-lg shadow-md hover:shadow-lg active:shadow-md"
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
};

export default Disclaimer;
