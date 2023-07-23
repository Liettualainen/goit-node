const fs = require('fs').promises;
const path = require('node:path');

const contactsPath = path.join('./db/', "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}




// function listContacts() {
//   fs.readFile(`${contactsPath}`)
//     .then(data => console.log(JSON.parse(data)))
//   .catch(err => console.log(err.message));
// }

//   // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
// function getContactById(id) {
//   const contactId = listContacts();
//   const result = contacts.find(item => item.id === id);
//   return result;
// }
// function removeContact(contactId) {
//   fs.unlink('./db/contacts.json', "utf-8")
//   .then(data => console.log(data))
//   .catch(err => console.log(err.message));
//   // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
// }
// function addContact(name, email, phone) {
//   fs.appendFile('./db/contacts.json', "\nyoba seyo")


//   // ...твій код. Повертає об'єкт доданого контакту. 
// }



const contacts = {
    listContacts
};

module.exports = contacts;


