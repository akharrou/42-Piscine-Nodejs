SELECT title, summary
FROM film
WHERE LOCATE('42', title) OR LOCATE('42', summary)
ORDER BY duration ASC;
