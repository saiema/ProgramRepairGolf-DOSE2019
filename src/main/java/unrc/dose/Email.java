package unrc.dose;

import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.*;

/**
* Email class is for send an email with new password to a user.
*/

public class Email {

	/**
	* The value of HOST is {@value}.
	*/
	private static String HOST = "smtp.gmail.com";
	/**
	* The value of PORT is {@value}.
	*/
	private static String PORT = "587";
	/**
	* The value of DIREMAIL is {@value}.
	*/
	private static String DIREMAIL = "noreply.programgolf1";
	/**
	* The value of PASSWORD is {@value}.
	*/
	private static String PASSWORD = "dose2019";

	public static void sendMail(final String code, final String to) {
		Properties prop = new Properties();
		prop.put("mail.smtp.auth", true);
		prop.put("mail.smtp.starttls.enable", "true");
		prop.put("mail.smtp.host", HOST);
		prop.put("mail.smtp.port", PORT);
		prop.put("mail.smtp.ssl.trust", HOST);
		prop.put("mail.smtp.user", DIREMAIL);
		prop.put("mail.smtp.password", PASSWORD);

		Session session = Session.getDefaultInstance(prop);
		MimeMessage message = new MimeMessage(session);
		try {
			message.setFrom(new InternetAddress("titulo?"));
			InternetAddress toAddress = new InternetAddress(to);

			message.addRecipient(Message.RecipientType.TO, toAddress);

			message.setSubject("Recuperar contraseña "); // poner la enie
			message.setContent("<h3>Buen dia</h3> \n Su nueva password temporal es la siguiente:  [<b>" + code + "</b>]", "text/html");
			Transport transport = session.getTransport("smtp");
			transport.connect(HOST, DIREMAIL, PASSWORD);
			transport.sendMessage(message, message.getAllRecipients());
			transport.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
