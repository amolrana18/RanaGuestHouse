/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ranaguesthouse.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
