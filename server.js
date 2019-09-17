const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors')
const app = express()


connectDB()

app.use(express.json({ extended: false}))
app.use(cors())

/* app.get('/', (req, res) => res.send('API Running')); */
app.use('/setupmeeting/form', require("./routes/setupmeeting/form"))
app.use('/setupmeeting/meeting', require("./routes/setupmeeting/meeting"))



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{console.log(`server started on port ${PORT}`)} )
