import React from 'react';
import {Link} from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1 className='text-red-600 text-2xl font-bold'>Error page</h1>
      <h2>404</h2>
      <Link to={"/"}>Back Home</Link>

    </div>
  )
}

export default Error
