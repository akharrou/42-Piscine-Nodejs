SELECT UPPER(user_card.last_name) AS 'NAME', user_card.first_name, subscription.price
FROM user_card
INNER JOIN member
ON user_card.id_user = member.id_user_card
INNER JOIN subscription
ON member.id_sub = subscription.id_sub
WHERE subscription.price > 42
ORDER BY last_name ASC, first_name ASC;
