SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;
