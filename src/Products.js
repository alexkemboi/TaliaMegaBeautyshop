import React from 'react';

function Card({ imageSrc, title, description }) {
  return (
    <div className="col-md-2">
      <div className="card">
        <img src={imageSrc} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

function Products() {
  const cardsData = [
    {
      imageSrc: './images/bodyscrubs.jpg',
      title: 'Body Scrubs',
      description: 'A selection of rejuvenating body scrubs for a fresh and glowing skin.',
    },
    {
      imageSrc: './images/cocoabutter.jpg',
      title: 'Cocoa Butter',
      description: 'Pure cocoa butter for deep moisturization and skin nourishment.',
    },
    {
      imageSrc: './images/collagen.jpg',
      title: 'Collagen',
      description: 'Boost your skin\'s elasticity with collagen-infused products.',
    },
    {
      imageSrc: './images/collagenfacialserem.jpg',
      title: 'Collagen Facial Serum',
      description: 'An advanced serum for a youthful and radiant complexion.',
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
