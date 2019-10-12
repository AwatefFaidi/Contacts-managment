package org.sid.dao;

import org.sid.entities.contact;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ContactRepository extends JpaRepository<contact,Long> {
@Query("select c from contact c where c.nom like :x")
	public Page<contact> chercher(@Param("x")String mc, Pageable pageable );
}
