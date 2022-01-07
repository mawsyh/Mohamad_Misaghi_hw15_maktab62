select u.username, q.* from mydb.Users as u
join mydb.Test as e
on e.Users_idUsers = u.idUsers
join mydb.Questions_has_Test as eq
on eq.Test_idTest= e.idTest
join mydb.Questions as q
on q.idQuestions = eq.Questions_idQuestions
where u.username = 'asghar';