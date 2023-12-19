import cartoon_flower_4 from "../assets/Layer 3.svg";
import logo3 from "../assets/logo3.png";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.png";

import { FaSquareYoutube, FaFacebookF, FaInstagram } from "react-icons/fa6";

export const navLinks = [
    {id: 'About',
    title: 'About'
    },
    {id: 'Services',
    title: 'Services'
    },
    {id: 'Portfolio',
    title: 'Portfolio'
    },
    {id: 'Contect',
    title: 'Contect'
    },
];

export const personalInfo = {
    name: "Sara Mahmoud",
    job: "Web Designer",
    summury: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, inventore, magni repudiandae quos molestiae repellendus voluptatum laboriosam hic deserunt quia nobis nulla atque harum! Doloribus recusandae architecto quidem excepturi?",
    img: cartoon_flower_4,
    logo: logo3,
    socialMedia: [
        {
            id: 1,
            icon: FaSquareYoutube,
            link: "youtube"
        },
        {
            id: 2,
            icon: FaFacebookF,
            link: "facebook"
        },
        {
            id: 3,
            icon: FaInstagram,
            link: "instagram"
        },

    ]
};

export const Serv = [
    {
        id: 1,
        icon: FaSquareYoutube,
        name: "Frontend Development",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, inventore, magni repudiandae quos molestiae repellendus voluptatum laboriosam hic deserunt quia nobis nulla atque harum! Doloribus recusandae architecto quidem",
        pic:[
            {
            id: 1,
            name:pic3
        },
        {
            id: 2,
            name:pic1
        }   
        ]    
    },
    {
        id: 2,
        icon: FaFacebookF,
        name: "Backend Development",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, inventore, magni repudiandae quos molestiae repellendus voluptatum laboriosam hic deserunt quia nobis nulla atque harum! Doloribus recusandae architecto quidem",      
        pic:[
            {
            id: 1,
            name:pic2
        },
        {
            id: 2,
            name:pic4
        }   
        ]      
    
    },
    {
        id: 3,
        icon: FaInstagram,
        name: "UI/UX Design",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, inventore, magni repudiandae quos molestiae repellendus voluptatum laboriosam hic deserunt quia nobis nulla atque harum! Doloribus recusandae architecto quidem",      
        pic:[{
            id: 1,
            name:pic3
        },
        {
            id: 2,
            name:pic4
        }   
        ]     
    
    },
    {
        id: 4,
        icon: FaSquareYoutube,
        name: "Frontend Development",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio, inventore, magni repudiandae quos molestiae repellendus voluptatum laboriosam hic deserunt quia nobis nulla atque harum! Doloribus recusandae architecto quidem",      
        pic:[{
            id: 1,
            name:pic3
        },
        {
            id: 2,
            name:pic2
        }   
        ]     

    },
]
console.log((Serv[0]))
