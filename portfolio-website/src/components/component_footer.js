import React from 'react';

function Footer() {
    const protonmailLogo = require(`../assets/footerAssets/footer_logo_protonmail.png`);
    const linkedinLogo = require(`../assets/footerAssets/footer_logo_linkedin.png`);
    const githubLogo = require(`../assets/footerAssets/footer_logo_github_night.png`);

    const contactsClassName = "transform hover:scale-125 transition duration-500 bg-transparent saturate-100 hover:saturate-150 opacity-80 hover:opacity-100 pl-2"

    return (
        <div id="footer" className="m-8 mt-32 text-center text-gray-100">
            <p>
                Professional Experience Portfolio single-page Website.
                Link to Repository:
                <button className={contactsClassName}><a href="https://github.com/ShameIRL/PortfolioWebsite" target="_blank"><img src={githubLogo} alt="GitHub" type="image/png" width="14" height="14" /></a></button>
            </p>
            <p>
                © 2024 Matteo Baggio. Contact me:
                <button className={contactsClassName}><a href="mailto:morningape@protonmail.com" target="_blank"><img src={protonmailLogo} alt="Protonmail" type="image/png" width="14" height="14" /></a></button>
                <button className={contactsClassName}><a href="https://it.linkedin.com/in/baggio-matteo" target="_blank"><img src={linkedinLogo} alt="LinkedIn" type="image/png" width="14" height="14" /></a></button>
                <button className={contactsClassName}><a href="https://github.com/ShameIRL" target="_blank"><img src={githubLogo} alt="GitHub" type="image/png" width="14" height="14" /></a></button>
            </p>
        </div>
    )
}

export default Footer;