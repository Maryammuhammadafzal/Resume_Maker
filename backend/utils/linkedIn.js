import axios from "axios";

export const getAccessToken = async (code, redirectUri) => {
  try {
    const response = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', null, {
      params: {
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        client_id: process.env.LINKEDIN_CLIENT_ID,
        client_secret: process.env.LINKEDIN_CLIENT_SECRET,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error.response?.data || error.message);
    throw new Error('Failed to get LinkedIn access token');
  }
};

export const getUserProfile = async (accessToken) => {
  try {
    const response = await axios.get('https://api.linkedin.com/v2/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error.response?.data || error.message);
    throw new Error('Failed to get LinkedIn profile');
  }
};

export const getUserEmail = async (accessToken) => {
  try {
    const response = await axios.get('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data.elements[0]['handle~'].emailAddress;
  } catch (error) {
    console.error('Error fetching user email:', error.response?.data || error.message);
    throw new Error('Failed to get LinkedIn email');
  }
};

