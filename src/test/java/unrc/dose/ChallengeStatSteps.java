package unrc.dose;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import unrc.dose.StepUtils;
import unrc.dose.User;
import unrc.dose.ChallengeStat;
import unrc.dose.Challenge;

public class ChallengeStatSteps extends StepUtils{
    private static User u = new User();
    private static Challenge ch = new Challenge();
    private static ChallengeStat cSt = new ChallengeStat();
    private static double statistics;
    private static int resolved;

    @Given("^the user \"([^\"]*)\" with id (\\d+) has already logged in$")
    public boolean the_user_with_id_has_already_logged_in(String arg1, int arg2) {
        u = User.findFirst("id = ?", arg2);
        return u != null;
    }

    @Given("^exists a challenge with id (\\d+)$")
    public boolean exists_a_challenge_with_id(int arg1) {
        ch = Challenge.findFirst("id = ?", arg1);
        return ch != null;
    }

    @Given("^it was solved by a least one user$")
    public boolean it_was_solved_by_a_least_one_user() {
        cSt = ChallengeStat.findFirst("id = ?", ch.getId());
        return (cSt.getInteger("solved_count") > 0);
    }

    @When("^the user inputs the challenge's id (\\d+) to the system$")
    public void the_user_inputs_the_challenge_s_id_to_the_system(int arg1) {
        cSt = ChallengeStat.getChallengeStat(arg1);
        statistics = cSt.getDouble("average_score");
        resolved = cSt.getInteger("solved_count");
    }

    @Then("^the system will show the corresponding stats$")
    public void the_system_will_show_the_corresponding_stats() throws Exception {
        System.out.println("%" + statistics);
        System.out.println(resolved);
    }

}
