import Script from "next/script";

const Calendar = () => {
    return (
        <div className="min-h-screen mt-10 flex h-fit w-full">
            <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/Y0fBPK62Ip9kLvW40dsf"  
                className=" w-full flex-grow border-none overflow-hidden "
                // scrolling="no" 
                id="Y0fBPK62Ip9kLvW40dsf_1704239607905">
            </iframe>
            <Script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></Script>
        </div>
    );
};

export default Calendar;
