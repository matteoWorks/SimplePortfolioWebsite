import React from 'react';

import data from '../variables.json';

import Animation_unblur from '../animations/animation_unblur.js';

function Intro() {
    // obtaining information relevant to this section from the "../variables.json" file:
    const variableName = data.name;
    const variableOccupation = data.occupation;
    const variableContacts = data.contacts;

    // defining a timer for the animations of this section:
    let time = 0;

    // defining the animated text of this section by building and assembling each lines that composes it:
    const introText = [];
    const textLinesBiggerTextClassName = "text-3xl sm:text-5xl md:text-5xl";
    const textLines = [<>Hello I'm <span className={textLinesBiggerTextClassName}>{variableName}</span>.</>,        // FEEL FREE TO EDIT BASED ON YOUR PREFERENCES
                        <>I'm a <span className={textLinesBiggerTextClassName}>{variableOccupation}</span>.</>,
                        <>Feel free to <span className={textLinesBiggerTextClassName}>look around</span> and get to <span className={textLinesBiggerTextClassName}>know me</span>.</>,
                        <>You can <span className={textLinesBiggerTextClassName}>contact me</span> here:</>
                    ];
    const textLinesClassName = "mx-4 mb-5 flex";
    for (let i = 0; i < textLines.length; i++) {
        const textLine = textLines[i];
        time = 1250*i;
        introText.push(
            <p className={textLinesClassName}><Animation_unblur start={time} delay={125}>{textLine}</Animation_unblur></p>
        )
    }

    time += 500;

    // defining the contact buttons by using the information present in "../variables.json":
    const contacts = [];
    const contactsClassName = "transform hover:scale-125 transition duration-500 bg-transparent saturate-100 hover:saturate-150 opacity-80 hover:opacity-100 rounded-2xl";
    for (let i = 0; i < variableContacts.length; i++) {
        const contact = variableContacts[i];
        const contactLink = contact.contactLink;
        const contactName = contact.contactName;
        const contactLogo = require(`../assets/${contact.contactLogo}`);
        time += 500;
        contacts.push(
            <Animation_unblur start={time} delay={50}><button className={contactsClassName}><a href={contactLink} target="_blank"><img src={contactLogo} alt={contactName} title={contactName} type="image/png" width="48" height="48" /></a></button></Animation_unblur>
        )
    }

    // assembling the animated text and the contact buttons:
    return (
        <div id="intro" className="text-xl sm:text-3xl md:text-3xl font-semibold tracking-wide sm:tracking-wider md:tracking-wider text-center subpixel-antialiased flex items-center justify-center h-screen flex-col">
            {introText}
            <p className="mx-4 mt-4 space-x-10 sm:space-x-16 sm:space-x-16 flex">
                {contacts}
            </p>
        </div>
    )
}

export default Intro;