import { getAccessToken, getUserProfile } from '../utils/linkedIn.js';

export const linkedinAuth = (req, res) => {
  console.log(req);
  console.log(res);
  const generateState = () => Math.random().toString(36).substring(7)
  
  const redirectUri = 'https://www.linkedin.com/oauth/v2/authorization';
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: process.env.LINKEDIN_CLIENT_ID,
    redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
    scope: 'r_liteprofile',
    // Generate state dynamically
 state : generateState(),

  });

  const linkedInAuthUrl = `${redirectUri}?${params.toString()}`;

  res.redirect(linkedInAuthUrl);
};


export const linkedinCallback = async (req, res) => {
  const code = req.query.code;
  console.log(code);
  

  try {
    const accessToken = await getAccessToken(code, process.env.LINKEDIN_REDIRECT_URI);
    const profileData = await getUserProfile(accessToken);
    // const email = await getUserEmail(accessToken);

    const user = {
      id: profileData.id,
      firstName: profileData.localizedFirstName,
      lastName: profileData.localizedLastName,
      email: email,
    };

    res.redirect(`${process.env.FRONTEND_URL}/success?user=${encodeURIComponent(JSON.stringify(user))}`);
  } catch (error) {
    console.error('LinkedIn callback error:', error.message);
    res.status(500).json({ error: 'LinkedIn Authentication Failed' });
  }
};