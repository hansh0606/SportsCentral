package net.javaguides.springboot.model;

import jakarta.persistence.*;

@Entity
@Table(name = "events")
public class Event{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "event_name")
	private String eventname;

	@Column(name = "sport_name")
	private String sportname;
	
	@Column(name = "date")
	private String date;

	@Column(name = "time")
	private String time;

	@Column(name = "venue")
	private String venue;

	
	public Event() {
		
	}
	
	public Event(String eventName, String SportName, String Date, String Time, String Venue) {
		super();
		this.eventname = eventName;
		this.sportname = SportName;
		this.date = Date;
		this.time = Time;
		this.venue = Venue;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getEventName() {
		return eventname;
	}
	public void setEventName(String firstName) {
		this.eventname = firstName;
	}
	public String getSportName() {
		return sportname;
	}
	public void setSportName(String lastName) {
		this.sportname = lastName;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String emailId) {
		this.date = emailId;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String emailId) {
		this.time = emailId;
	}
	public String getVenue() {
		return venue;
	}
	public void setVenue(String emailId) {
		this.venue = emailId;
	}
}
