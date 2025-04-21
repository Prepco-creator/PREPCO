import { images } from "../../public/assets";
import { socialMediaLinksType } from "@/types";

export const socialMediaLinks: socialMediaLinksType[] = [
    {
        name: "X",
        link: "https://x.com/Prepcohealth",
        iconSrc: images.pngs.xIcon,
    },
    {
        name: "WhatsApp",
        link: "https://wa.me/+919962107102",
        iconSrc: images.pngs.whatsappIcon,
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/prepcohealthcare/",
        iconSrc: images.pngs.instagramIcon,
    },
    {
        name: "Threads",
        link: "https://www.threads.net/@prepcohealthcare",
        iconSrc: images.pngs.threadsIcon, // make sure this icon exists in your image assets
    },
    {
        name: "YouTube",
        link: "https://www.youtube.com/@Prepco.healthcare",
        iconSrc: images.pngs.youtubeIcon,
    },
    {
        name: "Facebook",
        link: "https://www.facebook.com/profile.php?id=61572957755713",
        iconSrc: images.pngs.facebookIcon, // make sure this icon exists too
    },
];

