import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from 'react-icons/fa';
import EditorsInsights from './EditorsInsights';

const News = () => {
  const loadedNews = useLoaderData();
  const { thumbnail_url, title, details, category_id } = loadedNews;
  console.log(loadedNews);
  return (
    <div>
      <div>
        <Card>
          <Card.Img variant="top" src={thumbnail_url} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <Link to={`/categories/${category_id}`}>
              <Button
                className="inline-flex align-items-center"
                variant="danger rounded-0"
              >
                {' '}
                <span className="me-2">
                  <FaArrowLeft></FaArrowLeft>
                </span>
                <span>All news in this category</span>
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div>
        <EditorsInsights></EditorsInsights>
      </div>
    </div>
  );
};

export default News;
