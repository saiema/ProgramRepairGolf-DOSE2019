package unrc.dose;

import static com.beerboy.ss.descriptor.EndpointDescriptor.endpointPath;
import static com.beerboy.ss.descriptor.MethodDescriptor.path;

import java.util.List;
import java.util.Map;

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
                    	
                        return UserProfileService.userprofile(
                        Integer.parseInt(req.params("id")),req.queryParams("displayName"),req.queryParams("twitterId"));
                    	
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
          					UserProfile up = (UserProfile) UserProfile.find("user_id = ?", req.params("id")).get(0);
          				    up.setDisplayName (req.queryParams("displayName"));
                            up.setTwitterId (req.queryParams("twitterId"));
                            up.saveIt();
                            return up.toJson(true, "user_id", "displayName","twitterId");
                            }
                )
                .get(
                       path("/:id/profile")
                            .withDescription("Will return the user profile of user's id")
                             .withPathParam()
                                .withName("displayName")
                                .withDescription("user profile display name").and()
                            .withPathParam()
                            	.withName("twitterId")
                            	.withDescription("user profile twitter id").and()
                            .withResponseType(String.class),
                        (req, res) -> {
                        	
                        	if (!User.exists(Integer.parseInt(req.params("id")))) {
                        	throw new UserNotFoundException(String.valueOf(Integer.parseInt(req.params("id"))));
                        	}
                   
                        	UserProfile up = (UserProfile) UserProfile.find("user_id = ?", req.params("id")).get(0);
                        	return up.toJson(true, "user_id", "displayName", "twitter_id");
                        	}
                     );
                           
    }
    
}
