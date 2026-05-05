const fs = require("fs");

const FILE = "data.txt";

const studentInfo = `Name: Yeswa Preetam Reddy
Roll No: 135
Branch: IT
Year: 2nd
Email: yeswapr2004@gmail.com`;

fs.writeFile(FILE, studentInfo, (err) => {
  if (err) throw err;
  console.log("1. File created and student details written.\n");

  fs.readFile(FILE, "utf8", (err, data) => {
    if (err) throw err;
    console.log("2. File content:");
    console.log("---");
    console.log(data);
    console.log("---\n");

    const extra = "\nPhone: 9361707771\nCity: Hyderabad";

    fs.appendFile(FILE, extra, (err) => {
      if (err) throw err;
      console.log("3. Data appended successfully.\n");

      fs.readFile(FILE, "utf8", (err, updated) => {
        if (err) throw err;
        console.log("4. Updated file content:");
        console.log("---");
        console.log(updated);
        console.log("---");
      });
    });
  });
});