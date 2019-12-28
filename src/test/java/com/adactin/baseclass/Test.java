package com.adactin.baseclass;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.IOException;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Test extends BaseClass {

	public static WebDriver driver;

	public static void main(String[] args) throws AWTException, InterruptedException, IOException {
		driver = browserLaunch("chrome");
		getUrl("https://www.amazon.com");
		Robot r = new Robot();
		
		WebElement todayDeals = driver.findElement(By.xpath("(//a[@class='nav-a  '])[1]"));
		mouseoverAction(todayDeals, "rightclick");
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyRelease(KeyEvent.VK_DOWN);
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);
		Thread.sleep(2000);
		
		WebElement help = driver.findElement(By.xpath("(//a[@class='nav-a  '])[2]"));
		mouseoverAction(help, "rightclick");
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyRelease(KeyEvent.VK_DOWN);
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);
		Thread.sleep(2000);
		
		WebElement registry = driver.findElement(By.xpath("(//a[@class='nav-a  '])[3]"));
		mouseoverAction(registry, "rightclick");
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyRelease(KeyEvent.VK_DOWN);
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);
		Thread.sleep(2000);
		
		WebElement giftcard = driver.findElement(By.xpath("(//a[@class='nav-a  '])[4]"));
		mouseoverAction(giftcard, "rightclick");
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyRelease(KeyEvent.VK_DOWN);
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);
		Thread.sleep(2000);
		
		WebElement sell = driver.findElement(By.xpath("(//a[@class='nav-a  '])[5]"));
		mouseoverAction(sell, "rightclick");
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyRelease(KeyEvent.VK_DOWN);
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);
		Thread.sleep(2000);
		
		WebElement login = driver.findElement(By.xpath("(//a[@class='nav-a  '])[6]"));
		mouseoverAction(login, "rightclick");
		r.keyPress(KeyEvent.VK_DOWN);
		r.keyRelease(KeyEvent.VK_DOWN);
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);
		Thread.sleep(2000);
		
		String actual="Amazon Sign-In";
		
		Set<String> windowHandles = driver.getWindowHandles();
		for (String string : windowHandles) {
			driver.switchTo().window(string);
			System.out.println(string);
			String title = driver.getTitle();
			System.out.println(title);	
			if (driver.getTitle().equals(actual)) {
				break;
			}
		}
		
		screenshot("login1");
		//driver.close();
	}

}
