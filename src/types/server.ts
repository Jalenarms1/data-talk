

export type ServerConfig = {
    rootUrl: string,
    allowedDomains: string[],
    allowedHeaders: HttpHeader[],
    allowedMethods: HttpMethod[],
    contentTypes: ContentType[]
}

export enum ContentType {
    JSON = "application/json",
    FORM_URLENCODED = "application/x-www-form-urlencoded",
    FORM_DATA = "multipart/form-data",
    TEXT = "text/plain",
    HTML = "text/html",
    XML = "application/xml",
    OCTET_STREAM = "application/octet-stream"
}

export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
    OPTIONS = "OPTIONS",
    HEAD = "HEAD"
}

export enum HttpHeader {
    AUTHORIZATION = "Authorization",
    CONTENT_TYPE = "Content-Type",
    ACCEPT = "Accept",
    USER_AGENT = "User-Agent",
    CACHE_CONTROL = "Cache-Control",
    X_REQUESTED_WITH = "X-Requested-With",
    ORIGIN = "Origin",
    HOST = "Host"
}
  