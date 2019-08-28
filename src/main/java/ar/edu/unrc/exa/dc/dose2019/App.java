package ar.edu.unrc.exa.dc.dose2019;

import static spark.Spark.*;

import java.io.IOException;

import org.apache.http.HttpException;
import org.apache.http.client.ClientProtocolException;
import spark.Request;
import spark.Response;

/**
 * Hello world!
 *
 */
public class App {

	public static void main(String[] args) throws ClientProtocolException, IOException, HttpException {

		get("/hello", (Request request, Response response) -> {
			response.status(200);
			return "Hello World";
		});

	}

}
