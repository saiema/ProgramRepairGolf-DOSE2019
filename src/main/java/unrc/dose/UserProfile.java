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
    private static String DISPLAY_NAME = "display_name";
    /**
    * Link to twitter account
    */
    private static String TWITTER_ID = "twitter_id";
    /**
     * Class constructor
     */
    public UserProfile (Integer userId, String displayName, String twitterId) {
    	if (userId == null) {
			throw new IllegalArgumentException ("The user id cannot be null");
		}
    	if (!User.exists(userId)) {
			throw new IllegalArgumentException ("The user does not exits");
		}
    	setInteger(USER_ID,userId);
    	setDisplayName(displayName);
    	setTwitterId(twitterId);
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
    	return getString(DISPLAY_NAME);
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
    	if (!displayName.matches("([a-zA-Z])+ ([a-zA-Z])*")) {
			throw new IllegalArgumentException ("The user's display name cannot be numers");
		}
    	if ((displayName =="") || (displayName.matches("([a-zA-Z])+ ([a-zA-Z])*"))) {
    	set (DISPLAY_NAME,displayName);
    	}
    }
    /**
     * method to modify link to twitter account
     */
    public void setTwitterId(final String twitterId) {
    	if (twitterId == null) {
			throw new IllegalArgumentException("The link twitter cannot be null");
		}	
    	if (!twitterId.matches("@([a-zA-Z])+")) {
			throw new IllegalArgumentException ("The link twitter cannot be numbers");
		}
    	if ((twitterId =="") || (twitterId.matches("@([a-zA-Z])+"))) {
    	set(TWITTER_ID,twitterId);
    	}
    	
    }
    /**
     * method
     */
    
    public static void modifyUserProfile(UserProfile up,final Integer userId,final String displayName,final String twitterId){
        if (!User.exists(userId)) {
			throw new IllegalArgumentException ("The user does not exits");
			}
    	if ((User.exists(userId))&& (up.getDisplayName()!=displayName)&&(up.getTwitterId()!=twitterId)){ 
    	up.setDisplayName(displayName);   
    	up.setTwitterId(twitterId);
    	up.saveIt();
        }
        if ((User.exists(userId))&& (up.getDisplayName()==displayName)&&(up.getTwitterId()!=twitterId)) {
        up.setTwitterId(twitterId);
        up.saveIt();
        	
        }
        if ((User.exists(userId))&& (up.getDisplayName()!=displayName)&&(up.getTwitterId()==twitterId)) {
        up.setDisplayName(displayName); 
        up.saveIt();
        }
        }
    
    /**
    public Optional<UserProfile> getUserProfile(Integer userId,String displayName,String twitterId){
    	if (!User.exists(userId)) {
    		Optional.empty();
    		}
    		else {
    			UserProfile userprofile = new UserProfile(userId,displayName,twitterId); 
    			Optional<UserProfile> optUserProfile = Optional.of(userprofile);
    		}
    }
    	
    	
    
   public void findByUserId(Integer userId) {
    	if (!User.exists(userId)) {
    		throw new IllegalArgumentException ("the user is not exist");
    		}
        if (User.exists(userId){
        	Userprofile.get
    	
    		
    	}
    		
    	}
    	
    	
    }*/
}