package unrc.dose;

import static org.junit.Assert.*;

import org.javalite.activejdbc.Base;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

public class UserProfileTest {
	
	User newUser = User.set("Enzo" , "Ferrari" , "F40@gmail.com" , false);
	
	@BeforeClass
	
  	public static void beforeAll() {
		
  		if (!Base.hasConnection()) {
	      	Base.open();
	      	Base.openTransaction(); 
	      	
	    }
  	}
	
	@AfterClass
  	public static void tearDown() {
    	Base.rollbackTransaction();
    	Base.close();
	}

	/**
	 * Test that proves that display name and twitter id of a given user are correct
	 */
	@Test
	public void testSetGetCorrect() {
		
		UserProfile up = UserProfile.createUserProfile(newUser.getId(),"Enzo","@Enzo");
		assertEquals("Enzo",up.getDisplayName());
		assertEquals("@Enzo",up.getTwitterId());
			
	}
	/**
	 * Test that proves that display name a given user is not correct
	 */
	@Test
	public void testDisplayNameIncorrect() {
		try {
			
		     UserProfile.createUserProfile(newUser.getId(),"Enzo22","@Enzo");
			 fail("expected IllegalArgumentException");
			  } catch(IllegalArgumentException e) {}
		}
	/**
	 * Test that proves that twitter id a given user is not correct
	 */
	@Test
	public void testTwitterIdIncorrect() {
		try {
			
			 UserProfile.createUserProfile(newUser.getId(),"Enzo","MLEnzo");
			 fail("expected IllegalArgumentException");
			  } catch(IllegalArgumentException e) {}
	}
	/**
	 * Test that proves that user is not exist
	 */
	@Test
	public void testUserIdIsNull() {
		try {
			UserProfile.createUserProfile(null,"Enzo","MLEnzo");
			fail("expected IllegalArgumentException");
			  } catch(IllegalArgumentException e) {}
		}
		
			
}
