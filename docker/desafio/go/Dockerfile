FROM golang:alpine AS buildando

WORKDIR /src
COPY . .

RUN go build -o /src goapp.go

FROM scratch

WORKDIR /

COPY --from=buildando /src/goapp /app

EXPOSE 8080
ENTRYPOINT ["/app"]
