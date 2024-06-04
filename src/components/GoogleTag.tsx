import Script from "next/script";
import React from "react";

/*
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16532080367"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-16532080367');
</script>

*/
function GoogleTag() {
    return (
        <>
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=AW-16532080367"
            />
            <Script src="/scripts/googleTag.js" />
        </>
    );
}

export default GoogleTag;
