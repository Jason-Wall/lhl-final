DROP TABLE IF EXISTS item_images CASCADE;
CREATE TABLE item_images (
  id SERIAL PRIMARY KEY NOT NULL,
  item_id INTEGER REFERENCES items(id) ON DELETE CASCADE,
  img_url VARCHAR(255) NOT NULL,
);
