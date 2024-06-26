import React from 'react';

function Card({ data }) {
  return (
    <div className="col mb-4">
      <div className="card shadow-sm h-100">
        <img src={data.img} className="card-img-top rounded-top" alt="Card" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text flex-grow-1">{data.description}</p>
          <a href="#" className="card-read">Read more »</a>
        </div>
        <div className="card-footer bg-light rounded-bottom">
          <small className="text-muted d-flex justify-content-between align-items-center">
            {data.date}
            <span>No Comments</span>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Card;
