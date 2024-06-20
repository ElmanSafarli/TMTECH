import favicon from "./extensions/TMTECH.jpg";

const config = {
    head: {
        favicon: favicon
    },
    translations: {
        en: {
            "app.components.LeftMenu.navbrand.title": "TMTECH Admin",
            "Auth.form.welcome.title": "Welcome to TMTECH!",
            "Auth.form.welcome.subtitle": "Log in to your TMTECH account",
            "HomePage.welcome.congrats.content": "You are logged in as the first administrator. To discover the powerful features provided by TMTECH,",
            "Settings.application.strapi-version": "TMTECH version",
            "Settings.application.strapiVersion": "TMTECH version",
            "Settings.permissions.users.listview.header.subtitle": "All the users who have access to the TMTECH admin panel",
            "admin.pages.MarketPlacePage.offline.subtitle": "You need to be connected to the Internet to access TMTECH Market.",
            "app.components.BlockLink.blog.content": "Read the latest news about TMTECH and the ecosystem.",
            "app.components.BlockLink.cloud": "TMTECH Cloud",
            "app.components.HomePage.welcomeBlock.content": "Congrats! You are logged as the first administrator. To discover the powerful features provided by TMTECH, we recommend you to create your first Content type!",
            "app.components.HomePage.welcomeBlock.content.again": "We hope you are making progress on your project! Feel free to read the latest news about TMTECH. We are giving our best to improve the product based on your feedback.",
            "app.components.MarketplaceBanner": "Discover plugins built by the community, and many more awesome things to kickstart your project, on TMTECH Marketplace.",
            "app.components.MarketplaceBanner.image.alt": "A TMTECH rocket logo",
            "app.components.NpsSurvey.banner-title": "How likely are you to recommend TMTECH to a friend or colleague?",
        },
    }
}

const bootstrap = (app) => {
    console.log(app)
}


export default {
    config,
    bootstrap
}