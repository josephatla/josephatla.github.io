import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import pic1 from '../assets/pic1.jpg'

function Cards() {
  const cardData = [
    { title: 'BIO-DAF', image: pic1, link: '#' },
    { title: 'Panel Tank', image: pic1, link: '#' },
    { title: 'Septic Tank', image: pic1, link: '#' },
    { title: 'Storage Tank', image: pic1, link: '#' },
    { title: 'Talang', image: pic1, link: '#' },
    { title: 'Toilet', image: pic1, link: '#' },
    { title: 'Atap', image: pic1, link: '#' },
    { title: 'Ipal', image: pic1, link: '#' },
    { title: 'Lining Fiberglass Concrete', image: pic1, link: '#' }
  ];

  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (idx) => {
    setHovered(idx);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const handleCardClick = (link) => {
    window.location.href = link;
  };

  return (
    <Row xs={1} md={3} className="g-4">
      {cardData.map((card, idx) => (
        <Col key={idx}>
          <Card
            style={{
              transform: hovered === idx ? 'scale(1.05)' : 'scale(1)', // Scaling on hover
              transition: 'transform 0.3s ease', // Smooth transition effect
              cursor: 'pointer' // Change cursor to pointer when hovering
            }}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCardClick(card.link)} // Open new window when card is clicked
          >
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Suscipit proin cubilia etiam habitasse; tortor tempor.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Cards;
