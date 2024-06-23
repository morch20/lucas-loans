import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/Accordion";

export default function FAQs() {
    const accordionItemClass = ""; // "bg-white rounded-md p-3";
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className={accordionItemClass}>
                <AccordionTrigger>
                    1. How does the Home Affordability Calculator work?
                </AccordionTrigger>
                <AccordionContent>
                    <p>
                        Our calculator estimates your home affordability based
                        on your income, expenses, and preferred loan terms. We
                        calculate your Debt-To-Income Ratio and use today&apos;s
                        rates to calculate the mortgage payment you can afford.
                    </p>
                    <br />
                    <h4 className="font-medium">What is DTI?</h4>
                    <br />
                    <p>
                        We want to ensure you understand all aspects of your
                        mortgage application, including the Debt- to-Income
                        (DTI) ratio. This crucial factor helps lenders determine
                        how much of your monthly income is allocated to debt
                        payments, allowing them to assess the mortgage debt you
                        can comfortably manage.
                    </p>
                    <br />
                    <p>
                        Your DTI is calculated by dividing your total monthly
                        debt by your gross monthly income and multiplying the
                        result by 100 to get a percentage. For instance, if you
                        have $2,000 in monthly debt payments (such as credit
                        card minimums and loan payments) and a gross monthly
                        income of $6,000, your DTI is calculated as follows:
                        $2,000 / $6,000, which equals 0.33. Multiply by 100, and
                        your DTI is 33%. Lenders use the debts listed on your
                        credit report to compute this ratio. You&#39;ll
                        typically need a DTI of 43% or less to qualify for most
                        mortgage options. However, this requirement can vary
                        based on the lender, loan type, and other factors.
                    </p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className={accordionItemClass}>
                <AccordionTrigger>
                    2. What information do I need to use the calculator?
                </AccordionTrigger>
                <AccordionContent>
                    You&#39;ll need details about your income, monthly expenses,
                    and any existing debts. Be as accurate as possible, and
                    remember to add anyone&#39;s income to the loan.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className={accordionItemClass}>
                <AccordionTrigger>
                    3. Is the calculator&#39;s estimate accurate?
                </AccordionTrigger>
                <AccordionContent>
                    While the forecast is a great starting point, consult us for
                    a precise assessment.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className={accordionItemClass}>
                <AccordionTrigger>
                    4. How do I improve my mortgage eligibility?
                </AccordionTrigger>
                <AccordionContent>
                    Enhance your credit score, save for a larger down payment,
                    and lower your debt-to-income ratio (DTI). See question one
                    for more info about DTI.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className={accordionItemClass}>
                <AccordionTrigger>
                    5. What types of mortgages do you offer?
                </AccordionTrigger>
                <AccordionContent>
                    We provide fixed-rate, adjustable-rate, FHA, VA, and USDA
                    loans, as well as bank statement loans.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className={accordionItemClass}>
                <AccordionTrigger>
                    6. How long does the mortgage pre-approval process take?
                </AccordionTrigger>
                <AccordionContent>
                    It typically takes less than one day but can vary depending
                    on individual circumstances.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className={accordionItemClass}>
                <AccordionTrigger>
                    7. What are the current mortgage rates?
                </AccordionTrigger>
                <AccordionContent>
                    Rates change daily based on market conditions. Contact us
                    for today&#39;s rates.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className={accordionItemClass}>
                <AccordionTrigger>
                    8. Do I need to get pre-approved before making an offer?
                </AccordionTrigger>
                <AccordionContent>
                    Yes, getting pre-approved will strengthen your offer when
                    purchasing a home. Most sellers won&#39;t talk to you unless
                    you have a pre-approval.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className={accordionItemClass}>
                <AccordionTrigger>
                    9. What is the minimum down payment required?
                </AccordionTrigger>
                <AccordionContent>
                    It depends on the loan type. Conventional loans generally
                    require 5% for first-time home buyers only 3%, while FHA
                    loans require as little as 3.5%.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className={accordionItemClass}>
                <AccordionTrigger>
                    10. Are there any additional costs involved in getting a
                    mortgage?
                </AccordionTrigger>
                <AccordionContent>
                    Yes, closing costs usually range from 2% to 5% of the loan
                    amount, including fees for appraisal, title insurance, and
                    other services.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
