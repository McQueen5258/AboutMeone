import React from 'react';
import './Skills.css';

import Skill from './Skill/Skill';
import skillsData from './skills-data.json';
import { useTranslation } from 'react-i18next';
import '../../i18n';

function Skills() {
    const [t, i18n] = useTranslation();

    console.log(skillsData[Object.keys(skillsData)[0]].title);
    let s_skills = Object.keys(skillsData).map(function (obj, index) {
        return (
            <Skill key={index.toString()} title={skillsData[obj].title} progress={skillsData[obj].progress} />
        )
    });
    return (
        <div className="skills">
            <h1 className='skills-title'>{t('My Skills')}</h1>
            <div className='skill-tickets'>
                {s_skills}
            </div>
        </div>
    );
}
export default Skills;