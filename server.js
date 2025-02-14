require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const TeacherRoutes = require("./routes/TeacherRoutes");
const assistantRoutes = require("./routes/AssistantTeacherRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", TeacherRoutes);
app.use('/api', assistantRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});