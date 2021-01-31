package unrc.dose;

import static org.junit.Assert.*;

import org.javalite.activejdbc.Base;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

public class UserProfileTest {
	
	
	
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
		User newUser = User.set("Enzo" , "Ferrari" , "F40@gmail.com" , false);
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
			User newUser = User.set("Mari" , "Laura" , "Marilau0@gmail.com" , false);
		     UserProfile.createUserProfile(newUser.getId(),"Mari20","@Mari");
			 fail("expected IllegalArgumentException");
			  } catch(IllegalArgumentException e) {}
		}
	/**
	 * Test that proves that twitter id a given user is not correct
	 */
	@Test
	public void testTwitterIdIncorrect() {
		try {
			User newUser = User.set("Clau" , "Velez" , "ClauVe@gmail.com" , false);
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
