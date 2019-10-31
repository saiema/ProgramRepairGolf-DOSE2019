package unrc.dose;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.assertEquals;

import org.javalite.activejdbc.Base;
import org.junit.AfterClass;
import org.junit.BeforeClass;

import unrc.dose.User;
import unrc.dose.Challenge;
import unrc.dose.Proposition;

public class StepsProposition extends Proposition {

	@Given ("^the database has the default data$")
	public void the_database_has_the_default_data() throws Exception {

		if (Base.hasConnection()) {
	  			Base.rollbackTransaction();
	  	    	Base.close();
	  		}
	  		if (!Base.hasConnection()) {
		      	Base.open();
		      	Base.openTransaction();
		       	User user = User.set("Enzo" , "Ferrari" , "F40@gmail.com" , false);
		       	Proposition p = Proposition.newProposition(user.getId(), (Challenge.addChallenge(user.getInteger("id"), "challenge1", "Challenge1", "challenge1", "0", 0, 100)).getInteger("id"));
		}
	}

    User user = new User();
    Challenge challen = new Challenge();
    Proposition p = new Proposition();

	@Given("^the user \"([^\"]*)\" is already logged on$")
	public void the_user_is_already_logged_on(String name) throws Exception {
		user = User.findById(name);
	}

	@Given("^wants to solve the test based challenge with id (\\d+)$")
	public void wants_to_solve_the_test_based_challenge_with_id() throws Exception {
		challen = Challenge.findFirst("title", "challenge1");
	}

	@Given("^this challenge has not been solved yet$")
	public void this_challenge_has_not_been_solved_yet() throws Exception {
		p = getUnsubmittedChallengePropByUser(user.getId(), challen.getInteger("id")).get(0);
	}

	@Given("^the user already has a score (\\\\d+) assigned in this challenge$")
	public void the_user_already_has_a_score_assigned_in_this_challenge() throws Exception {
		// Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Given("^the text of the challenge is:$")
	public void the_text_of_the_challenge_is() throws Exception {
		challen.getSource();
	}

	@Given("^the par for the challenge is (\\d+)$")
	public void the_par_for_the_challenge_is() throws Exception {
		challen.setPoint(50);
	}

	@Given("^the proposed solution is$")
	public void the_proposed_solution_is(String solution) throws Exception {
		p.setSource(solution);
	}

	@When("^the user submits the solution$")
	public void the_user_submits_the_solution() throws Exception {
		submitProposition(p.getSource(), challen.getClassName());
	}

	@Then("^the system should inform that the solution passed the tests$")
	public void the_system_should_inform_that_the_solution_passed_the_tests() throws Exception {
		// Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^the distance of the solution is (\\\\d+)")
	public void the_distance_of_the_solution_is (int distance) {
		p.setDistance(1);
	}

	@Then("^user pponzio receives a score of (\\d+) for solving the challenge$")
	public void user_pponzio_receives_a_score_of_for_solving_the_challenge(int points) throws Exception {
		//assertEquals(points, (challen.getPoint() - p.getDistance()));
	}

	@Then("^the score is better than the previous one$")
	public void the_score_is_better_than_the_previous_one(int points) throws Exception {
		//assertEquals(points, (challen.getPoint() - bestPropDistance(p.getUserId(), p.getChallengeId()).getDistance()));
	}

	@Then("^the new score the best of them$")
	public void the_new_score_the_best_of_them() throws Exception {
		// Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
}