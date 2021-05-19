module.exports = {
  env: {
    DOMAIN: `${process.env.PROTOCOL}${process.env.NEXT_PUBLIC_VERCEL_URL}`,
  },
  future: {
    webpack5: true,
  },
}
