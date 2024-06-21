"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
const dbFilePath = path_1.default.join(__dirname, 'db.json');
let submissions = [];
if (fs_1.default.existsSync(dbFilePath)) {
    const data = fs_1.default.readFileSync(dbFilePath, 'utf-8');
    submissions = JSON.parse(data);
}
app.get('/ping', (req, res) => {
    res.send(true);
});
app.post('/submit', (req, res) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    const newSubmission = { name, email, phone, github_link, stopwatch_time };
    submissions.push(newSubmission);
    fs_1.default.writeFileSync(dbFilePath, JSON.stringify(submissions, null, 2));
    res.status(201).send('Submission saved.');
});
app.get('/read', (req, res) => {
    const index = parseInt(req.query.index, 10);
    if (index >= 0 && index < submissions.length) {
        res.json(submissions[index]);
    }
    else {
        res.status(404).send('Submission not found.');
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
