const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//  http request 1
exports.randomNumber = functions.https.onRequest((req, res) => {
  const number = Math.round(Math.random() * 100);
  console.log(number);
  res.send(number.toString());
});

// http request 2
exports.toTheDojo = functions.https.onRequest((req, res) => {
  res.redirect("https://kscore.netlify.app");
});

// http callable function
exports.sayHello = functions.https.onCall((data, context) => {
  const name = data.name;
  return `hello, ${name}`;
});
