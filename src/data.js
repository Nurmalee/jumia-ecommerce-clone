import {PersonOutlineOutlined, FavoriteBorder, Storefront, LocalAtm, HomeOutlined, PhoneAndroidOutlined, ComputerOutlined, SportsEsportsOutlined, DirectionsCarOutlined, ChildCareOutlined, EmojiObjectsOutlined, FitnessCenterOutlined, LocalHospitalOutlined, StorefrontOutlined, ArrowDropDownCircleOutlined} from '@material-ui/icons';

export const userSubmenu = [
    {
        name: "account",
        Icon: PersonOutlineOutlined,
    },
    {
        name: "orders",
        Icon: Storefront,
    },
    {
        name: "saved items",
        Icon: FavoriteBorder,
    },
    {
        name: "jumia coupon",
        Icon: LocalAtm,
    }
]

export const helpSubmenu = [
    "help center", 
    "place & track order", 
    "order cancellation", 
    "returns & refunds", 
    "payment & jumia account"
]

export const sideNavMenu = [
    {
        name: "supermarket",
        Icon: StorefrontOutlined,
    },
    {
        name: "health & beauty",
        Icon: LocalHospitalOutlined,
    },
    {
        name: "home & office",
        Icon: HomeOutlined,
    },
    {
        name: "phones & tablets",
        Icon: PhoneAndroidOutlined,
    },
    {
        name: "computing",
        Icon: ComputerOutlined,
    },
    {
        name: "electronics",
        Icon: EmojiObjectsOutlined,
    },
    {
        name: "fashion",
        Icon: PersonOutlineOutlined,
    },
    {
        name: "baby products",
        Icon: ChildCareOutlined,
    },
    {
        name: "gaming",
        Icon: SportsEsportsOutlined,
    },
    {
        name: "sporting goods",
        Icon: FitnessCenterOutlined,
    },
    {
        name: "automobile",
        Icon: DirectionsCarOutlined,
    },
    {
        name: "other categories",
        Icon: ArrowDropDownCircleOutlined,
    }
]

export const bannerShuffle = [
    "https://ng.jumia.is/cms/FOODFEST/11S1424x768__-(1).jpg", //JUMIA FOOD
    "https://ng.jumia.is/cms/FOODFEST/11JFF_KrispyKreame_1424x768-min.jpg", //JUMIA FOOD FEST
    "https://ng.jumia.is/cms/Homepage/2021/w14/Super-(1).jpg", //SUPERMARKET
    "https://ng.jumia.is/cms/Homepage/2021/w14/Artboard_1_copy.jpg", //TREND WOMEN
    "https://ng.jumia.is/cms/Homepage/2021/w14/Artboard_1_copy_2.jpg", //TREND MEN
    "https://ng.jumia.is/cms/Homepage/2021/w13/Mobile_Desktop.jpg", //DONT MISS A CALL
    "https://ng.jumia.is/cms/Homepage/2021/w13/26DB5C4C-B436-40B3-82DF-6D894E9A50B8.jpeg", //FLASH SALES
    "https://ng.jumia.is/cms/Homepage/2021/w14/Artboard_1.jpg", //TREND SPORTING
    "https://ng.jumia.is/cms/Homepage/2021/w17/NG_PERNOD_ANCHOR_tease_Slider.jpg",
    "https://ng.jumia.is/cms/Homepage/2021/w17/slider-(9).jpg",
    "https://ng.jumia.is/cms/Homepage/2021/w17/NG_PRODUCTIVITY_PLUS_Slider.jpg",
    "https://ng.jumia.is/cms/Homepage/2021/w17/NG_DIAGEO_Slider.jpg",
    "https://ng.jumia.is/cms/Homepage/2021/w17/s-closet-upgrade.jpg"

]

