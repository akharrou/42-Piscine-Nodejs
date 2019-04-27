SELECT REVERSE(SUBSTRING(phone_number, 2, 9)) AS 'rebmunenohp'
FROM distrib
WHERE phone_number LIKE '05%';
