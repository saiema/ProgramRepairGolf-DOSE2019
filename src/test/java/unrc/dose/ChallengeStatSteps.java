package unrc.dose;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import unrc.dose.StepUtils;
import unrc.dose.User;
import unrc.dose.ChallengeStat;

public class ChallengeStatSteps extends StepUtils{
    private static User u = new User();
    private static Challenge ch = new Challenge();
    private static ChallengeStat cSt = new ChallengeStat();
    private static int challengeId;

    @Given("^that a user with id (\\d+) is already logged on$")
    public boolean that_a_user_with_id_is_already_logged_on(int arg1) {
        u = User.findFirst("id = ?", arg1);
        return u != null;
    }

    @Given("^exists a challenge with id (\\d+)$")
    public boolean exists_a_challenge_with_id(int arg1) {
        ch = Challenge.findFirst("id = ?", arg1);
        return ch != null;
    }

    @Given("^it was solved by a least one user$")
    public boolean it_was_solved_by_a_least_one_user() {
        challengeId = ch.getInteger("id");
        cSt = ChallengeStat.findFirst("id = ?", challengeId);
        return (cSt.getInteger("solved_count") > 0);
    }

    @When("^the user inputs the challenge's id (\\d+) to the system$")
    public void the_user_inputs_the_challenge_s_id_to_the_system(int arg1) {
        
        throw new PendingException();
    }

    @Then("^the system will show the corresponding stats$")
    public void the_system_will_show_the_corresponding_stats() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

}
