package unrc.dose;




import org.javalite.activejdbc.Model;

/**  
 * ==Schema Info
 *
 * Table name: user_profiles (
  id 	       integer NOT NULL AUTO_INCREMENT,
  user_id      integer,
  displayName  varchar(50),
  twitter_id   varchar(50),
  created_at   DATETIME,
  updated_at   DATETIME,
  PRIMARY KEY (id)
);
 */

/** UserProfile Class represents a profile of a user
 * 
 * @author mariana
 *
 */

public class UserProfile extends Model {
	/** 
	 * user id
	 */ 
	private static String USER_ID = "user_id";
    /**
    * Name displayed on profile
    */
    private static String DISPLAY_NAME = "displayName";
    /**
    * Link to twitter account
    */
    private static String TWITTER_ID = "twitter_id";
    /**
     * Class constructor
     */
    
    public static UserProfile createUserProfile (Integer userId, String displayName, String twitterId) {
    	if (userId == null) {
			throw new IllegalArgumentException ("The user id cannot be null");
		}
    	if (!User.exists(userId)) {
			throw new IllegalArgumentException ("The user does not exits");
		}
    	UserProfile up = new UserProfile();
    	up.setInteger(USER_ID,userId);
    	up.setDisplayName(displayName);
    	up.setTwitterId(twitterId);
    	up.saveIt();
    	return up; 
    	}
    /**
     * @return Id of user
     */
    public Integer getUserId() {
    	return getInteger(USER_ID);
    }
    /** 
     * @return Display Name of user
     */
    public String getDisplayName() {
    	return this.getString(DISPLAY_NAME);
    }
    /**
     * @return Link to twitter account
     */
    public String getTwitterId() {
    	return this.getString(TWITTER_ID);
    }
    /**
     * method to modify Display Name
     */
    public void setDisplayName(final String displayName){
    	if (displayName == null) {
			throw new IllegalArgumentException("The user's display name cannot be null");
		} 
    	if (!displayName.isEmpty()&& (!displayName.matches("[a-zA-Z ]{2,254}"))){
			throw new IllegalArgumentException ("The user's display name cannot be numbers");
		}
    	 set (DISPLAY_NAME,displayName);
    	
    }
    /**
     * method to modify link to twitter account
     */
    /**
     * @param twitterId
     */
    public void setTwitterId(final String twitterId) {
    	if (twitterId == null) {
			throw new IllegalArgumentException("The link twitter cannot be null");
		}	
    	if (!twitterId.isEmpty() && (!twitterId.matches("@([a-zA-Z])+"))) {
			throw new IllegalArgumentException ("The link twitter cannot be numbers");
		}
    	set(TWITTER_ID,twitterId);
    	
    }
    public static Boolean profileExists (int userId) {
   	 if (!UserProfile.exists(userId)){
   			throw new UserNotFoundException(String.valueOf(userId));
   			}
   	 return true;
   	 
    }
   
    
    
  	}
    