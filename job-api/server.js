const express = require("express");
const cors = require("cors");
const jobs = require("./data/jobs.json");

const app = express();
app.use(cors());

const PORT = 5000;

// API with pagination
app.get("/api/jobs", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const start = (page - 1) * limit;
  const end = start + limit;

  const paginatedData = jobs.slice(start, end);

  res.json({
    total: jobs.length,
    page,
    totalPages: Math.ceil(jobs.length / limit),
    data: paginatedData,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
