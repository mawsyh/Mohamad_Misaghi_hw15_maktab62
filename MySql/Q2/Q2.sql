select u.username, e.* from mydb.Users as u
join mydb.Test as e
on e.Users_idUsers = u.idUsers
where u.username = 'asghar';