package unrc.dose;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.util.List;

import org.javalite.activejdbc.Base;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

/**
 * Class to test the Challenge class methods.
 * @author Brusati Formento, Matias
 * @author Cuesta, Alvaro
 */
public class ChallengeTest {

	@BeforeClass
	public static void before(){
		if (!Base.hasConnection()) {
			Base.open();
			System.out.println("CompilationChallengeTest setup");
			Base.openTransaction();
		}
		
		User u = new User();
		u.set("username", "test");
		u.set("password", "1234");
		u.set("email_address", "test@example.com");
		u.saveIt();

		Challenge.addChallenge(u.getInteger("id"), "Test", "Test", "description", "source", 100, 0);
		Challenge.addChallenge(u.getInteger("id"), "Test1", "Test1", "description", "source", 100, 0);
		Challenge.addChallenge(u.getInteger("id"), "Test2", "Test2", "description", "source", 100, 0);
		Challenge.addChallenge(u.getInteger("id"),"Test3", "Test3", "description", "source", 100, 0);
		Challenge c = Challenge.findFirst("title = ?", "Test");

		Proposition p = new Proposition();
		p.set("user_id", u.getId());
		p.set("challenge_id", c.getId());
		p.set("source","//");
		p.set("isSubmit", 1);
		p.saveIt();
	}


	@AfterClass
	public static void after(){
		if (Base.hasConnection()) {
			Base.rollbackTransaction();
			System.out.println("ChallengeTest tearDown");
			Base.close();
		}  
	}

	/**
	 * Test methods for set and get.
	 */
	@Test
	public void setAndGetTest() {
		Challenge challenge = new Challenge();
		challenge.setUserId(2);
		challenge.setTitle("Hello Word");
		challenge.setClassName("HelloWord");
		challenge.setDescription("Test Hello Word");
		challenge.setSource("System.out.println('Hello Word')");
		challenge.setPoint(100);
		challenge.setOwnerSolutionId(6);
		challenge.saveIt();
		assertEquals(2,challenge.getUserId());
		assertEquals("Hello Word",challenge.getTitle());
		assertEquals("HelloWord", challenge.getClassName());
		assertEquals("Test Hello Word",challenge.getDescription());
		assertEquals("System.out.println('Hello Word')",challenge.getSource());
		assertEquals(100,challenge.getPoint());
		assertEquals(6,challenge.getOwnerSolutionId());
	}

	/**
	 * Test method for addChallenge.
	 */
	@Test
	public void addChallengeTest() {
		Challenge challenge = new Challenge();
		int userId = 1; 
		String title= "Hello Word";
		String nameClass = "HelloWord1";
		String description = "Test Hellos Word";
		String source = "System.out.println('Hello Word')";
		int point = 100;
		int ownerSolutionId = 9;
		challenge = Challenge.addChallenge(userId,nameClass,title,description,source,point,ownerSolutionId);
		challenge.saveIt();
		assertEquals(1,challenge.getUserId());
	}

	/**
	 * Test method for addTestChallenge.
	 */
	@Test
	public void addTestChallengeTest() {
		int userId = 32; 
		String title= "Hello Word";
		String nameClass = "HelloWord2";
		String description = "Test Hellos Word";
		String source = "System.out.println('Hello Word')";
		int point = 52;
		int ownerSolutionId = 3;
		String test = "this is a challenge test";
		boolean validation = Challenge.addTestChallenge(userId,title,nameClass,description,source,point,ownerSolutionId,test);
		assertEquals(true,validation);
	}

	/**
	 * Test method for addCompilationChallenge.
	 */
	@Test
	public void addCompilationChallengeTest() {
		int userId = 32; 
		String title= "Hello Word";
		String nameClass = "HelloWord3";
		String description = "Test Hellos Word";
		String source = "System.out.println('Hello Word')";
		int point = 52;
		int ownerSolutionId = 3;
		boolean validate = Challenge.addCompilationChallenge(userId,title,nameClass,description,source,point,ownerSolutionId);
		assertEquals(true,validate);
	}

	/**
	 * Test method for deleteChallenge.
	 */
	@Test
	public void deleteChallengeTest() {
		Challenge challenge = new Challenge();
		int userId = 5; 
		String title= "Hello Word";
		String nameClass = "HelloWord4";
		String description = "Test Hellos Word";
		String source = "System.out.println('Hello Word')";
		int point = 300;
		int ownerSolutionId = 10;
		challenge = Challenge.addChallenge(userId,title,nameClass,description,source,point,ownerSolutionId);
		challenge.saveIt();
		Challenge.deleteChallenge(challenge);
		assertEquals(null,Challenge.findFirst("title = ?",title));   
	} 

	/**
	 * Test method for viewUserAssociatedChallange.
	 */
	@Test
	public void viewUserAssociatedChallangeTest() {
		User username  = User.findFirst("username = ?", "test");
		int id = username.getInteger("id");
		List<Challenge> all = Challenge.viewUserAssociatedChallange(id);
		String resul = all.get(0).getString("title");
		String resul1 = all.get(1).getString("title");
		String resul2 = all.get(2).getString("title");
		String resul3 = all.get(3).getString("title");
		assertEquals(4, all.size());
		assertEquals("Test", resul);
		assertEquals("Test1", resul1);
		assertEquals("Test2", resul2);
		assertEquals("Test3", resul3);
	}

	/**
	 * Test method for generateFileJava.
	 */
	@Test
	public void generateFileJavaTest() {
		String name = "TestGenerateFile";
		String source = "    public static void main(String[] args) {\n";
			   source+= "        System.out.println("+"\"TestGenerateFile\""+");\n";
			   source+= "    }\n";
		boolean obtained = Challenge.generateFileJava(name, source);
		assertTrue(obtained);
	}

	/**
	 * Test method for runCompilation.
	 */
	@Test
	public void runCompilationTest() {
		String nameFile = "TestCompilation";
		String source = "    public static void main(String[] args) {\n";
			   source+= "        System.out.println("+"\"Test Compilation\""+");\n";
			   source+= "    }\n";
		Challenge.generateFileJava(nameFile, source);
		boolean obtained = Challenge.runCompilation(nameFile);
		assertEquals(true, obtained);
	}

	/**
	 * Test method for runJava.
	 */
	@Test
	public void runJavaTest() {
		String nameFile = "TestRunJava";
		String source = "    public static void main(String[] args) {\n";
			   source+= "        System.out.println("+"\"Test RunJava\""+");\n";
			   source+= "    }\n";
		Challenge.generateFileJava(nameFile, source);
		Challenge.runCompilation(nameFile);
		boolean obtained = Challenge.runJava(nameFile);
		assertEquals(true, obtained);
	}

	/**
	 * Test method for checkUnsolvedChallenge.
	 */
	@Test
	public void checkUnsolvedChallengeTest() {
		Challenge c = Challenge.findFirst("title = ?", "Test");
		try{
			Challenge.checkUnsolvedChallenge(c.getInteger("id"));
			fail();
		} catch (RuntimeException ex) {
			assertEquals(Challenge.CHALLENGE_RESOLVED, ex.getMessage());
		}
	}

}
