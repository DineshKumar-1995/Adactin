package com.adactin.baseclass;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

public class BaseClass {

	public static WebDriver driver;
	public static JavascriptExecutor js;

	public static WebDriver browserLaunch(String browsername) {

		try {
			if (browsername.equalsIgnoreCase("chrome")) {
				System.setProperty("webdriver.chrome.driver",
						System.getProperty("user.dir") + "\\Driver\\chromedriver.exe");
				driver = new ChromeDriver();

			} else if (browsername.equalsIgnoreCase("firefox")) {
				System.setProperty("webdriver.gecko.driver",
						System.getProperty("user.dir") + "\\Driver\\geckodriver.exe");
				driver = new FirefoxDriver();

			} else if (browsername.equalsIgnoreCase("ie")) {
				System.setProperty("webdriver.ie.driver",
						System.getProperty("user.dir") + "\\Driver\\IEDriverServer.exe");
				driver = new InternetExplorerDriver();

			} else {
				System.out.println("Invalid browsername");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		driver.manage().window().maximize();

		return driver;

	}

	public static void getUrl(String url) {
		driver.get(url);
	}

	public static void dropDown(WebElement element, String option, String value) {

		Select s = new Select(element);
		try {
			if (option.equals("index")) {
				s.selectByIndex(Integer.parseInt(value));
			} else if (option.equals("value")) {
				s.selectByValue(value);
			} else if (option.equals("text")) {
				s.selectByVisibleText(value);
			}
		} catch (NumberFormatException e) {
			e.printStackTrace();
		}
	}

	public static void inputOnElement(WebElement element, String value) {
		element.sendKeys(value);
	}

	public static void clickOnElement(WebElement element) {
		element.click();
	}

	public static void screenshot(String name) throws IOException {
		TakesScreenshot ts = (TakesScreenshot) driver;
		File srcfile = ts.getScreenshotAs(OutputType.FILE);
		File destfile = new File(System.getProperty("user.dir")+"\\ScreenShot\\" + name + ".png");
		FileUtils.copyFile(srcfile, destfile);

	}

	public static void down() throws InterruptedException {

		WebElement logo = driver.findElement(By.xpath("(//div[contains(@class,'navFooterLine')])[2]"));
		js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView();", logo);
		Thread.sleep(2000);

	}

	public static void close() {
		driver.close();

	}

	public static void scrollUpDownProcess(int side, int down) throws InterruptedException {
		js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(" + side + "," + down + ")");
		Thread.sleep(2000);
	}

	public static void isEnabled(WebElement elament) {

		elament.isEnabled();
	}

	public static void isSelected(WebElement elament) {

		elament.isSelected();
	}

	public static void isDisplayed(WebElement elament) {

		elament.isDisplayed();
	}

	public static void navigateTo(String url) {

		driver.navigate().to(url);

	}

	public static void back() {

		driver.navigate().back();

	}

	public static void forward() {

		driver.navigate().forward();

	}

	public static void refresh() {

		driver.navigate().refresh();

	}

	
	public static void mouseoverAction(WebElement elament,String option) {
		Actions ac=new Actions(driver);
		
		try {
			if (option.equalsIgnoreCase("rightclick")) {
				ac.contextClick(elament).build().perform();			
				
			}
			else if (option.equalsIgnoreCase("doubleclick")) {
				ac.doubleClick(elament).build().perform();			
				
			}
			else if (option.equalsIgnoreCase("move")) {
				ac.moveToElement(elament).build().perform();
			}
			else {
				System.out.println("Invalide Option");
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	public static void alertBox(String option) {

		Alert alert=driver.switchTo().alert();
		if (option.equalsIgnoreCase("Accept")) {
			alert.accept();			
		}
		else if (option.equalsIgnoreCase("Cancel")) {
			alert.dismiss();
		}
	}
	
	public static void alertWithText(String text) {

		Alert alert=driver.switchTo().alert();
		alert.sendKeys(text);
		alert.accept();
	}

	public static void currentUrl() {
		
		String currentUrl = driver.getCurrentUrl();
		System.out.println(currentUrl);
	}
	
	public static void getTittle() {
		
		driver.getTitle();
		// TODO Auto-generated method stub

	}
	
	
	
	
	
	
	
}
