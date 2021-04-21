import React from "react";
import { useLocation, useParams, useHistory} from "react-router-dom";


const Contact = () => {
  
   const location = useLocation();
   const {name} = useParams();
   const history = useHistory();
  
  return (
    <>
    <div className="center">
    <h1> Hello, {name} This is Contact Page</h1>
        {
      location.pathname === `/contact/karthik` ? (
      <button onClick={() => history.push('/')}> Home page </button>
      ): null
    }
    </div>
    </>
)
}


export default Contact;