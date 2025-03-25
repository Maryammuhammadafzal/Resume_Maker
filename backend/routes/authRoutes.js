import express from 'express'
import passport from 'passport'
import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';
import dotenv from 'dotenv';

dotenv.config()

const router = express.Router();

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));



// Configure LinkedIn Strategy
passport.use(new LinkedInStrategy({
    clientID: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    callbackURL: `${process.env.BACKEND_URL}/auth/linkedin/callback`,
    scope: ['r_liteprofile']  
//     scope: ['r_emailaddress', 'r_liteprofile']
}, (accessToken, refreshToken, profile, done) => {
    console.log('LinkedIn Profile:', profile);
    return done(null, profile);
}));

// Start login with LinkedIn
router.get('/linkedin', passport.authenticate('linkedin'));

// Handle callback
router.get('/linkedin/callback',
    passport.authenticate('linkedin', {
        failureRedirect: `${process.env.FRONTEND_URL}/`,
        session: false
    }),
    (req, res) => {
        res.redirect(`${process.env.FRONTEND_URL}/?user=${encodeURIComponent(JSON.stringify(req.user))}`);
    }
);

export default router;