export const topProducts = [
    {
        id: 1,
        name: "samsung",
        desc: 'Samsung Galaxy A12 - 6.5" 48MP Camera, 4/64GB Memory, 5000maH Battery, Fingerprint, 4G LTE - BLACK',
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/886217/1.jpg?9326",
        current_price: 65990,
        percentReduct: 0.18,
        eligibility_statement: "eligibe for free shipping with jumia express (lagos only) OR jumia prime"
    },
    {
        id: 2,
        name: "iPhone",
        desc: 'Apple IPhone 12 Pro - 128GB, 6GB RAM, 6.1-Inch, 5G, (12MP+12MP+12MP), 2815mAh-Pacific Blue',
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/211437/1.jpg?0129",
        current_price: 549000,
        percentReduct: 0.20,
        status: {
            state: "Shipped from abroad",
            abroad: true,
        },
        eligibility_statement: "eligibe for free shipping with jumia express (lagos only) OR jumia prime"
    },
    {
        id: 3,
        name: "PS5",
        desc: 'Sony Playstation 5 825GB - Installed Games (fifa21, Gta5, Mk11,God Of War, Nfs...)',
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/786617/1.jpg?3547",
        current_price: 449999,
        percentReduct: 0.18,
        status: {
            state: "Shipped from abroad",
            abroad: true,
        },
        eligibility_statement: "eligibe for free shipping with jumia express (lagos only) OR jumia prime"
    },
    {
        id: 4,
        name: "dell",
        desc: 'DELL Inspiron 13 7000 Series 2-in-1 Touch/Backlit Keyboard Intel Core I5-8GB RAM-512GB SSD + 32GB Optane',
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/906717/1.jpg?9306",
        current_price: 435000,
        percentReduct: 0.15,
        status: {
            state: "Official store",
            abroad: false,
        },
        eligibility_statement: "eligibe for free shipping with jumia express (lagos only) OR jumia prime"
    },
    {
        id: 5,
        name: "Megir",
        desc: 'Megir Man Watch Genuine Leather Band 3 Small Dials',
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/838653/1.jpg?8237",
        current_price: 5240,
        percentReduct: 0.28,
        eligibility_statement: "eligibe for free shipping with jumia express (lagos only) OR jumia prime"
    }
]

export const topDeals = [
    {
        id: 6,
        desc: "Mama'S Pride Parboiled Rice 50kg",
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/054676/1.jpg?4277",
        current_price: 24990,
        percentReduct: 0.33,
        status: {
            state: "Official store",
            abroad: false,
        },
        eligibility_statement: "Free Shipping on Jumia Express orders above N12,000 in Lagos"
    },
    {
        id: 7,
        desc: 'QUALITY WOMEN 4 IN 1 SHOULDER HAND BAG, BLACK COLOUR',
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/330207/1.jpg?5388",
        current_price: 6600,
        percentReduct: 0.12,
        eligibility_statement: "eligibe for free shipping with jumia express (lagos only) OR jumia prime"
    },
    {
        id: 8,
        desc: '2 In 1 Walkabout Sneakers & Tstain Maintenance Kit-v2',
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/25/508366/1.jpg?2077",
        current_price: 2740,
        percentReduct: 0.31,
        eligibility_statement: "Free Shipping on Jumia Express orders above N12,000 in Lagos"
    },
    {
        id: 9,
        desc: 'Chrysolite Designs Lucky Numbers 6 IN 1 Casual Polo Bundle - Navyblue, Black, White, Grey, Wine, Red.',
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/747454/1.jpg?9869",
        current_price: 11440,
        percentReduct: 0.45,
        eligibility_statement: "Free Shipping on Jumia Express orders above N12,000 in Lagos"
    },
    {
        id: 10,
        desc: 'Silicone LED Digital Sports Electronic Wristwatch - Unisex',
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/718375/1.jpg?0866",
        current_price: 1850,
        percentReduct: 0.36,
        status: {
            state: "Official store",
            abroad: false,
        },
        eligibility_statement: "eligibe for free shipping with jumia express (lagos only) OR jumia prime"
    }
]