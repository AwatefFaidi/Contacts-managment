package org.sid;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.sid.dao.ContactRepository;
import org.sid.entities.contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	@Autowired
	private ContactRepository conatctrepository;
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		DateFormat df= new  SimpleDateFormat("dd/MM/yyyy");
		contact cp=new contact("alaa","brahim",df.parse("15/12/1998"),"alaa@gmail.com",28975641,"alaa.jpeg");
		conatctrepository.save(cp);
		contact cp1=new contact("awatef","brahim",df.parse("15/12/1998"),"awate@gmail.com",28975641,"awatef.jpeg");
		conatctrepository.save(cp1);
		contact cp2=new contact("salama","fedidi",df.parse("15/12/1998"),"alaa@gmail.com",28975641,"alaa.jpeg");
		conatctrepository.save(cp2);
		conatctrepository.findAll().forEach(c->{
			
		System.out.println(c.getNom());
		});
		
	}

}
