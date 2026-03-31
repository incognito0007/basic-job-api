const fs = require("fs");

const companies = [
  "Google",
  "Amazon",
  "Microsoft",
  "Flipkart",
  "Adobe",
  "Infosys",
];
const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "DevOps Engineer",
];
const locations = ["Bangalore", "Pune", "Hyderabad", "Delhi", "Mumbai"];
const experienceLevels = ["0-2 years", "2-4 years", "4-6 years"];
const types = ["Full Time", "Part Time", "Internship"];

let jobs = [];

for (let i = 1; i <= 500; i++) {
  jobs.push({
    id: i,
    company: companies[Math.floor(Math.random() * companies.length)],
    role: roles[Math.floor(Math.random() * roles.length)],
    location: locations[Math.floor(Math.random() * locations.length)],
    experience:
      experienceLevels[Math.floor(Math.random() * experienceLevels.length)],
    salary: `${Math.floor(Math.random() * 20) + 5} LPA`,
    type: types[Math.floor(Math.random() * types.length)],
    postedDaysAgo: Math.floor(Math.random() * 30),
  });
}

fs.writeFileSync("./data/jobs.json", JSON.stringify(jobs, null, 2));

console.log("✅ 500 jobs generated!");
