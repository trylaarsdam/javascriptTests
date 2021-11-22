
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    console.log(req.body);
    console.log({ status: 'registered', randomStudentID: getRandomInt(1000000, 9999999)})
    res.status(200).send({ status: 'registered', randomStudentID: getRandomInt(1000000, 9999999)})
  } else {
    // Handle any other HTTP method
    res.status(404).json({ error: 'endpoint only supports POST requests' })
  }
}
