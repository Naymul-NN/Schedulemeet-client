/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co", "thumbor.forbes.com", "img.freepik.com", "lh3.googleusercontent.com", "www.calendar.com"],
  },
  env:{
    NEXT_STRIPE_PK:process.env.STRIPE_PK
  }
};
module.exports = nextConfig;
