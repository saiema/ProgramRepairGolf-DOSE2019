package unrc.dose;

import com.google.gson.Gson;

/**
* Class which calls user profile's methods and transforms they to json.
*/
public final class UserProfileService {
  /**
  *Invokes the method which creates a user profile and transforms to json.
  **/
  public static String userprofile(Integer userId, String displayName, String twitterId) {
	  
      return UserProfile.createUserProfile(userId, displayName, twitterId).toJson(true);

  }
  
  public static String searchById (int userId) {
	  if (!User.exists(userId)){
          throw new UserNotFoundException(String.valueOf(userId));
          }
      	UserProfile up = UserProfile.findFirst("user_id = ?", userId); 
        return up.toJson(true, "user_id", "displayName", "twitter_id");  
      	
}
  
 public static String updateUp (int userId, String displayName,String twitterId) {
	 if (!User.exists(userId)){
			throw new UserNotFoundException(String.valueOf(userId));
			}
	     UserProfile up = UserProfile.findFirst("user_id = ?", userId);
	     up.setDisplayName (displayName);
         up.setTwitterId (twitterId);
         up.saveIt();
         return up.toJson(true, "user_id", "displayName","twitter_id");
         
         
        
 }
  
}