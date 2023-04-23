import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
  return (
    <div>
      <h5>All Category</h5>
      {categories.map((category) => (
        <p key={category.id}>
          <Link
            to={`/categories/${category.id}`}
            className="text-decoration-none"
          >
            {category.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSide;
