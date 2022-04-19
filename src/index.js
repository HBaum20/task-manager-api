const express = require('express');
const mongoose = require('mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
});

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});