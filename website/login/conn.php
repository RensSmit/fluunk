<?php
	//checked of database bestaat
	if(!is_file('db/db_member.sqlite3')){
		file_put_contents('db/db_member.sqlite3', null);
	}
	// connect de database
	$conn = new PDO('sqlite:db/db_member.sqlite3');
	//attributes instellingen connecten
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	//query maken als database niet bestaat
	$query = "CREATE TABLE IF NOT EXISTS member(mem_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, username TEXT, password TEXT, firstname TEXT, lastname TEXT)";
	//query uitvouren
	$conn->exec($query);
?>