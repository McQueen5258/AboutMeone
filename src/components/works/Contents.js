import React, { Component, lazy} from 'react';
// import Work from './work/work';
import './Contents.css';
const Work = lazy(() => import('./work/work'));

let items = [
    {
        "link":"https://mcqueen5258.github.io/flowers/",
        "img":"image/workImage/flower.png",
        "name":"Flowers"
    },
    {
        "link":"https://mcqueen5258.github.io/examination/forOuYang/assignment/",
        "img":"image/workImage/assignment.png",
        "name":"Assignment"
    },
    {
        "link":"https://mcqueen5258.github.io/2020works/cinemaTicket",
        "img":"image/workImage/cinemaTicket.png",
        "name":"Cinema Ticket"
    },
    {
        "link":"https://mcqueen5258.github.io/2020works/Moments/",
        "img":"image/workImage/Moments.png",
        "name":"Moments"
    },
    {
        "link":"https://mcqueen5258.github.io/2020works/Car-rental-website/",
        "img":"image/workImage/CarRental.png",
        "name":"Car rental website"
    },
    {
        "link":"https://mcqueen5258.github.io/2020works/CN27/",
        "img":"image/workImage/KIDOBANK.png",
        "name":"KIDO BANK"
    }
]
// console.log(skillsData[Object.keys(skillsData)[0]].title);
// let s_skills = Object.keys(skillsData).map(function(obj, index){
//     return(
//         <Skill key={index.toString()}title={skillsData[obj].title} progress={skillsData[obj].progress}/>
//     )
// });
export default class Contents extends Component {
    render() {
        let s_items = items.map(function(obj, index) {
            return <Work key={index} href={obj.link} name={obj.name} img={obj.img} />
        })
        return (
            <div className="contents">
                {s_items}
            </div>

        );
    }
}



