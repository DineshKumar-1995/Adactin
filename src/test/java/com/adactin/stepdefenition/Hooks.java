package com.adactin.stepdefenition;

import java.io.IOException;

import org.openqa.selenium.TakesScreenshot;

import com.adactin.baseclass.BaseClass;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BaseClass{
	
	@Before
	public void beforScenario(Scenario scenario) {

		System.out.println("Scenario Name: "+scenario.getName());		
		
	}
	
	@After
	public void afterScenario(Scenario scenario) throws IOException {
		
		if (scenario.isFailed()) {
			String id = scenario.getId();
			screenshot(id);					
		}
		String status = scenario.getStatus();
		System.out.println(status);
		
	}
	
	

}
