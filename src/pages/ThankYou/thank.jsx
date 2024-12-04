import { Link } from 'react-router-dom';
import './thank.css'

function thank() {
  return ( 
    <div className="thank-you">
    <h1>Thank You!</h1>
    <p>Your purchase was successful. We appreciate your business!</p>
    <Link to="/" className="back-home">Go Back to Home</Link>
  </div>
    
  )
}

export default thank
