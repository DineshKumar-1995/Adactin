package com.adactin.stepdefenition;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.helper.FileReaderManager;
import com.adactin.helper.PageObjectManager;
import com.adactin.pom.LoginPage;
import com.adactin.runner.Runner;

import cucumber.api.java.en.*;

public class Login extends BaseClass{
	
	public static WebDriver driver=Runner.driver;
	public static PageObjectManager pom=new PageObjectManager(driver);
	
	@Given("^user launch the browser$")
	public void user_launch_the_browser() throws Throwable {

		System.out.println("User Loged into the Application");
		
	}

	@When("^user enter application url$")
	public void user_enter_application_url() throws Throwable {
	  
		String url = FileReaderManager.getInstance().getCrInstance().getUrl();
		getUrl(url);
		
	}
	
	@When("^user enter DKGreens username$")
	public void user_enter_DKGreens_username() throws Throwable {
	 
		inputOnElement(pom.getLp().getUserName(), "DKGreens");
	}

	@When("^user enter greens password$")
	public void user_enter_greens_password() throws Throwable {
	   
		inputOnElement(pom.getLp().getUserName(), "greens");

	}
	
	@When("^user enter \"([^\"]*)\" as username$")
	public void user_enter_as_username(String arg1) throws Throwable {

		inputOnElement(pom.getLp().getUserName(), arg1);

	}

	@When("^user enter \"([^\"]*)\" as password$")
	public void user_enter_as_password(String arg1) throws Throwable {

		inputOnElement(pom.getLp().getPassword(), arg1);
	}

	
	@Then("^user verify the username in the homepage$")
	public void user_verify_the_username_in_the_homepage() throws Throwable {
	    
		clickOnElement(pom.getLp().getLoginBtn());

	}
	
	@When("^user enter ragu(\\d+) username$")
	public void user_enter_ragu_username(int arg1) throws Throwable {
	}

	@When("^user enter ragu(\\d+) password$")
	public void user_enter_ragu_password(int arg1) throws Throwable {
	}

}
