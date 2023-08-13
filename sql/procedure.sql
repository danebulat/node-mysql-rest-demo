DELIMITER $$
CREATE PROCEDURE `sp_search_users_by_id`(IN userid INT)
BEGIN
  SELECT first_name, last_name, email, dob, dept, created_at 
  FROM users 
  WHERE id = userid;
END $$
DELIMITER ;

SHOW PROCEDURE STATUS LIKE 'sp_search_user%';
