export default function handler(req, res) {
    // Dummy available times (you can replace this with a database fetch)
    const availableTimes = ['10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM'];
  
    res.status(200).json(availableTimes);
  }