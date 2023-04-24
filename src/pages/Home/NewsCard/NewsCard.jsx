import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
const NewsCard = ({ cNews }) => {
  const { _id, details, title, author, image_url, thumbnail_url } = cNews;
  return (
    <div>
      <Card className="mb-3">
        <Card.Header>
          <div className="d-flex">
            <div className="d-flex">
              <Image src={author.img} roundedCircle fluid />
              <div>
                <h5>{author.name}</h5>
                <p>Date</p>
              </div>
            </div>
            <div>
              <p>test</p>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 300)}...
                <Link to={`/news/${_id}`}>Read more</Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
