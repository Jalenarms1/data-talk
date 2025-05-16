package types

import "net/http"

type HttpError struct {
	Code int   `json:"code"`
	Err  error `json:"err"`
}

type ErrHttpHandler func(w http.ResponseWriter, r *http.Request) *HttpError
