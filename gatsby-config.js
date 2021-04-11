module.exports = {
    siteMetadata: {
        description: "Pagina personale per Giorgio Scattolini",
        locale: "it",
        title: "Giorgio Scattolini",
    },
    plugins: [
        {
            resolve: "@wkocjan/gatsby-theme-intro",
            options: {
                basePath: "/",
                contentPath: "content/",
                showThemeLogo: true,
                theme: "classic"
            }
        }
    ]
}
