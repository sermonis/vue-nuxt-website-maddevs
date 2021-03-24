const dotenv = require('dotenv');
dotenv.config();

// Amo CRM
const AMOCRM_SECRET = process.env.NODE_AMOCRM_SECRET;
const AMOCRM_ID = process.env.NODE_AMOCRM_ID;
const AMOCRM_URL = process.env.NODE_AMOCRM_URL;
const AMOCRM_REDIRECT_URL = process.env.NODE_AMOCRM_REDIRECT_URL;
const AMOCRM_DESCRIPTION_FIELD_ID = process.env.NODE_AMOCRM_DESCRIPTION_FIELD_ID;

// Mongo
const DATABASE_URL = process.env.NODE_MONGO_URL;

// Send pulse
const SENDPULSE_API_KEY = process.env.NODE_SENDPULSE_API_KEY;
const SENDPULSE_API_USER_ID = process.env.NODE_SENDPULSE_API_USER_ID;
const SENDPULSE_TOKEN_STORAGE = '/tmp/';

// Sentry
const SENTRY_DSN = process.env.NODE_SENTRY_DSN;

// Other
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  AMOCRM_SECRET,
  AMOCRM_ID,
  AMOCRM_URL,
  AMOCRM_REDIRECT_URL,
  AMOCRM_DESCRIPTION_FIELD_ID,
  DATABASE_URL,
  SENDPULSE_API_USER_ID,
  SENDPULSE_API_KEY,
  SENDPULSE_TOKEN_STORAGE,
  SENTRY_DSN,
  NODE_ENV
};
