package com.codegreenllc.react.entity;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.PostPersist;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Version;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.domain.Persistable;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;

/**
 * Abstract base class for entities that can be persisted.
 */
@MappedSuperclass
@Data
@Slf4j
@Component
public class PersistableImpl implements Persistable<String> {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(generator = "system-uuid")
	@GenericGenerator(name = "system-uuid", strategy = "uuid")
	private String id;

	@Version
	private long version;

	@Override
	public boolean isNew() {
		return this.id == null;
	}

	@PrePersist
	public void perPersist() {
		log.info("@PrePersist");
	}

	@PreUpdate
	public void perUpdate() {
		log.info("@PreUpdate");
	}
	@PostPersist
	public void postPersist() {
		log.info("@PostPersist "+ this);
	}
}
