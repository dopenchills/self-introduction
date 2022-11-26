import type { GatsbyConfig } from "gatsby";
import * as dotenv from 'dotenv' 
dotenv.config()


const config: GatsbyConfig = {
  siteMetadata: {
    title: `Ryo Sakaguchi`,
    description: `はじめまして。坂口 諒です。`,
    siteUrl: `https://work.ryo-sakaguchi.com`,
    twitterUsername: `@dopenchills`,
    image: `/images/icon.png`,
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
        "icon": "src/images/icon.svg"
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            }
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
  ]
};

export default config;
