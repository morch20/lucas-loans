import Script from "next/script";

const Calendar = () => {
    return (
        <div className="w-full h-[100dvh] py-5 md:py-10">
            <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/Y0fBPK62Ip9kLvW40dsf"  
                className="w-full h-full border-none "
                style={{overflow: "hidden"}}
                // scrolling="no" 
                id="Y0fBPK62Ip9kLvW40dsf_1704239607905">
            </iframe>
            <br />
            <Script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></Script>
        </div>
    );
};

export default Calendar;
