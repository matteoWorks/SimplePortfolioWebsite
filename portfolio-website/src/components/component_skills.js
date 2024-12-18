import React from 'react';

import data from '../variables.json';

function Skills() {
    const githubLogo = require(`../assets/footerAssets/footer_logo_github_night.png`);

    // obtaining information relevant to this section from the "../variables.json" file:
    const variableSkillGroups = data.skillGroups;

    const transitionOutClassName = "transform hover:scale-95 duration-500";
    const transitionInClassName = "transform hover:scale-125 duration-500";

    // defining the skill groups by using the information present in "../variables.json":
    const skillsFirstCol = [];
    const skillsSecondCol = [];
    for (let i = 0; i < variableSkillGroups.length; i++) {
        const skillGroup = variableSkillGroups[i];
        const skillGroupColour = skillGroup.skillGroupColour;
        const skillGroupGradationLeft = skillGroup.skillGroupGradationLeft;
        const skillGroupGradationRight = skillGroup.skillGroupGradationRight;
        const skillGroupName = skillGroup.skillGroupName;
        const skillGroupSkills = skillGroup.skillGroupSkills;

        const colourClassName = "bg-clip-text text-transparent bg-gradient-to-r from-" + skillGroupColour + "-" + skillGroupGradationLeft + " to-" + skillGroupColour + "-" + skillGroupGradationRight;
        const skillClassName = "" + transitionInClassName;

        // defining the skill groups' skills by using the information present in "../variables.json":
        const skills = [];
        for (let j = 0; j < skillGroupSkills.length; j++) {
            const skill = skillGroupSkills[j];
            const skillName = skill.skillName;
            const skillLogo = require(`../assets/${skill.skillLogo}`);
            skills.push(
                <img className={skillClassName} src={skillLogo} alt={skillName} title={skillName} style={{ width: "36px", height: "36px", objectFit: "contain" }} />
            )
        }

        const skillBoxClassName = "backdrop-blur-sm bg-black/80 rounded-3xl px-4 py-4 sm:px-8 sm:py-5 md:px-8 md:py-5";
        const skillGroupClassName = "pl-2 sm:pl-0 text-left text-2xl md:text-3xl " + transitionOutClassName + " " + colourClassName;
        const skillsClassName = "my-4 grid";

        if (i < variableSkillGroups.length/2) {
            skillsFirstCol.push(
                <div id={skillGroupName+" Box"} className={skillBoxClassName}>
                    <p className={skillGroupClassName}>{skillGroupName}:</p>
                    <div className={skillsClassName} style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(36px, 1fr))', gap: '1.3rem', display: 'flex', justifyContent:'center', flexWrap:'wrap' }}>
                        {skills}
                    </div>
                </div>
            )
        }
        else {
            skillsSecondCol.push(
                <div id={skillGroupName+" Box"} className={skillBoxClassName}>
                    <p className={skillGroupClassName}>{skillGroupName}:</p>
                    <div className={skillsClassName} style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(36px, 1fr))', gap: '1.3rem', display: 'flex', justifyContent:'center', flexWrap:'wrap' }}>
                        {skills}
                    </div>
                </div>
            )
        }

    }

    return (
        <div id="skills" className="grid gap-4 items-start h-content font-semibold subpixel-antialiased min-w-ld max-w-6xl mx-4 sm:mx-4 md:mx-auto">

            <div id="skillTitle" className="mt-32 backdrop-blur-sm bg-black/70 rounded-3xl px-6 pt-4 pb-5 mx-auto">
                <p className="text-center text-3xl sm:text-4xl transition hover:scale-95 duration-500">Industry Skills:</p>
            </div>

            <div id="skillTable" className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start justify-center h-content font-semibold subpixel-antialiased max-w-4xl sm:mx-4 md:mx-auto">
                <div className="flex flex-col space-y-4">
                    {skillsFirstCol}
                </div>
                <div className="flex flex-col space-y-4">
                    {skillsSecondCol}
                </div>
            </div>
            
        </div>
    )
}

export default Skills;