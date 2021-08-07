import React, { Component, lazy} from 'react';
// import Work from './work/work';
import './Contents.css';
import '../../i18n';
import { useTranslation } from 'react-i18next';


const Work = lazy(() => import('./work/work'));



export default function Contents() {
    const [t, i18n] = useTranslation();
    let items = [
        {
            "link":"https://mcqueen5258.github.io/flowers/",
            "img":"image/workImage/flower.png",
            "name":t("Flowers")
        },
        {
            "link":"https://mcqueen5258.github.io/examination/forOuYang/assignment/",
            "img":"image/workImage/assignment.png",
            "name":t("Assignment")
        },
        {
            "link":"https://mcqueen5258.github.io/2020works/cinemaTicket",
            "img":"image/workImage/cinemaTicket.png",
            "name":t("CinemaTicket")
        },
        {
            "link":"https://mcqueen5258.github.io/2020works/Moments/",
            "img":"image/workImage/Moments.png",
            "name":t("Moments")
        },
        {
            "link":"https://mcqueen5258.github.io/2020works/Car-rental-website/",
            "img":"image/workImage/CarRental.png",
            "name":t("CarRentalWebsite")
        },
        {
            "link":"https://mcqueen5258.github.io/2020works/CN27/",
            "img":"image/workImage/KIDOBANK.png",
            "name":t("KIDO_BANK")
        }
    ]
        let s_items = items.map(function(obj, index) {
            return <Work key={index} href={obj.link} name={obj.name} img={obj.img} />
        })
        return (
            <div className="contents">
                {s_items}
            </div>

        );
    }



