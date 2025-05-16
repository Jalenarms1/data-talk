package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/Jalenarms1/server/data-talk/db"
	"github.com/joho/godotenv"
)

func init() {
	if err := godotenv.Load(); err != nil {
		log.Fatal(err)
	}

	if err := db.SetDb(); err != nil {
		log.Fatal(err)
	}
}

func main() {
	fmt.Println("hello there")

	mux := http.NewServeMux()

	corsMux := useCors(mux)

	registerRoutes(mux)

	fmt.Printf("Listening at http://localhost%s", ":9988")
	log.Fatal(http.ListenAndServe(":9988", corsMux))
}
