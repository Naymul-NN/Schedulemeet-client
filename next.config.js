/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co", "thumbor.forbes.com", "img.freepik.com", "lh3.googleusercontent.com", "www.calendar.com"],
  },
  env:{
    NEXT_STRIPE_PK:process.env.STRIPE_PK,
    NEXT_DB_URL:process.env.DB_URL,
    NEXT_API_KEY:process.env.API_KEY,
    NEXT_AUTH_DOMAIN:process.env.AUTH_DOMAIN,
    NEXT_PROJECT_ID:process.env.PROJECT_ID,
    NEXT_STORAGE_BUCKET:process.env.STORAGE_BUCKET,
    NEXT_MESSAGING_SENDER_ID:process.env.MESSAGING_SENDER_ID,
    NEXT_APP_ID:process.env.APP_ID,
  }
};
module.exports = nextConfig;
