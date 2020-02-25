package unrc.dose;

import static com.beerboy.ss.descriptor.EndpointDescriptor.endpointPath;
import static com.beerboy.ss.descriptor.MethodDescriptor.path;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.beerboy.ss.SparkSwagger;
import com.beerboy.ss.rest.Endpoint;
import com.google.gson.Gson;

import spark.ExceptionHandler;

/**
 * Endpoint for UserProfile
 * @author mariana
 */
public final class UserProfileEndpoint implements Endpoint {

    /** The logger. */
    static final Logger LOGEER = LoggerFactory.getLogger(UserProfileEndpoint.class);

    /** main namespace of this endpoint. */
    private static final String NAME_SPACE = "/users";
    
  
    
    @Override
    public void bind(final SparkSwagger restApi) {
        
        restApi.endpoint(
            endpointPath(NAME_SPACE)
            .withDescription(
                "UserProfile REST API exposing all UserProfile utilities"
                ),
            (q, a) -> LOGEER.info("Logging Received request for UserProfile Rest API"))
        
           .post(
                   path("/:id/profile")
                       .withDescription("creates a new user profile")
                        .withQueryParam()
                            .withName("displayName")
                            .withDescription("user profile display name").and()
                       .withQueryParam()                            
                       .withName("twitterId")
                       .withDescription("user profile twitter id").and()
                      
                        .withResponseType(String.class),
                    (req, res) -> {
                    	if (!User.exists(Integer.parseInt(req.params("id")))) {
           					throw new UserNotFoundException(String.valueOf(Integer.parseInt(req.params("id"))));
          					}
                    	UserProfile up = UserProfile.findFirst("user_id = ?", Integer.parseInt(req.params("id")));
                    	if(up != null){
                    		  throw new IllegalArgumentException ("The user profile already exists");
                    	  }
                    	
                        return UserProfileService.createProfile(
                        Integer.parseInt(req.params("id")),req.queryParams("displayName"),
                        req.queryParams("twitterId"));
                    	
                 }
                )
             .put(
                   path("/:id/profile")
                       .withDescription("Modify user profile")
                       .withQueryParam()
                       .withName("displayName")
                       .withDescription("user profile display name").and()
                       .withQueryParam()
                    	.withName("twitterId")
                       	.withDescription("user profile twitter id").and()  
                        .withResponseType(String.class),
                     
                    (req, res) -> {
                    	if (!User.exists(Integer.parseInt(req.params("id")))) {
           					throw new UserNotFoundException(String.valueOf(Integer.parseInt(req.params("id"))));
          					}
                    	UserProfile up = UserProfile.findFirst("user_id = ?", Integer.parseInt(req.params("id")));
                    	if(up == null){
                    		  throw new IllegalArgumentException ("The user profile does not exists");
                    	  }
                    	    return UserProfileService.updateProfile(Integer.parseInt(req.params("id")), 
                    	   		req.queryParams("displayName"),req.queryParams("twitterId"));
          					
                            }
                )
                .get(
                       path("/:id/profile")
                            .withDescription("Will return the user profile of user's id")
                             
                            .withResponseType(String.class),
                        (req, res) -> {
                        	if (!User.exists(Integer.parseInt(req.params("id")))) {
               					throw new UserNotFoundException(String.valueOf(Integer.parseInt(req.params("id"))));
              					}
                          UserProfile up = UserProfile.findFirst("user_id = ?", Integer.parseInt(req.params("id")));
                      	  if(up == null){
                      		  throw new IllegalArgumentException ("The user profile does not exists");
                      	  }
                        	return UserProfileService.getProfile(Integer.parseInt(req.params("id")));
                        	
                        	}
                     );
                           
    }
    
}
