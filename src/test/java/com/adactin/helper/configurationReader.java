package com.adactin.helper;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class configurationReader {
	public static Properties ps;
	
	public configurationReader() throws IOException {
		
		File f=new File(System.getProperty("user.dir")+"\\src\\test\\java\\com\\adactin\\configuration\\configuration.properties");
		FileInputStream fis=new FileInputStream(f);
		ps=new Properties();
		ps.load(fis);		
	}
	
	public static String browsername() {
		
		String browsername = ps.getProperty("browsername");
		return browsername;
	}
	
	public static String getUrl() {
	
		String url = ps.getProperty("url");
		return url;
	}

}
