import React from 'react';
import "@/app/globals.scss";

const loading = () => {
  return (
    <main className='app__loading'>
        <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </main>
  )
}

export default loading