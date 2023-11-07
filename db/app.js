const fs = require("node:fs/promises");
const { nanoid } = require("nanoid");
const colors = require("colors");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

const getAll = async () => {
  const data = (await fs.readFile(contactsPath)).toString();
  const dataParse = JSON.parse(data);
  return dataParse;
};

const findByID = async (id) => {
  const data = await getAll();
  const findContact = data.find((contact) => contact.id === id);
  console.log(colors.yellow(findContact));
  return findContact;
};

const addContact = async (name, email, phone) => {
  const data = await getAll();
  const newContact = {
    id: nanoid(),
    name: name,
    email: email,
    phone: phone,
  };
  data.push(newContact);
  const newData = await fs.writeFile(
    contactsPath,
    JSON.stringify(data, null, 2)
  );
  console.log(
    `Contact ${newContact.name} added successfully`,
    colors.yellow(newContact)
  );
  return newContact;
};

const deleteContact = async (id) => {
  const data = await getAll();
  const findContact = data.findIndex((contact) => contact.id === id);
  if (findContact === -1) {
    return console.log(colors.red("This contact don't found. You ass whole!"));
  }

  data.splice(findContact, 1);
  const newData = await fs.writeFile(
    contactsPath,
    JSON.stringify(data, null, 2)
  );
  console.log(colors.green(`${id} delete success`));
  return newData;
};

module.exports = {
  getAll,
  findByID,
  addContact,
  deleteContact,
};
