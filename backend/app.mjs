import express from 'express'
import cors from 'cors'
import session from 'express-session'
import passport from 'passport'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'

dotenv.config();

const app = express();

// Middlewares
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json());

// Session setup
app.use(session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
