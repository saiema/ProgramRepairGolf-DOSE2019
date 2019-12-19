package unrc.dose;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;
import org.junit.BeforeClass;
import org.junit.AfterClass;

import org.javalite.activejdbc.Base;
import org.javalite.activejdbc.DB;
import spark.Spark;

import unrc.dose.User;
import org.junit.Test;


public class InsertTest {
	
	
	@Test
	public void insert() {
		if (!Base.hasConnection()) {
	      	Base.open();
	      	Base.openTransaction();
	       	if( !User.userExistsByUsername("Mariana")) {
	       		User.set("Mariana" , "1234" , "mari@gmail.com" , false);	
	       	}
	       	
	       	Base.close();
	    }
	}
	
}
