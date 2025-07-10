import jwt from 'jsonwebtoken';

export function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];
    const decodedJWT = jwt.verify(token, process.env.JWT_SECRET);

    if (!authHeader) {
        return res.status(401).json({ error: 'Token required' });
    }

    try {
        req.user = decodedJWT;
        next();
    } catch (error) {
        return res.status(403).json({ error: 'Invalid or expired token' });
    }
}