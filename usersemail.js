
//Get a list of mailbox names
//Get a list of emails

let appData = {
    name: 'Outlook',
    mailboxes: {
        inbox : [
            {from: 'whentowork', fwd: 'New aquatic', content: 'new students in the facility.', status: 'receive'},
            {from: 'fullstack', fwd: 'assignment graded', content:'Your assignment', status: 'receive'},
            {from: 'github-classroom', fwd: 'github-classroom invited', content: 'someone invited you to his repo', status: 'receive'},
            ],
    
        junkEmail : {},
        drafts : {},
        sentItems : {},
        deletedItems : {},
        archive : {},
        notes: {},
    },
    

    }

    for (const iterator in appData.mailboxes) {
        console.log(iterator)
    }

    console.log(appData.mailboxes.inbox)
//Get the text of the second email in the visible list
console.log(appData.mailboxes.inbox[1].content);


//Mark an email as sent
appData.mailboxes.inbox[0].status = 'sent';

console.log(appData.mailboxes.inbox[0].status);

//Add a draft email to the drafts mailbox

appData.mailboxes.drafts = [
     {to: 'fullstack', fwd: 'assignment graded', content:'Your assignment', status: 'receive'}
 ]; 

console.log(appData.mailboxes.drafts);

console.log(appData);