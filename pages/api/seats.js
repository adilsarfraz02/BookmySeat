  

  const seats = {
    1: Array(100).fill(true), // 100 seats for Movie 1, initially unbooked
    2: Array(100).fill(false), // 100 seats for Movie 2, initially unbooked
    // Add more movies and seats here
  };
  
  export default function handler(req, res) {
    const { movieId } = req.query;
    const movieSeats = seats[movieId] || [];
  
    res.status(200).json(movieSeats);
  }
    