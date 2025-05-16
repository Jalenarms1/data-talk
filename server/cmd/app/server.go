package main

import (
	"net/http"

	"github.com/Jalenarms1/server/data-talk/internal/user"
	"github.com/Jalenarms1/server/data-talk/types"
)

func registerRoutes(mux *http.ServeMux) {
	mux.HandleFunc("POST /api/user", handleRouteErr(user.HandleNewUser))

}

func useCors(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Add("Access-Control-Allow-Origin", "*")
		w.Header().Add("Access-Controll-Allow-Methods", "GET,POST,PUT,OPTIONS")
		w.Header().Add("Access-Control-Allow-Headers", "Content-Type, Authorization")
		w.Header().Add("Access-Control-Allow-Credentials", "true")

		if r.Method == http.MethodOptions {
			w.WriteHeader(200)
			return
		}

		next.ServeHTTP(w, r)

	})
}

func handleRouteErr(fn types.ErrHttpHandler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if err := fn(w, r); err != nil {
			http.Error(w, err.Err.Error(), err.Code)
		}
	}
}
