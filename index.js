// const argv = require('yargs').argv;
const argv = require('yargs').arg;
import contacts from './contacts.cjs'
const { listContacts } = contacts;


// TODO: рефакторити
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
          const allContacts = await listContacts();
          return console.log(allContacts);
      break;

    case 'get':
      // ... id
      break;

    case 'add':
      // ... name email phone
      break;

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);













// const { listContacts } = contacts;
// // const { getContactById } = contacts;
  
// console.log("welcome  to my sweet node.js")
 
// console.log(listContacts())
// // console.log(getContactById("AeHIrLTr6JkxGE6SN-0Rw"))

 
