export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.MONGODB_STORE_URI,
    port: parseInt(process.env.MONGODB_STORE_URI, 10) || 5432,
  },
});
