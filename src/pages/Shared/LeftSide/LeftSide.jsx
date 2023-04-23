import React, { useEffect, useState } from 'react';

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
      <h5>Left Side</h5>
    </div>
  );
};

export default LeftSide;
