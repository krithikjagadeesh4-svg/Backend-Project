
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

const mongoUri = process.env.MONGODB_URI
if (!mongoUri) {
  console.error('Error: MONGODB_URI is not defined. Please add it to your .env file.')
  process.exit(1)
}

mongoose.connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB successfully.')
    const PORT = process.env.PORT || 3000
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server started on port ${PORT}`)
    })
  })
  .catch(error => {
    console.error('MongoDB connection error:', error.message)
    process.exit(1)
  })

const User = mongoose.model("User", {
  name: String,
  rollNo: String,
  department: String,
  phoneNo: String,
  yearOfStudy: String
})

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.post("/save", async (req, res) => {

  const user = new User({
    name: req.body.name,
    rollNo: req.body.rollNo,
    department: req.body.department,
    phoneNo: req.body.phoneNo,
    yearOfStudy: req.body.yearOfStudy
  })

  await user.save()

  res.send("Data saved")
})

