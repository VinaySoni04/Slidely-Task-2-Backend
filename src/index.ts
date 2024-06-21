import express, { Request, Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';

const app = express();
const PORT = 3000;

app.use(express.json());

const dbFilePath = path.join(__dirname, 'db.json');

interface Submission {
  name: string;
  email: string;
  phone: string;
  github_link: string;
  stopwatch_time: string;
}

let submissions: Submission[] = [];

// Load existing submissions from db.json if it exists
if (fs.existsSync(dbFilePath)) {
  const data = fs.readFileSync(dbFilePath, 'utf-8');
  submissions = JSON.parse(data);
}

// Endpoint to check server status
app.get('/ping', (req: Request, res: Response) => {
  res.send(true);
});

// Endpoint to submit a new entry
app.post('/submit', (req: Request, res: Response) => {
  const { name, email, phone, github_link, stopwatch_time } = req.body;
  const newSubmission: Submission = { name, email, phone, github_link, stopwatch_time };
  submissions.push(newSubmission);

  fs.writeFileSync(dbFilePath, JSON.stringify(submissions, null, 2));

  res.status(201).send('Submission saved.');
});

// Endpoint to read a specific entry by index
app.get('/readAll', (req: Request, res: Response) => {
  const index = parseInt(req.query.index as string, 10);
  if (submissions.length > 0) {
    res.json(submissions);
  } else {
    res.status(404).send('Submission not found.');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
