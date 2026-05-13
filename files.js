const fs = require('node:fs');
fs.writeFile("C:\\Users\\Admin\\Desktop\\node.txt", "Add kr rhe hai", err => {
  if (err) {
    console.error(err);
  } else {
    console.log("Ho gya bc")
  }
});


fs.readFile(
  "C:\\Users\\Admin\\Desktop\\node.txt",
  "utf8",
  (err, data) => {
    console.log(data);
  }
);