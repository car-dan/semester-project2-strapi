module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '097a61a291d8285217f3e582708f2060'),
  },
});
