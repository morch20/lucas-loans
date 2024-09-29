new carouselInlineWidget("reviewsio-carousel-widget", {
    /*Your REVIEWS.io account ID:*/
    store: "Lucas-loans.com",
    sku: "",
    lang: "en",
    carousel_type: "default",
    styles_carousel: "CarouselWidget--sideHeader",

    /*Widget settings:*/
    options: {
        general: {
            /*What reviews should the widget display? Available options: company, product, third_party. You can choose one type or multiple separated by comma.*/
            review_type: "company, product",
            /*Minimum number of reviews required for widget to be displayed*/
            min_reviews: "1",
            /*Maximum number of reviews to include in the carousel widget.*/
            max_reviews: "20",
            address_format: "CITY, COUNTRY",
            /*Carousel auto-scrolling speed. 3000 = 3 seconds. If you want to disable auto-scroll, set this value to false.*/
            enable_auto_scroll: 10000,
        },
        header: {
            /*Show overall rating stars*/
            enable_overall_stars: true,
            rating_decimal_places: 2,
        },
        reviews: {
            /*Show customer name*/
            enable_customer_name: true,
            /*Show customer location*/
            enable_customer_location: true,
            /*Show "verified review" badge*/
            enable_verified_badge: true,
            /*Show "verified subscriber" badge*/
            enable_subscriber_badge: true,
            /*Show "I recommend this product" badge (Only for product reviews)*/
            enable_recommends_badge: true,
            /*Show photos attached to reviews*/
            enable_photos: true,
            /*Show videos attached to reviews*/
            enable_videos: true,
            /*Show when review was written*/
            enable_review_date: true,
            /*Hide reviews written by the same customer (This may occur when customer reviews multiple products)*/
            disable_same_customer: true,
            /*Minimum star rating*/
            min_review_percent: 4,
            /*Show 3rd party review source*/
            third_party_source: true,
            /*Hide reviews without comments (still shows if review has a photo)*/
            hide_empty_reviews: true,
            /*Show product name*/
            enable_product_name: true,
            /*Show only reviews which have specific tags (multiple semicolon separated tags allowed i.e tag1;tag2)*/
            tags: "",
            /*Show branch, only one input*/
            branch: "",
            enable_branch_name: false,
        },
        popups: {
            /*Make review items clickable (When they are clicked, a popup appears with more information about a customer and review)*/
            enable_review_popups: true,
            /*Show "was this review helpful" buttons*/
            enable_helpful_buttons: true,
            /*Show how many times review was upvoted as helpful*/
            enable_helpful_count: true,
            /*Show share buttons*/
            enable_share_buttons: true,
        },
    },
    translations: {
        verified_customer: "Verified Customer",
    },
    styles: {
        /*Base font size is a reference size for all text elements. When base value gets changed, all TextHeading and TexBody elements get proportionally adjusted.*/
        "--base-font-size": "16px",
        "--base-maxwidth": "100%",

        /*Logo styles:*/
        "--reviewsio-logo-style": "var(--logo-normal)",

        /*Star styles:*/
        "--common-star-color": "#276EBE",
        "--common-star-disabled-color": " rgba(0,0,0,0.25)",
        "--medium-star-size": " 22px",
        "--small-star-size": "19px" /*Modal*/,
        "--x-small-star-size": "16px",
        "--x-small-star-display": "inline-flex",

        /*Header styles:*/
        "--header-order": "1",
        "--header-width": "160px",
        "--header-bg-start-color": "transparent",
        "--header-bg-end-color": "transparent",
        "--header-gradient-direction": "135deg",
        "--header-padding": "0.5em",
        "--header-border-width": "0px",
        "--header-border-color": "rgba(0,0,0,0.1)",
        "--header-border-radius": "0px",
        "--header-shadow-size": "0px",
        "--header-shadow-color": "rgba(0, 0, 0, 0.1)",

        /*Header content styles:*/
        "--header-star-color": "#276EBE",
        "--header-disabled-star-color": "#DCEDFF",
        "--header-heading-text-color": "inherit",
        "--header-heading-font-size": "inherit",
        "--header-heading-font-weight": "inherit",
        "--header-heading-line-height": "inherit",
        "--header-heading-text-transform": "inherit",
        "--header-subheading-text-color": "inherit",
        "--header-subheading-font-size": "inherit",
        "--header-subheading-font-weight": "inherit",
        "--header-subheading-line-height": "inherit",
        "--header-subheading-text-transform": "inherit",

        /*Review item styles:*/
        "--item-maximum-columns": "5" /*Must be 3 or larger*/,
        "--item-background-start-color": "transparent",
        "--item-background-end-color": "transparent",
        "--item-gradient-direction": "135deg",
        "--item-padding": "0.5em",
        "--item-border-width": "0px",
        "--item-border-color": "rgba(0,0,0,0.1)",
        "--item-border-radius": "0px",
        "--item-shadow-size": "0px",
        "--item-shadow-color": "rgba(0,0,0,0.1)",

        /*Heading styles:*/
        "--heading-text-color": " #0E1311",
        "--heading-text-font-weight": " 600",
        "--heading-text-font-family": " inherit",
        "--heading-text-line-height": " 1.4",
        "--heading-text-letter-spacing": "0",
        "--heading-text-transform": "none",

        /*Body text styles:*/
        "--body-text-color": " #0E1311",
        "--body-text-font-weight": "400",
        "--body-text-font-family": " inherit",
        "--body-text-line-height": " 1.4",
        "--body-text-letter-spacing": "0",
        "--body-text-transform": "none",

        /*Scroll button styles:*/
        "--scroll-button-icon-color": "#0E1311",
        "--scroll-button-icon-size": "24px",
        "--scroll-button-bg-color": "transparent",

        "--scroll-button-border-width": "0px",
        "--scroll-button-border-color": "rgba(0,0,0,0.1)",

        "--scroll-button-border-radius": "60px",
        "--scroll-button-shadow-size": "0px",
        "--scroll-button-shadow-color": "rgba(0,0,0,0.1)",
        "--scroll-button-horizontal-position": "0px",
        "--scroll-button-vertical-position": "0px",

        /*Badge styles:*/
        "--badge-icon-color": "#0E1311",
        "--badge-icon-font-size": "15px",
        "--badge-text-color": "#0E1311",
        "--badge-text-font-size": "inherit",
        "--badge-text-letter-spacing": "inherit",
        "--badge-text-transform": "inherit",

        /*Author styles:*/
        "--author-font-size": "inherit",
        "--author-font-weight": "inherit",
        "--author-text-transform": "inherit",

        /*Product photo or review photo styles:*/
        "--photo-video-thumbnail-size": "60px",
        "--photo-video-thumbnail-border-radius": "0px",

        /*Popup styles:*/
        "--popup-backdrop-color": "rgba(0,0,0,0.75)",
        "--popup-color": "#ffffff",
        "--popup-star-color": "inherit",
        "--popup-disabled-star-color": "inherit",
        "--popup-heading-text-color": "inherit",
        "--popup-body-text-color": "inherit",
        "--popup-badge-icon-color": "inherit",
        "--popup-badge-icon-font-size": "19px",
        "--popup-badge-text-color": "inherit",
        "--popup-badge-text-font-size": "14px",
        "--popup-border-width": "0px",
        "--popup-border-color": "rgba(0,0,0,0.1)",
        "--popup-border-radius": "0px",
        "--popup-shadow-size": "0px",
        "--popup-shadow-color": "rgba(0,0,0,0.1)",
        "--popup-icon-color": "#0E1311",

        /*Tooltip styles:*/
        "--tooltip-bg-color": "#0E1311",
        "--tooltip-text-color": "#ffffff",
    },
});

reviewsBadgeRibbon("badge-ribbon", {

    store: "Lucas-loans.com",

    size: "small",

});