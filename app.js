import express from 'express';
import usersRouter from './API/users.js';
import moodRouter from './API/mood.js';
import recipesRouter from '.recipes.js';
const app = express();


app.use(express.json());



app.use('/api/users', usersRouter);
app.use("/mood", moodRouter);
app.use("/recipes", recipesRouter);


app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Sorry! Something went wrong")
});

export default app; 



