SELECT rating, SUM(replacement_cost) AS Total
FROM sakila.film
GROUP by rating
HAVING Total > 3950.50
ORDER BY Total;