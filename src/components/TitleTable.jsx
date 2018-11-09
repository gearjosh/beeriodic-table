import React from 'react';

function TitleTable(){
  return (
    <div className="subtitle">
      <style jsx>{`
      .subtitle {
        grid-column-start: 3;
        grid-column-end: 6;
        grid-row-start: 2;
        grid-row-end: 3;
        font-size: 6rem;
        font-weight: bold;
        padding: .125rem;
        color: #4a4a4a;
      }
    `}</style>
      TABLE
    </div>
  );
}

export default TitleTable;