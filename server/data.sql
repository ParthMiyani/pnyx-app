INSERT INTO Artists(artist_id, ArtistName) 
VALUES (1, 'Harry Styles'),
(2,'Taylor Swift');


INSERT INTO Users(userID, email, created_at, artist_id, views_left, view_count, purchased_count) 
VALUES (1, 'bob@gmail.com', '2023-10-10 23:59', 1, 5, 0, 0),
(2, 'emma3@gmail.com', '2023-11-13 23:59', 1, 3, 2, 1),
(3, 'alex@gmail.com', '2023-12-05 23:59', 2, 4, 1, 0);


INSERT INTO Genres(genre_id, genreName) 
VALUES (1, 'pop'), (2, 'country'),(3, 'rap');


INSERT INTO Songs(song_id,song_name,song_link ,genre_id,price) 
VALUES (1,'Song name 1','linksong1.com',1,129),
(2,'Song name 2','linksong2.com',3,99),
(3,'Song name 3','linksong3.com',2,199);


INSERT INTO Revealed(reveal_id, userID,song_id) 
VALUES (1, 2,1),(2, 2,3),(3, 3,2);


INSERT INTO Purchases(purchase_id, userID,song_id) 
VALUES (1, 2,1);
