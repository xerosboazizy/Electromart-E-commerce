import { TbTruckDelivery } from "react-icons/tb"
import { GoPackage } from "react-icons/go"
import { RiCustomerServiceFill } from "react-icons/ri"
import { FiSettings } from "react-icons/fi"
import { MdPayment } from "react-icons/md"


export const Services = [
    {
        "tagline": "Free Shipping ",
        "title": "from all orders below $100",
        "icon": { TbTruckDelivery },
    },

    {
        "tagline": "Daily Supprise Offers ",
        "title": "Save upto 25% off",
        "icon": { GoPackage },
    },

    {
        "tagline": "Support 24/7 ",
        "title": "Shop with an expert",
        "icon": { RiCustomerServiceFill },
    },
    {
        "tagline": "Affordable Prices ",
        "title": "Get factory direct price",
        "icon": { FiSettings },
    },
    {
        "tagline": "Secure payment ",
        "title": "100% protected payment",
        "icon": { MdPayment },
    },

];
