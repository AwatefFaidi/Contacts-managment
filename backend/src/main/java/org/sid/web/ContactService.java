package org.sid.web;

import java.util.List;

import org.sid.dao.ContactRepository;
import org.sid.entities.contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin("*")
@RestController
public class ContactService 
{
	@Autowired
	private ContactRepository contactrepository;
	
 @RequestMapping(value="/contacts", method=RequestMethod.GET)
	public List<contact> getcontacts(){
        
		return contactrepository.findAll();
	}
		
               
	@RequestMapping(value="/contacts/{id}", method=RequestMethod.GET)
public contact getcontact(@PathVariable (value="id") Long id){
 return contactrepository.findById(id).get();
}
    
@RequestMapping(value="/contacts", method=RequestMethod.POST)
public  contact save(@RequestBody  contact c){
return contactrepository.save(c);
}
@RequestMapping(value="/contacts/{id}", method=RequestMethod.DELETE)
public boolean supprimer(@PathVariable (value="id") Long id){
  contactrepository.deleteById(id);
  return true;
}
@RequestMapping(value="/contacts/{id}", method=RequestMethod.PUT)
public  contact update(@PathVariable (value="id") Long id ,@RequestBody  contact c){
	c.setId(id);
return contactrepository.save(c);
}
@RequestMapping(value="/cherchercontacts", method=RequestMethod.GET)
public Page<contact> chercher( @RequestParam(name="mc", defaultValue="")String mc, 
		@RequestParam(name="page", defaultValue="0")int page,
		@RequestParam(name="size", defaultValue="5")int size){
 return contactrepository.chercher("%"+mc+"%",new PageRequest(page,size));
}
}