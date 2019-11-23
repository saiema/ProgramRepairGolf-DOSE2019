package unrc.dose;

import org.javalite.activejdbc.Model;

/** Class User Profile represents the profile of a user
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
    	if (userId == null) throw new IllegalArgumentException ("The user id cannot be null");
    	if (!User.exists(userId)) throw new IllegalArgumentException ("The user does not exits");
    	setInteger(USER_ID,userId);
    	setDisplayName(displayName);
    	setTwitterId(twitterId);
    }
    /**
     * @return Id of user
     */
    public String getUserId() {
    	return this.getString(USER_ID);
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
    	if (displayName == null) throw new IllegalArgumentException("The user's display name cannot be null");
    	if (!displayName.matches("([a-zA-Z]+ [a-zA-Z]*")) throw new IllegalArgumentException ("The user's display name cannot be numers");
    	setString(DISPLAY_NAME,displayName);
    }
    /**
     * method to modify link to twitter account
     */
    public void setTwitterId(final String twitterId) {
    	if (twitterId == null) throw new IllegalArgumentException("The link twitter cannot be null");	
    	if (!twitterId.matches("@([a-zA-Z])+")) throw new IllegalArgumentException ("The link twitter cannot be numbers");
    	setString(TWITTER_ID,twitterId);	
    }
 
    
}