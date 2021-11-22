const firebase = require('../../interfaces/db')

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request

    console.log(req.body);
    var studentID = JSON.parse(req.body).studentID
    var email = JSON.parse(req.body).email

    var application = await firebase.getApplication(studentID)
    if(application.length > 0){
      if(application[0].email === email){
        res.status(200).send({ status: 'valid', application = application[0]})
      }
      else {
        res.status(200).send({ status: 'invalid'})
      }
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
