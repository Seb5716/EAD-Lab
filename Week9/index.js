const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let students = [
  { id: 1, name: "Vettel", age: 19 },
  { id: 2, name: "Alonso", age: 22 },
];

let nextId = 3;

app.get("/", (req, res) => {
  res.send("Student REST API is running!");
});

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ message: "Name and age are required" });
  }
  const student = { id: nextId++, name, age };
  students.push(student);
  res.status(201).json({ message: "Student created", student });
});

app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age } = req.body;
  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  if (name) student.name = name;
  if (age) student.age = age;
  res.json({ message: "Student updated", student });
});

app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex((s) => s.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }
  const removed = students.splice(index, 1);
  res.json({ message: "Student deleted", student: removed[0] });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});