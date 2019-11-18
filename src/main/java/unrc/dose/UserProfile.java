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
    public UserProfile (String user_id,String display_name,String twitter_id) {
    	USER_ID = user_id;
    	DISPLAY_NAME = display_name;
    	TWITTER_ID = twitter_id;
    }
    /**
     * @return Id of user
     */
    public Integer getUserId() {
    	return this.getInteger(USER_ID);
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
    	if (displayName.matches("[^a-z A-Z]")) throw new IllegalArgumentException ("The user's display name cannot be numers");
    	set("DISPLAY_NAME", displayName);
    }
    /**
     * method to modify link to twitter account
     */
    public void setTwitterId(final String twitter_id) {
    	if (twitter_id == null) throw new IllegalArgumentException("The link twitter cannot be null");
    	if (twitter_id.charAt(0)!='@') throw new IllegalArgumentException("The link twitter must begin with @");
    	if (twitter_id.matches("[^a-z A-Z]")) throw new IllegalArgumentException ("The link twitter cannot be numbers");
    	set("TWITTER_ID",twitter_id);	
    }
 
    
}