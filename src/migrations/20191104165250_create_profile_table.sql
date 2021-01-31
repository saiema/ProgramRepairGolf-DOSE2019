CREATE TABLE IF NOT EXISTS user_profiles (
  id 	       integer NOT NULL AUTO_INCREMENT,
  user_id      integer,
  displayName  varchar(50),
  twitter_id   varchar(50),
  created_at   DATETIME,
  updated_at   DATETIME,
  PRIMARY KEY (id)
);
