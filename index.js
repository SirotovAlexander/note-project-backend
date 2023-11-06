const { getAll, findByID, addContact, deleteContact } = require("./db/app");
// const readline = require("node:readline");
// const { stdin: input, stdout: output } = require("node:process");

// const rl = readline.createInterface({ input, output });

// rl.question("Who are you ", (answer) => {
//   // TODO: Log the answer in a database
//   if (answer === "fagot") {
//     console.log("DOLBAYOB");
//   } else {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
//   }

//   rl.close();
// });

// getAll();
// findByID("AeHIrLTr6JkxGE6SN-0Rw");
// addContact("Slavik", "dolbayeb@gmail.com", "0000000000");
deleteContact("AeHIrLTr6JkxGE6SN-0Rw");
