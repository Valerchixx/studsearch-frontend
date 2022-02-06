import React from "react";
import './offers.css'
import OfferCard from "./component/Card";


const  OffersPage = ()  =>{

    const arr = [
        {phrase:"Інженерія програмного забезпечення...",
         title:"Факультет інформатики та обчислювальної...",
         mark:"197,7",
         description:`Твій конкурсний бал для цієї спеціальності
         вище на 1,4 за прохідний бал минулого року.`
        },
        {phrase:"Інженерія програмного забезпечення...",
        title:"Факультет інформатики та обчислювальної...",
        mark:"197,1",
        description:`Твій конкурсний бал для цієї спеціальності
        вище на 1,4 за прохідний бал минулого року.`
        },
        {phrase:"Інженерія програмного забезпечення...",
        title:"Факультет інформатики та обчислювальної...",
        mark:"197,3",
        description:`Твій конкурсний бал для цієї спеціальності
        вище на 1,4 за прохідний бал минулого року.`
        },
        {phrase:"Інженерія програмного забезпечення...",
        title:"Факультет інформатики та обчислювальної...",
        mark:"197,3",
        description:`Твій конкурсний бал для цієї спеціальності
        вище на 1,4 за прохідний бал минулого року.`
        },
        {phrase:"Інженерія програмного забезпечення...",
        title:"Факультет інформатики та обчислювальної...",
        mark: "197,3",
        description:`Твій конкурсний бал для цієї спеціальності
        вище на 1,4 за прохідний бал минулого року.`
       }
]
    return(
        <div>
            {arr.map((item) => <OfferCard phrase={item.phrase} title={item.title} desc={item.description} mark={item.mark} />)}

        </div>
    )
}

export default OffersPage