package unrc.dose;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.PendingException;
import static org.junit.Assert.*;

import java.util.HashMap;
import java.util.Map;

import unrc.dose.User;
import unrc.dose.StepUtils;

import org.javalite.activejdbc.Base;
import org.javalite.activejdbc.LazyList;

import com.google.gson.Gson;
import com.google.gson.JsonObject;


public class UserStatSteps extends StepUtils {
  Belly belly;
  UrlResponse response;
  User u;
  int points;


    @Given("^user wants to look his score$")
    public void user_wants_to_look_his_score() throws Exception {
      u = User.set("Hackerman", "T3H4ck303lC0r4z0n", "hackingnsa@gmail.com", false);
      u.saveIt();
    }

    @When("^user press show score$")
    public void user_press_show_score() throws Exception {
      Map<String, Integer> parameters = new HashMap<>();
      parameters.put("id", u.getId());
      UserStat us = UserStat.findFirst("user_id = ?", u.getId());
      points = us.getCurrentPoints();
    }

    @Then("^the system show the score on a message$")
    public void the_system_show_the_score_on_a_messag() throws Exception {
        UserStat us = UserStat.findFirst("user_id = ?", u.getId());
        assertEquals((int)us.getInteger(UserStat.CURRENTPOINTS),points);
    }
       
}
