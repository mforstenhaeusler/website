import React from 'react';
import "../globals.css";

const NotFound: React.FC = () => {
    return (
        <div>
          <h2>Not Found</h2>
          <p>Could not find requested resource</p>
          <a href="/">Return Home</a>
        </div>
      )
}
 
export default NotFound;