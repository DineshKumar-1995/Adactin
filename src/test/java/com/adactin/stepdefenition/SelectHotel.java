package com.adactin.stepdefenition;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.helper.PageObjectManager;
import com.adactin.pom.SelectHotelPage;

import cucumber.api.java.en.*;

public class SelectHotel extends BaseClass{

	public static PageObjectManager pom=new PageObjectManager(driver);

	
	@When("^user select valid hotel$")
	public void user_select_valid_hotel() throws Throwable {
	   
		clickOnElement(pom.getShp().getSelect());
		
	}

	@Then("^user verify the selection in the selecthotelpage$")
	public void user_verify_the_selection_in_the_selecthotelpage() throws Throwable {
	    
		clickOnElement(pom.getShp().getCont());

	}


}
