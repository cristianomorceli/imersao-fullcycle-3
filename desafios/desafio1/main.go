package main

import (
	"html/template"
	"log"
	"net/http"
)

var templates *template.Template

func main() {

	templates = template.Must(template.ParseGlob("templates/*.html"))

	http.HandleFunc("/", HomePage)
	//http.ListenAndServe(":8080", nil)

	log.Fatal(http.ListenAndServe(":8080", nil))
}

func HomePage(w http.ResponseWriter, r *http.Request) {
	templates.ExecuteTemplate(w, "home.html", nil)

	//fmt.Fprintf(w, "This is the Home page!")
}
