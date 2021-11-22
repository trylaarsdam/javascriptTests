const firebase = require('../../interfaces/db')

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    var studentID = getRandomInt(1000000, 9999999)

    console.log(req.body);
    await firebase.getApplication(req.body, studentID)
    //console.log({ status: 'registered', randomStudentID: studentID})
    res.status(200).send({ status: 'registered', randomStudentID: studentID})
  } else {
    // Handle any other HTTP method
    res.status(404).json({ error: 'endpoint only supports POST requests' })
  }
}
