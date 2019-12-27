package com.adactin.stepdefenition;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.helper.PageObjectManager;
import com.adactin.pom.SelectPaymentPage;

import cucumber.api.java.en.*;

public class SelectPayment extends BaseClass {
	
	public static PageObjectManager pom=new PageObjectManager(driver);

	
	@When("^user enter valid firstname$")
	public void user_enter_valid_firstname() throws Throwable {
	    
		inputOnElement(pom.getSp().getFname(), "Dinesh");   
	}

	@When("^user enter valid lastname$")
	public void user_enter_valid_lastname() throws Throwable {
	    
		inputOnElement(pom.getSp().getLname(), "Kumar");
	    
	}

	@When("^user enter valid address$")
	public void user_enter_valid_address() throws Throwable {

		inputOnElement(pom.getSp().getAddress(), "Adyar");
	    
	}

	@When("^user enter valid creditcardnum$")
	public void user_enter_valid_creditcardnum() throws Throwable {

		inputOnElement(pom.getSp().getCreditcardnum(), "5553 0422 4198 4105");
	    
	}

	@When("^user select valid creditcardtype$")
	public void user_select_valid_creditcardtype() throws Throwable {

		dropDown(pom.getSp().getCreditcardtype(), "value", "MAST");
	    
	}

	@When("^user select valid eMonth$")
	public void user_select_valid_eMonth() throws Throwable {

		dropDown(pom.getSp().geteMonth(), "value", "5");
	    
	}

	@When("^user select valid eYear$")
	public void user_select_valid_eYear() throws Throwable {

		dropDown(pom.getSp().geteYear(), "value", "2022");
	    
	}

	@When("^user enter valid ccvnum$")
	public void user_enter_valid_ccvnum() throws Throwable {

		inputOnElement(pom.getSp().getCcvnum(), "622");
	    
	}


	@When("^user verify the booknow in the paymentpages$")
	public void user_verify_the_booknow_in_the_paymentpages() throws Throwable {

		clickOnElement(pom.getSp().getBooknow());
		Thread.sleep(8000);
	    
	}
	
	@Then("^user verify logoutoption$")
	public void user_verify_logoutoption() throws Throwable {

		clickOnElement(pom.getSp().getLogout());
	    
	}



}
