package db

import (
	"fmt"
	"os"

	"github.com/jmoiron/sqlx"
	_ "github.com/tursodatabase/libsql-client-go/libsql"
)

var DB *sqlx.DB

func SetDb() error {
	token := os.Getenv("DB_TOKEN")
	dbUrl := os.Getenv("DB_URL")
	var err error
	DB, err = sqlx.Connect("libsql", fmt.Sprintf("%s%s", dbUrl, token))
	if err != nil {
		return err
	}

	return DB.Ping()

}
