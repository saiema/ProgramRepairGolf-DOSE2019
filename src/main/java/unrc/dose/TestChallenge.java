package unrc.dose;

import unrc.dose.Challenge;
import org.javalite.activejdbc.Model;

/*	
Atributos de la tabla:
    id integer not null auto_increment primary key,
    challenge_id integer not null,
    test varchar(1000) not null
*/
public class TestChallenge extends Model {

    public TestChallenge() {}

    public int getChallengeId(){    
        return getInteger("challenge_id");
    }

    public void setChallengeId(int challenge_id){
        set("challenge_id",challenge_id);
    }

    public String getTest(){    
        return getString("test");
    }

    public void setTest(String test){
        set("test",test);
    }

    public boolean validateTestChallenge(Challenge c){
        return true;
    }

    public static TestChallenge addTestChallenge(int challenge_id, String test){
        TestChallenge t = new TestChallenge();
        t.setChallengeId(challenge_id);
        t.setTest(test);
        t.saveIt();
        return t;
    }
}