const db = require('./index.js');

// store S3 images in an array
const buckets = [];
const gettingImagesS3 = () => {
  for (let i = 1; i <= 10; i += 1) {
    buckets.push(`https://fechr.s3-us-west-1.amazonaws.com/${i}.jpg`);
  }
};
gettingImagesS3();


const insertingData = () => {
  for (let i = 1; i <= 100; i += 1) {
    db.query('INSERT INTO products (product_id) VALUES (?)', [`${i}`]);
    db.query('INSERT INTO images (image_url) VALUES (?)', [`${buckets[Math.floor(Math.random() * 10)]}`]);


    for (let k = 1; k < Math.floor(Math.random() * 10); k += 1) {
      db.query('INSERT INTO reference (prod_id, img_id) VALUES (?, ?)', [`${i}`, Math.floor(Math.random() * 10)]);
    }
  }
};

insertingData();
