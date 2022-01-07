select u.username, eq.specialized_scored, q.* from mydb.Users as u
join mydb.Test as e
on e.Users_idUsers= u.idUsers
join mydb.Test_has_Questions as eq
on eq.Test_idTest = e.idTest
join mydb.Questions as q
on q.idQuestions = eq.Questions_idQuestions
where u.username = 'asghar'
and q.type = 'B'
and eq.specialized_scored > 5;