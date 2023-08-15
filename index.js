const express = require("express");

require("dotenv").config();

const { dbConnect } = require("./shared/db");
const studentRoute = require("./routes/student");
const mentorRoute = require("./routes/mentor");
const assignMentortoStudent = require("./routes/assignMentortoStudent");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Working fine...");
});
app.use("/student", studentRoute);
app.use("/mentor", mentorRoute);
app.use("/assignmentor", assignMentortoStudent);

app.listen( 3000, async (err) => {
  await dbConnect();
  console.log("The Server is running in the Port 3000");
  if (err) {
    console.log(err, "error in starting server");
  }
});