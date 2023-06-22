package com.felo.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.felo.crudspring.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

	
}
