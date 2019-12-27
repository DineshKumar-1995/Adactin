package com.adactin.stepdefenition;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BaseClass;
import com.adactin.helper.PageObjectManager;
import com.adactin.pom.SearchHotelPage;

import cucumber.api.java.en.*;

public class SearchHotel extends BaseClass{

	public static PageObjectManager pom=new PageObjectManager(driver);

	
	@Given("^user select valid location$")
	public void user_select_valid_location() throws Throwable {
		dropDown(pom.getSh().getLocation(), "text", "New York");
	}

	@When("^user select valid hotal$")
	public void user_select_valid_hotal() throws Throwable {
	    dropDown(pom.getSh().getHotel(), "text", "Hotel Creek");
	    
	}

	@When("^user select valid numbertype$")
	public void user_select_valid_numbertype() throws Throwable {
	    dropDown(pom.getSh().getRoom(), "text", "Super Deluxe");	    
	}

	@When("^user select valid numberofrooms$")
	public void user_select_valid_numberofrooms() throws Throwable {
	    dropDown(pom.getSh().getNrooms(), "index", "1");	    
	}

	@When("^user enter valid checkin$")
	public void user_enter_valid_checkin() throws Throwable {
		inputOnElement(pom.getSh().getCheckIn(), "01/01/2020");	    
	}

	@When("^user enter valid checkout$")
	public void user_enter_valid_checkout() throws Throwable {
		inputOnElement(pom.getSh().getCheckOut(), "05/01/2020");	    
	}

	@When("^user select valid adults$")
	public void user_select_valid_adults() throws Throwable {
		dropDown(pom.getSh().getAdults(), "index", "2");	    
	}

	@When("^user select valid child$")
	public void user_select_valid_child() throws Throwable {
		dropDown(pom.getSh().getChilds(), "index", "2");	    
	}

	@Then("^user verify the search in the searchhotelpage$")
	public void user_verify_the_search_in_the_searchhotelpage() throws Throwable {
		clickOnElement(pom.getSh().getSearch());	    
	}

	
	

}
