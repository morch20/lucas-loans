import Script from "next/script";
import React from "react";

/*
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-29HFBT8BPF"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-29HFBT8BPF');
</script>

*/
function GoogleTagAnalytics() {
    return (
        <>
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-29HFBT8BPF"
            />
            <Script src="/scripts/googleTagAnalytics.js" />
        </>
    );
}

export default GoogleTagAnalytics;
