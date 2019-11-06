CREATE TABLE IF NOT EXISTS profile_users (
  id 	       integer NOT NULL AUTO_INCREMENT,
  user_id      integer (),
  displayName  varchar(50),
  twitter_id   varchar(50)
  created_at   DATETIME DEFAULT NULL,
  updated_at   DATETIME DEFAULT NULL,
  PRIMARY KEY (id),
  
)

