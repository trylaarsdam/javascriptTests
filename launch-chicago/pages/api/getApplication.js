const firebase = require('../../interfaces/db')

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request

    console.log(req.body);
    var studentID = req.body.id
    var email = req.body.email
    //console.log("test")
    var application = await firebase.getApplication(studentID)
    //console.log(application)
    if(application.email === email){
      res.status(200).send({ status: 'valid', application: application})
    }
    else {
      res.status(200).send({ status: 'invalid'})
    }
    //console.log({ status: 'registered', randomStudentID: studentID})
  } else {
    // Handle any other HTTP method
    res.status(404).json({ status: 'error', error: 'endpoint only supports POST requests' })
  }
}
