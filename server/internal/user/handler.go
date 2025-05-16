package user

import (
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"

	"github.com/Jalenarms1/server/data-talk/db"
	"github.com/Jalenarms1/server/data-talk/types"
)

func HandleNewUser(w http.ResponseWriter, r *http.Request) *types.HttpError {

	body, err := io.ReadAll(r.Body)
	if err != nil {
		return &types.HttpError{
			Code: http.StatusBadRequest,
			Err:  errors.New("error ocurred reading the data"),
		}
	}
	defer r.Body.Close()

	var createUserParams CreateUserParams
	err = json.Unmarshal(body, &createUserParams)
	if err != nil {
		return &types.HttpError{
			Code: http.StatusBadRequest,
			Err:  errors.New("invalid data"),
		}
	}

	fmt.Println(createUserParams)

	_, err = db.DB.NamedExec("insert into users (id, name, email, password) values (:id, :name, :email, :password)", &createUserParams)
	if err != nil {
		return &types.HttpError{
			Err:  errors.New("unable to process data"),
			Code: http.StatusBadRequest,
		}
	}
	w.WriteHeader(200)
	w.Write([]byte("Hello"))

	return nil
}
