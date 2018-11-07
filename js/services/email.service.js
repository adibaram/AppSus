
import utilService from './util.service.js';
import storageService from './storage.service.js';
// var emails = [];
const EMAILS_KEY = 'emails';

export default {
    query,
    getEmailById
}


// export const emailService = {
//   query,
//   getEmailById
// }


function query() {
  // var emails = storageService.load(EMAILS_KEY);
  var emails;
  // debugger;
  if (!emails) {
      emails = generateEmails();
      storageService.store(EMAILS_KEY, emails)
  }
  var emailsDB = emails;
  console.log('emailsDB', emailsDB)
  return Promise.resolve(emailsDB);
}

function getEmailById(emailId) {
  var theEmail = EmailsDB.find(email => email.id === emailId);
  return Promise.resolve(theEmail)
}


function generateEmails() {
  var emailsDB = []
  
  for (let index = 0; index < 20; index++) {
      var email = createEmail()
      emailsDB.push(email)

  }
//   var emailsDB = [{subject: '', body: '', isRead: false, sentAt(timestamp)}]
  
  return emailsDB;
}

function createEmail() {
    var email = {
                id: utilService.makeId(),
                subject: utilService.makeLorem(4),
                body: utilService.makeLorem(25),
                isRead: false,
                sentAt: Date.now(),
    }
    return email;
}






