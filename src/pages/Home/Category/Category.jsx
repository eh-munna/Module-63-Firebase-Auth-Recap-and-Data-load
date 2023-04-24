import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  console.log(categoryNews);
  return (
    <div>
      {/* <h3>Category no {id}</h3> */}
      {id && (
        <h2>
          Here are {categoryNews.length}{' '}
          {categoryNews.length > 1 ? `News'` : `News`}{' '}
        </h2>
      )}

      {categoryNews.map((cNews) => (
        <NewsCard key={cNews._id} cNews={cNews}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
