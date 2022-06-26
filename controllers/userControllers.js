const fetch = require('node-fetch');

const newsletter = (req, res) => {
    const { firstName, lastName, email } = req.body;

  // Make sure fields are filled
  if (!firstName || !lastName || !email || !validateEmail(email)) {
    res.sendStatus('400');
    return;
  }

  // Construct req data
  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const postData = JSON.stringify(data);

  fetch('https://us20.api.mailchimp.com/3.0/lists/715fc1af52', {
    method: 'POST',
    headers: {
      Authorization: 'auth 8881b621b96905b5553b5b94eb7cb548-us20'
    },
    body: postData
  })
    .then(res.statusCode === 200 ?
      res.sendStatus('200') :
      res.sendStatus('500'))
    .catch(err => console.log(err))
};


module.exports = {
  newsletter,
};



function validateEmail(email) {
    const res =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
  }