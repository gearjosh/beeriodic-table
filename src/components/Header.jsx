import React from 'react';

function Header(){
  return(
    <div>
      <style jsx>{`
      h1 {
        background: linear-gradient(to right, wheat, goldenrod, saddlebrown, maroon);
        color: white;
      }
    `}</style>
      <h1>The Official Bunsenbrewer Beeriodic Table App</h1>
    </div>
  );
}

export default Header;