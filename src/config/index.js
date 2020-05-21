module.exports = {

    author: "onoyama rikuo",
    siteTitle: "oEr.",
    siteShortTitle: "oEr.", // Used as logo text in header, footer, and splash screen
    siteDescription: "A modern one-page portfolio with a clean yet expressive design.",
    siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
    siteLanguage: "ja_JP",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Github",
            url: "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal"
        },
    ],
  
    navLinks: {
        menu: [
            {
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Projects",
                url: "/#projects",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy"
        },
    ]
}