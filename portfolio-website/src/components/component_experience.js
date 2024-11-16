import React from 'react';

import data from '../variables.json';

import Asset_Icon_GitHub from '../assets/logo_github_night.png';

function Experience() {
    // obtaining information relevant to this section from the "../variables.json" file:
    const variableExperiences = data.experiences;
    const variableEducations = data.educations;
    const variableCertificates = data.certificates;

    const sectionClassName = "text-left";
    const transitionOutClassName = "transform hover:scale-95 duration-500";
    const transitionInClassName = "transform hover:scale-125 duration-500";
    const transitionInRightClassName = "transform hover:origin-left hover:scale-125 duration-700";
    const detailsLRClassName = "flex justify-between text-xl";
    const datesDesktopClassName = "hidden sm:contents md:contents";
    const datesMobileClassName = "text-xl contents sm:hidden md:hidden";
    const companyClassName = "text-3xl " + transitionInRightClassName;
    const schoolClassName = "text-xl " + transitionInRightClassName;
    const skillsClassName = "my-4 grid";
    const skillClassName = "" + transitionInClassName;

    // defining the working experiences by using the information present in "../variables.json":
    const experiences = [];
    for (let i = 0; i < variableExperiences.length; i++) {
        const experience = variableExperiences[i];
        const experienceColour = experience.experienceColour;
        const experienceGradationLight = experience.experienceGradationLight;
        const experienceGradationDark = experience.experienceGradationDark;
        const experienceRole = experience.experienceRole;
        const experienceContract = experience.experienceContract;
        const experienceStartDate = experience.experienceStartDate;
        const experienceEndDate = experience.experienceEndDate;
        const experienceCompany = experience.experienceCompany;
        const experienceCompanyLink = experience.experienceCompanyLink;
        const experienceSkills = experience.experienceSkills;
        const experienceDescriptions = experience.experienceDescriptions;

        const colourClassName = "bg-clip-text text-transparent bg-gradient-to-r from-" + experienceColour + "-" + experienceGradationLight + " to-" + experienceColour + "-" + experienceGradationDark;
        const experienceGradationLightLink = experienceGradationLight - 200;
        const experienceGradationDarkLink = experienceGradationDark - 200;
        const colourLinkClassName = "hover:from-" + experienceColour + "-" + experienceGradationLightLink + " hover:to-" + experienceColour + "-" + experienceGradationDarkLink;

        // defining the working experience's skills by using the information present in "../variables.json":
        const skills = [];
        for (let i = 0; i < experienceSkills.length; i++) {
            const skill = experienceSkills[i];
            const skillName = skill.skillName;
            const skillLogo = require(`../assets/${skill.skillLogo}`);
            skills.push(
                <img className={skillClassName} src={skillLogo} alt={skillName} title={skillName} style={{ width: "36px", height: "36px", objectFit: "contain" }} />
            )
        }

        // defining the working experience's description by using the information present in "../variables.json":
        const descriptions = [];
        const descriptionClassName = "" + transitionOutClassName;
        for (let i = 0; i < experienceDescriptions.length; i++) {
            const description = experienceDescriptions[i];
            const descriptionContent = description.descriptionContent;
            descriptions.push(
                <li className={descriptionClassName}>{descriptionContent}</li>
            )
        }

        const roleClassName = "text-4xl " + colourClassName + " " + transitionOutClassName;
        const contractClassName = "" + transitionOutClassName;
        const companyLinkClassName = "" + colourClassName + " " + colourLinkClassName;
        const descriptionsClassName = "sm:text-lg md:text-lg tracking-tighter";
        const descriptionListClassName = "list-disc";

        experiences.push(
            <div id={experienceStartDate+" "+experienceRole+" "+experienceCompany} className={sectionClassName}>
                <h1 className={roleClassName}>{experienceRole}</h1>
                <p className={detailsLRClassName}><span className={contractClassName}>{experienceContract}</span><span className={datesDesktopClassName}>{experienceStartDate} - {experienceEndDate}</span></p>
                    <p className={datesMobileClassName}>{experienceStartDate} - {experienceEndDate}</p>
                <h2 className={companyClassName}>@<a href={experienceCompanyLink} target="_blank" rel="noreferrer" className={companyLinkClassName}>{experienceCompany}</a></h2>
                <div className={skillsClassName} style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(36px, 1fr))', gap: '1rem' }}>
                    {skills}
                </div>
                <p className={descriptionsClassName}>
                    <ul className={descriptionListClassName}>
                        {descriptions}
                    </ul>
                </p>
            </div>
        )

        if (i < variableExperiences.length-1) {
            experiences.push(
                <hr className="border-gray-300 my-8 mx-auto w-full max-w-2xl" />
            )
        }
    }

    // defining the educations by using the information present in "../variables.json":
    const educations = [];
    for (let i = 0; i < variableEducations.length; i++) {
        const education = variableEducations[i];
        const educationColour = education.educationColour;
        const educationGradationLight = education.educationGradationLight;
        const educationGradationDark = education.educationGradationDark;
        const educationName = education.educationName;
        const educationSchool = education.educationSchool;
        const educationSchoolLink = education.educationSchoolLink;
        const educationLocation = education.educationLocation;
        const educationStartYear = education.educationStartYear;
        const educationEndYear = education.educationEndYear;
        const educationSkills = education.educationSkills;
        
        const colourClassName = "bg-clip-text text-transparent bg-gradient-to-r from-" + educationColour + "-" + educationGradationLight + " to-" + educationColour + "-" + educationGradationDark;
        const educationGradationLightLink = educationGradationLight - 200;
        const educationGradationDarkLink = educationGradationDark - 200;
        const colourLinkClassName = "hover:from-" + educationColour + "-" + educationGradationLightLink + " hover:to-" + educationColour + "-" + educationGradationDarkLink;

        // defining the educations's skills by using the information present in "../variables.json":
        const skills = [];
        for (let i = 0; i < educationSkills.length; i++) {
            const skill = educationSkills[i];
            const skillName = skill.skillName;
            const skillLogo = require(`../assets/${skill.skillLogo}`);
            skills.push(
                <img className={skillClassName} src={skillLogo} alt={skillName} title={skillName} style={{ width: "36px", height: "36px", objectFit: "contain" }} />
            )
        }

        const educationNameClassName = "text-3xl " + colourClassName + " " + transitionOutClassName;
        const locationClassName = "" + transitionOutClassName;
        const schoolLinkClassName = "" + colourClassName + " " + colourLinkClassName;

        educations.push(
            <div id={educationStartYear+" "+educationName+" "+educationSchool} className={sectionClassName}>
                <h1 className={educationNameClassName}>{educationName}</h1>
                <p className={schoolClassName}>@<a href={educationSchoolLink} target="_blank" rel="noreferrer" className={schoolLinkClassName}>{educationSchool}</a></p>
                <p className={detailsLRClassName}><span className={locationClassName}>{educationLocation}</span><span className={datesDesktopClassName}>{educationStartYear} - {educationEndYear}</span></p>
                    <p className={datesMobileClassName}>{educationStartYear} - {educationEndYear}</p>
                <div className={skillsClassName} style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(36px, 1fr))', gap: '1rem' }}>
                    {skills}
                </div>
            </div>
        )
        
        if (i < variableEducations.length-1) {
            educations.push(
                <hr className="border-gray-300 my-8 mx-auto w-full max-w-2xl" />
            )
        }
    }

    // defining the certificates by using the information present in "../variables.json":
    const certificates = [];
    for (let i = 0; i < variableCertificates.length; i++) {
        const certificate = variableCertificates[i];
        const certificateColour = certificate.certificateColour;
        const certificateGradationLight = certificate.certificateGradationLight;
        const certificateGradationDark = certificate.certificateGradationDark;
        const certificateName = certificate.certificateName;
        const certificateLink = certificate.certificateLink;
        const certificateType = certificate.certificateType;
        const certificateCompany = certificate.certificateCompany;
        const certificateCompanyLink = certificate.certificateCompanyLink;
        const certificateDate = certificate.certificateDate;
        const certificateSkills = certificate.certificateSkills;

        const colourClassName = "bg-clip-text text-transparent bg-gradient-to-r from-" + certificateColour + "-" + certificateGradationLight + " to-" + certificateColour + "-" + certificateGradationDark;
        const certificateGradationLightLink = certificateGradationLight - 200;
        const certificateGradationDarkLink = certificateGradationDark - 200;
        const colourLinkClassName = "hover:from-" + certificateColour + "-" + certificateGradationLightLink + " hover:to-" + certificateColour + "-" + certificateGradationDarkLink;

        // defining the certificate's skills by using the information present in "../variables.json":
        const skills = [];
        for (let i = 0; i < certificateSkills.length; i++) {
            const skill = certificateSkills[i];
            const skillName = skill.skillName;
            const skillLogo = require(`../assets/${skill.skillLogo}`);
            skills.push(
                <img className={skillClassName} src={skillLogo} alt={skillName} title={skillName} style={{ width: "36px", height: "36px", objectFit: "contain" }} />
            )
        }

        const certificateNameClassName = "text-3xl " + colourClassName + " " + transitionOutClassName;
        const certificateNameLinkClassName = "text-3xl " + colourClassName + " " + transitionInRightClassName;
        const certificateTypeClassName = "" + transitionOutClassName;
        const schoolLinkClassName = "" + colourClassName + " " + colourLinkClassName;

        let certificateNameHTML = "";
        if (certificateLink == "_") 
            certificateNameHTML = <h1 className={certificateNameClassName}>{certificateName}</h1>;
        else
            certificateNameHTML = <h1 className={certificateNameLinkClassName}><a href={certificateLink} target="_blank" rel="noreferrer" className={schoolLinkClassName}>{certificateName}</a></h1>;

        if (!skills[0]) {
            certificates.push(
                <div id={certificateCompany+" "+certificateDate+" "+certificateName} className={sectionClassName}>
                    {certificateNameHTML}
                    <p className={certificateTypeClassName}>{certificateType}</p>
                    <p className={detailsLRClassName}><span className={schoolClassName}>@<a href={certificateCompanyLink} target="_blank" rel="noreferrer" className={schoolLinkClassName}>{certificateCompany}</a></span><span className={datesDesktopClassName}>{certificateDate}</span><span className={datesMobileClassName}>{certificateDate}</span></p>
                </div>
            )
        }

        else {
            certificates.push(
                <div id={certificateCompany+" "+certificateDate+" "+certificateName} className={sectionClassName}>
                    {certificateNameHTML}
                    <p className={certificateTypeClassName}>{certificateType}</p>
                    <p className={detailsLRClassName}><span className={schoolClassName}>@<a href={certificateCompanyLink} target="_blank" rel="noreferrer" className={schoolLinkClassName}>{certificateCompany}</a></span><span className={datesDesktopClassName}>{certificateDate}</span><span className={datesMobileClassName}>{certificateDate}</span></p>
                    <div className={skillsClassName} style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(36px, 1fr))', gap: '1rem' }}>
                        {skills}
                    </div>
                </div>
            )
        }

        if (i < variableCertificates.length-1) {
            certificates.push(
                <hr className="border-gray-300 my-8 mx-auto w-full max-w-2xl" />
            )
        }
    }

    const timelineClassName = "backdrop-blur-sm bg-black/80 rounded-3xl px-10 py-7 sm:px-14 sm:py-10 md:px-14 md:py-10";
    const experienceTimelineClassName = "order-1" + timelineClassName;

    // assembling the experiences, the educations and the certificates
    return (
        <div id="experience" className="grid gap-4 items-start justify-center h-content font-semibold subpixel-antialiased mb-16 min-w-ld max-w-6xl mx-4 sm:mx-4 md:mx-auto">

            <div id="experienceTitle" className="mt-32 backdrop-blur-sm bg-black/70 rounded-3xl px-6 pt-4 pb-5 mx-auto">
                <p className="text-center text-3xl sm:text-4xl transition hover:scale-95 duration-500">Experience & Education:</p>
            </div>
            <div id="experienceTable" className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start justify-center h-content font-semibold subpixel-antialiased max-w-5xl sm:mx-4 md:mx-auto">
                <div id="experienceTimeline" className={experienceTimelineClassName}>
                    {experiences}
                </div>
                <div className="flex flex-col space-y-4 order-2">
                    <div id="educationTimeline" className={timelineClassName}>
                        {educations}
                    </div>
                    <div id="certificatesTimeline" className={timelineClassName}>
                        {certificates}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;