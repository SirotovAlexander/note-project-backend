const readline = require("node:readline");
const colors = require("colors");
const { getAll, findByID, addContact, deleteContact } = require("./db/app");

const { stdin: input, stdout: output } = require("node:process");
const rl = readline.createInterface({ input, output });

const contactsBookFunction = async () => {
  rl.question(
    colors.red("Hello in your contat-book. What operation do you want to do? "),
    async (answer) => {
      switch (answer) {
        case "get all":
          const list = await getAll();
          console.log(colors.yellow(list));
          rl.close();
          break;

        case "get by id":
          rl.question(colors.red("Please enter id: "), async (answer) => {
            const contact = await findByID(answer);
            rl.close();
          });
          break;

        case "delete contact":
          rl.question(
            colors.red("Please enter id contact which you want to remove: "),
            async (answer) => {
              const contact = await deleteContact(answer);
              rl.close();
            }
          );
          break;

        case "add contact":
          rl.question(
            colors.red("Please enter name, email and phone: "),
            async (answer) => {
              const contact = await addContact(answer);
              rl.close();
            }
          );
          break;

        default:
          contactsBookFunction();
      }
    }
  );
};

contactsBookFunction();
