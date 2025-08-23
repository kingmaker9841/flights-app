import { amadeusConfig } from "../config/constants";

/**
 * Retrieves an access token from the Amadeus API using client credentials
 * @async
 * @function getAccessTokenFromAmadeus
 * @returns {Promise<Object|null>} Returns a promise that resolves to:
 * - Object with properties:
 *   - type: "amadeusOAuth2Token"
 *   - username: string
 *   - application_name: string
 *   - client_id: string
 *   - token_type: "Bearer"
 *   - access_token: string
 *   - expires_in: number (seconds until expiration)
 *   - state: "approved"
 *   - scope: string (empty string if no specific scope)
 * - null if the request fails
 * @throws {Error} May throw fetch-related errors
 * @example
 * const tokenData = await getAccessTokenFromAmadeus();
 * if (tokenData) {
 *   console.log(`Access token: ${tokenData.access_token}`);
 *   console.log(`Expires in: ${tokenData.expires_in} seconds`);
 * }
 */
export const getAccessTokenFromAmadeus = async () => {
  const baseUrl = amadeusConfig.baseUrl;
  const accessTokenUrl = amadeusConfig.accessTokenUrl;
  const client_id = amadeusConfig.apiKey;
  const client_secret = amadeusConfig.secret;
  const grant_type = amadeusConfig.grantType;

  const url = new URL(accessTokenUrl, baseUrl);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: grant_type,
      client_id: client_id,
      client_secret: client_secret,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch token");
  }

  const data = await response.json();

  return data;
};
