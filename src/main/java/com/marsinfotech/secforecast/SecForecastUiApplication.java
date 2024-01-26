package com.marsinfotech.secforecast;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.Arrays;

@SpringBootApplication
public class SecForecastUiApplication {

	private static final Logger logger = LoggerFactory.getLogger(SecForecastUiApplication.class);

	public static void main(String[] args) {
		logger.info("************************* Starting Stock price forecast UI server *************************");
		ApplicationContext appContext = SpringApplication.run(SecForecastUiApplication.class, args);
		String[] beanNames = appContext.getBeanDefinitionNames();
		Arrays.sort(beanNames);
		logger.info("Loading Java Spring Beans - found total {} beans", beanNames.length);
		for (String name: beanNames) {
			logger.info("Loading Bean: {}", name);
		}
		logger.info("************************* Application started and is READY for use *************************");
	}
}
