import React from 'react';

function TitleBeeriodic(){
  return (
    <div  className="title">
      <style jsx>{`
      .title {
        grid-column-start: 2;
        grid-column-end: 7;
        grid-row-start: 1;
        grid-row-end: 2;
        font-size: 6rem;
        font-weight: bold;
        padding: .125rem;
        color: #fafafa;
      }
    `}</style>
      BEERIODIC
    </div>
  );
}

export default TitleBeeriodic;