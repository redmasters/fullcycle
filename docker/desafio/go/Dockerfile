FROM golang:1.20-alpine AS buildando

ADD . /src

WORKDIR /src

RUN go mod init goapp && go build -o goapp

FROM alpine:latest

WORKDIR /app

COPY --from=buildando /src/goapp /app

ENTRYPOINT ./goapp
