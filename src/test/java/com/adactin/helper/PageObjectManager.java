package com.adactin.helper;

import org.openqa.selenium.WebDriver;

import com.adactin.pom.LoginPage;
import com.adactin.pom.SearchHotelPage;
import com.adactin.pom.SelectHotelPage;
import com.adactin.pom.SelectPaymentPage;

public class PageObjectManager {
	public static WebDriver driver;
	
	private LoginPage lp;
	private SearchHotelPage sh;
	private SelectHotelPage shp;
	private SelectPaymentPage sp;
	
	public PageObjectManager(WebDriver ldriver) {
		
		this.driver=ldriver;
	}
	
	
	public LoginPage getLp() {
		lp=new LoginPage(driver);
		return lp;
	}
	public SearchHotelPage getSh() {
		sh=new SearchHotelPage(driver);
		return sh;
	}
	public SelectHotelPage getShp() {
		shp=new SelectHotelPage(driver);
		return shp;
	}
	public SelectPaymentPage getSp() {
		sp=new SelectPaymentPage(driver);
		return sp;
	}

}
