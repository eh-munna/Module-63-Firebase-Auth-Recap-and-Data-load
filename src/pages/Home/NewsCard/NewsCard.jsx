import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import moment from 'moment';
import {
  FaRegBookmark,
  FaShareAlt,
  FaEye,
  FaStar,
  FaRegStar,
} from 'react-icons/fa';
import Rating from 'react-rating';
const NewsCard = ({ cNews }) => {
  const {
    _id,
    details,
    title,
    author,
    image_url,
    thumbnail_url,
    published_date,
    total_view,
    rating,
  } = cNews;
  return (
    <div>
      <Card className="mb-3">
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <Image
                style={{
                  height: '60px',
                }}
                src={author?.img}
                roundedCircle
                fluid
              />
              <div className="ms-2 flex-grow-1">
                <p className="text-black fw-semibold">{author?.name}</p>
                <p className="text-secondary">
                  {moment(author.published_date).format('yyyy-mm-D')}
                </p>
              </div>
            </div>
            <div>
              <span>
                <FaRegBookmark></FaRegBookmark>
              </span>
              <span>
                <FaShareAlt></FaShareAlt>
              </span>
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
        <Card.Footer className="text-muted d-flex align-items-center">
          <div className="flex-grow-1 align-items-center">
            <span>
              <Rating
                placeholderRating={rating?.number}
                readonly
                emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
                placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                fullSymbol={<FaStar className="text-warning"></FaStar>}
              />
            </span>
            <span>{rating?.number}</span>
          </div>
          <div>
            <span>{total_view}</span>
            <FaEye></FaEye>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
