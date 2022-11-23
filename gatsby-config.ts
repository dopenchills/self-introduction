import type { GatsbyConfig } from "gatsby";
import * as dotenv from 'dotenv' 
dotenv.config()


const config: GatsbyConfig = {
  siteMetadata: {
    title: `self-introduction`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    "react-transition-group",
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.ISPROD ? process.env.PROD_S3_BUCKET : process.env.STG_S3_BUCKET,
        protocol: "https",
        hostname: process.env.ISPROD ? process.env.PROD_HOSTNAME : process.env.STG_HOSTNAME
      },
    },
    "framer-motion",
  ]
};

export default config;
