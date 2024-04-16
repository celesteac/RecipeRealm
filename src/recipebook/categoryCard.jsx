import React from 'react';

export default function CategoryCard({category, color}) {
  const [bgColor, setBGColor] = React.useState("col-sm-12 card mt-3 text-bg-" + color);


  return (
      <div className={bgColor} id="category">
        <div className="card-body">
          <h3 className="card-title text-center m-0">{category}</h3>
        </div>
      </div>
  );
}