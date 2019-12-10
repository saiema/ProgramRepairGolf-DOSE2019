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
      UserProfile userprofile = new UserProfile (userId,displayName,twitterId);
	  Gson g = new Gson();
      return g.toJson(userprofile);

  }
}