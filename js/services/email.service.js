
import utilService from './util.service.js';
import storageService from './storage.service.js';
// var emails = [];
const EMAILS_KEY = 'emails';

export default {
    query,
    getEmailById,
    saveEmail,
    deleteEmail
}

// var emailsDB = []; 
// export const emailService = {
//   query,
//   getEmailById
// }


function query() {
    return storageService.load(EMAILS_KEY)
        .then(emails => {
            if (!emails) {
                emails = generateEmails();
                storageService.store(EMAILS_KEY, emails)
            }
            return emails;
        })
}

function getEmailById(emailId) {
    return storageService.load(EMAILS_KEY)
        .then(emails => {
            console.log(emails)
            return emails.find(email => email.id === emailId);
        });
}


function generateEmails() {
    var fakeEmails = []

    for (let index = 0; index < 20; index++) {
        var email = createEmail()
        fakeEmails.push(email)

    }
    //   var emailsDB = [{subject: '', body: '', isRead: false, sentAt(timestamp)}]

    return fakeEmails;
}

function createEmail() {
    var email = {
        id: utilService.makeId(),
        subject: utilService.makeLorem(4),
        body: utilService.makeLorem(4),
        isRead: false,
        sentAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
    }
    return email;
}


function saveEmail(email) {
    return storageService.load(EMAILS_KEY)
        .then(emails => {
            // Update
            if (email.id) {
                var emailIdx = emails.findIndex(currEmail => currEmail.id === email.id)
                emails.splice(emailIdx, 1, email);
            } else {
                // Add
                email.id = utilService.makeId();
                console.log('emails,', emails);
                emails.unshift(email);
                console.log('emails,', emails);
            }
            return storageService.store(EMAILS_KEY, emails);
        });
}

function deleteEmail(emailId) {
    return storageService.load(EMAILS_KEY)
        .then(emails => {
            var emailIdx = emails.findIndex(email => email.id === emailId);
            emails.splice(emailIdx, 1);
            return storageService.store(EMAILS_KEY, emails);
        })
}





