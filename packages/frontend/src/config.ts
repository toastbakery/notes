const config = {
  // Backend config
  // Frontend config
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: import.meta.env.VITE_REGION,
    BUCKET: import.meta.env.VITE_BUCKET,
  },
  apiGateway: {
    REGION: import.meta.env.VITE_REGION,
    URL: import.meta.env.VITE_API_URL,
  },
  cognito: {
    REGION: import.meta.env.VITE_REGION,
    USER_POOL_ID: import.meta.env.VITE_USER_POOL_ID,
    APP_CLIENT_ID: import.meta.env.VITE_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: import.meta.env.VITE_IDENTITY_POOL_ID,
  },
  STRIPE_KEY:
    "pk_test_51NhAsrKoxUpXY6XrFlrbvDChsYMrM5kSzQCY8mveonR4iIAZQTzE4PAWViWpJDfa12CT13nZ7uv2bUA6dHnDBOZ800E2x4oShm",
};

export default config;
