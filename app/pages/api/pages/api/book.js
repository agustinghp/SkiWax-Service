export default function handler(req, res) {
    if (req.method === 'POST') {
      const { time } = req.body;
      
      // You can save the booked time to a database here (e.g., Firebase or MongoDB)
      console.log(`Time booked: ${time}`);
  
      // Respond with success
      res.status(200).json({ message: 'Booking successful!' });
    } else {
      // Handle invalid request method
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  