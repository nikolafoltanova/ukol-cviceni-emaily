
/*
fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=all')
    .then(response => response.json())
    .then(data => {
        // zobrazit maily na strance
        const emails = document.getElementById('app');
        console.log(data)
        emails.innerHTML = data.emails
            .map((emails) => {
                return `
            <div class="email">
              <div class="from">${emails.recipient}</div>
              <div class="subject">${emails.subject}</div>
            </div>
          `
            })
            .join('');
    })
    .catch(error => {
        console.log('Je tam chyba', error);
    });
*/


// Získání nepřečtených emailů
fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread')
    .then(response => response.json())
    .then(data => {
        const unreadEmailsContainer = document.getElementById('unread');
        // jsou hodnoty pole? Array.isArray slouzi k tomu abychom to zjistili
        if (Array.isArray(data.emails)) {
            const unreadEmailElements = data.emails
                .map(email => {
                    return `
                    <div class="email__head">
                    <div class="email__icon email__icon--closed"></div>
                    <div class="email__info">
                    <div class="email__sender">${email.recipient}</div>
                    <div class="email__subject">${email.subject}</div>
                    </div>
                    </div>
          `;
                });
            unreadEmailsContainer.innerHTML = unreadEmailElements.join('');
        }
    })
    .catch(error => {
        console.log('Je tam chyba:', error);
    });
// Získání přečtených emailů
fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read')
    .then(response => response.json())
    .then(data => {
        const readEmailsContainer = document.getElementById('inbox');
        // jsou hodnoty pole? Array.isArray slouzi k tomu abychom to zjistili
        if (Array.isArray(data.emails)) {
            const readEmailElements = data.emails
                .map(email => {
                    return `
                    <div class="email__head">
                    <div class="email__icon email__icon--opened"></div>
                    <div class="email__info">
                    <div class="email__sender">${email.recipient}</div>
                    <div class="email__subject">${email.subject}</div>
                    </div>
                    </div>
      `;
                });
            readEmailsContainer.innerHTML = readEmailElements.join('');
        }
    })
    .catch(error => {
        console.log('Je tam chyba:', error);
    });