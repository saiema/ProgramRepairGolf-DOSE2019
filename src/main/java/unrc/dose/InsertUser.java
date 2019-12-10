package unrc.dose;


import org.javalite.activejdbc.Base;
import org.javalite.activejdbc.Model;

/** insert user inserta un nuevo usuario en la tabla users
 * 
 * @author mariana
 *
 */
public class InsertUser extends Model {
	
		
		public static void main(String[] args) {
	  		if (!Base.hasConnection()) {
		      	Base.open();
		      	Base.openTransaction();
		       	User.set("Enzo" , "Ferrari" , "F40@gmail.com" , false);
		       	User.set("Mario","Primero","Mario@gmail.com",true);
		       	User.set("Sonia" , "Sonia22" , "Sonia@gmail.com" , false);
		       	User.set("Camila" , "Cami34" , "Camila@gmail.com" , false);
		       	User.set("Diego" , "Dito" , "Dieguito0@gmail.com" , false);
		       	Base.close();
		    }
	  	}
		
	  	
}
		

	