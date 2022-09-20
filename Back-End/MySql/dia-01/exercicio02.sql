SELECT rating, AVG(length) AS Duração
FROM sakila.film
GROUP BY rating
HAVING Duração BETWEEN 115.0 AND 121.50
ORDER BY Duração DESC;