package unrc.dose;

import java.io.IOException;
import java.util.Arrays;

import org.javalite.activejdbc.Base;
import org.javalite.activejdbc.LazyList;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.beerboy.ss.SparkSwagger;
import com.beerboy.ss.rest.Endpoint;

import spark.Service;

public class App
{

	static final Logger LOGGER = LoggerFactory.getLogger(App.class);
	
    public static Service spark = Service.ignite().port(55555);
    
    public static void main( final String[] args ) {

      try {
        SparkSwagger
          .of(spark)
          .before((request, response) -> {
            if (!Base.hasConnection()) {
              Base.open();
            }
          })
          .after((request, response) -> {
            if (Base.hasConnection()) {
              Base.close();
            }
            response.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
            response.header(
              "Access-Control-Allow-Headers",
              "Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin");
          })
          .endpoints(() -> Arrays.asList(
              new BellyEndpoint(),
              new UserStatEndpoint(),
              new ChallengeEndPoint(),
              new CompilationChallengeEndPoint(),
              new TestChallengeEndPoint(),
              new PropositionEndpoint()
            )
          )
          .generateDoc();
      }
      catch(final IOException e) {
        LOGGER.error(e.getMessage());
      }

      spark.get("/hello/:name", (req, res) -> {
        return "hello" + req.params(":name");
      });

      spark.get("/users", (req, res) -> {
        res.type("application/json");

        final LazyList<User> users = User.findAll();

        return users.toJson(true, "username", "password");
      });

      spark.options("/*", (req, response) -> {
        return "OK";
      });
    }
}
