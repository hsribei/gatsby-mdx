module.exports = {
  siteMetadata: {
    title: `Gatsby MDX Kitchen Sink`
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        defaultLayout: require.resolve(
          "./src/components/default-page-layout.js"
        ),
        mdPlugins: [require("remark-toc")],
        gatsbyRemarkPlugins: ["gatsby-remark-prismjs"]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/`
      }
    }
  ]
};
