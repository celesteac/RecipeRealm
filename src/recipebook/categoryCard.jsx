import React from 'react';

export default function CategoryCard({category, color}) {
    const [bgColor, setBGColor] = React.useState("card mt-3 text-bg-" + color);


return (
    <div id="category" className="col-sm-12 ">
        <div className={bgColor} id="category">
            <div className="card-body">
                <h3 className="card-title text-center m-0">{category}</h3>
            </div>
        </div>
    </div>
);
}