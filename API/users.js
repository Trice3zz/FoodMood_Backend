import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { authenticateToken } from '../Middleware/middleware.js';
import { createUser, findUsername } from '../db/queries/users.js';
// import { saveUserMood, getMoodCounts } from '../db/queries/mood.js';
import { getSavedByUserId } from '../db/queries/userHistory.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'FoodMood2025';

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try{
        const hashed = await bcrypt.hash(password, 10)
        const user = await createUser(username, hashed)
        res.status(201).json({message: 'User registered', user})
    }catch(error){
        if(error.code === '23505'){
            return res.status(409).json({error: 'Username already taken'})
        }else{
            res.status(500).json({error: 'Server error for registration'})
        }
    }
});


router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try{
        const user = await findUsername(username)
        if(!user){
            return res.status(401).json({error: 'Wrong information'})
        }

        const match = await bcrypt.compare(password, user.password)
        if(!match){
            return res.status(401).json({error: 'Wrong information'})
        }
        
        const token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET) 
            res.status(200).json({token})
        }catch(error){
            console.log('Login error', error)
            res.status(500).json({error: 'Server error for login'})
        }
    });


// router.get('/account', authenticateToken, async (req, res) => {
//     const { id } = req.user;

//     try{
//         const savedItems = await getSavedByUserId(id)
//         res.status(200).json({saved: savedItems})
//     }catch(error){
//         res.status(500).json({error: 'Failed to fetch saved items'})
//     }
// });


// router.post('/account/mood/track', verifyToken, async(req, res) => {
//     const { mood_id } = req.body;
//     const user_id = req.user.id;

//     try{
//         await saveUserMood(user_id, mood_id)
//         res.status(201).json({message: 'Mood tracked'})
//     }catch(error){
//         console.error('Failed to track mood', error)
//         res.status(500).json({erro: 'Could not track mood'})
//     }
// });


// router.get('/account/mood/stats', verifyToken, async (req, res) => {
//     const userId = req.user.id;

//     try{
//         const stats = await getMoodCounts(userId)
//         res.status(200).json({data: stats})
//     }catch(error){
//         console.error('Failed to fetch mood:', error)
//         res.status(500).json({error: 'Could not get mood stats'})
//     }
// })
export default router; 