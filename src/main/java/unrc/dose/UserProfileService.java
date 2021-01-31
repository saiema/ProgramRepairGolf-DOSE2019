package unrc.dose;

import com.google.gson.Gson;

/**
* Class which calls user profile's methods and transforms they to json.
*/
public final class UserProfileService {
  /**
  *Invokes the method which creates a user profile and transforms to json.
  **/
  public static String createProfile(Integer userId, String displayName, String twitterId) {
	  if (!User.exists(userId)) {
				throw new UserNotFoundException(String.valueOf(userId));
			}
  	  UserProfile up = UserProfile.findFirst("user_id = ?", userId);
  	  if(up != null){
  		  throw new IllegalArgumentException ("The user profile already exists");
  	  }
  	
      return UserProfile.createUserProfile(userId, displayName, twitterId).toJson(true);

  }
  /**
   * Invokes the method which finds a user profile given a user id and transforms to json.
   * @param userId
   * @return
   */
  
  public static String getProfile(int userId) {
	  if (!User.exists(userId)) {
			throw new UserNotFoundException(String.valueOf(userId));
			}
	  UserProfile up = UserProfile.findProfile(userId);
	  return up.toJson(true, "user_id", "displayName","twitter_id");
 }
  /**
   * Invokes a method that finds a user profile given an  user id and modifies it and transforms to json.
   * @param userId
   * @param displayName
   * @param twitterId
   * @return
   */
  
 public static String updateProfile (int userId, String displayName,String twitterId) {
	if (!User.exists(userId)) {
			throw new UserNotFoundException(String.valueOf(userId));
			}
	UserProfile up = UserProfile.findProfile(userId); 
	up.setDisplayName("displayName");
	up.setTwitterId("twitterId");
	up.saveIt();
	return up.toJson(true, "user_id", "displayName", "twitter_id");   
        
 }
 
 
  
}