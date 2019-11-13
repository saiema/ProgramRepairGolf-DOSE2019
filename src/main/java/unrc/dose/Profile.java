
package unrc.dose;

import org.javalite.activejdbc.Model;

/** Class Profile represents the profile of a user
 * 
 * @author mariana
 *
 */

public class Profile extends Model {
	/** 
	 * Id of user
	 */
	private static final String User_Id = "user_id";
    /**
    * Name displayed on profile
    */
    private static final String Display_Name = "display_name";
    /**
    * Link to twitter account
    */
    private static final String Twitter_Id = "twitter_id";
    
    /**
     * @return Id of user
     */
    public Integer getUser_Name() {
    	return this.getInteger(User_Id);
    }
    /** 
     * @return Display Name of user
     */
    public String getDisplay_Name() {
    	return this.getString(Display_Name);
    }
    /**
     * @return Link to twitter account
     */
    public String getTwitter_Id() {
    	return this.getString(Twitter_Id);
    }
    /**
     * method to modify user id.
     */
    public void setUserId(final int user_id) {
    	if (user_id != 0)
        set("User_Id", user_id);
    }
    /**
     * method to modify Display Name
     */
    public void setDisplayName(final String display_name){
    	if(display_name != null)
    	set("Display_Name", display_name);
    }
    /**
     * method to modify link to twitter account
     */
    public void setTwitterId(final String twitter_id) {
    	if (twitter_id != null)
    	set("Twitter_Id",twitter_id);	
    }
 
}