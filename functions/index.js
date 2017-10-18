const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});


exports.sanitize = functions.database
    .ref('/rooms/{roomId}/questions/{questionId}')
    .onWrite(event => {
        const question = event.data.val();
        if(question.sanitized) return;
        console.log(`Sanitizing question ${event.params.questionId}`);
        console.log(question);
        question.sanitzed = true;
        question.question = sanitize(question.question);
        return event.data.ref.set(question);
    });

    sanitize = s => {
        let sanitatizeText = s;
        sanitatizeText = sanitatizeText.replace(/\bstupid\b/ig, "greate");
        return sanitatizeText;
    }