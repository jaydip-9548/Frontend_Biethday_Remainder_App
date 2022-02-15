import React ,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {


const [date, setdate] = useState("")

  useEffect(() => {
  var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

setdate(dd+'/'+mm+'/'+yyyy)
  }, [])
  return (
  <>
   <nav className="navbar navbar-expand-lg text-light bg-primary ">
        <Link className="navbar-brand text-light" to="/">Birthday Remainder</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to='all/' className='nav-link text-light'>All <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to='quota/' className='nav-link text-light'>Quota</Link>
            </li> 
            <li className="nav-item">
              <Link to='remainder/' className='nav-link text-light'>Remainder</Link>
            </li>
            
          </ul>
          <span>Date : {date}</span>
          {/* <form action="signin/">
            <button className="btn btn-outline-light my-2 my-sm-0 mx-3" type="submit">Sign in</button>

          </form>
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Sign up</button> */}

            <Link to="signin/" className="btn btn-outline-light my-2 my-sm-0 mx-3">Sign In</Link>
            <Link to="signup/" className="btn btn-outline-light my-2 my-sm-0 mx-0">Sign Up</Link>
          
        </div>
      </nav>
      
  </>
  )
}
