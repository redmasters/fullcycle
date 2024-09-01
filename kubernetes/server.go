package main
import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
)



func main() {
  http.HandleFunc("/configmap", ConfigMap)
  http.HandleFunc("/", Hello)
  http.ListenAndServe(":8000", nil)
}


func Hello(w http.ResponseWriter, r *http.Request) {

  name1:= os.Getenv("NAME1")
  name2:= os.Getenv("NAME2")

  fmt.Fprintf(w, "%s e %s sao duas angels", name1, name2)

}

func ConfigMap(w http.ResponseWriter, r *http.Request) {

  data, err := ioutil.ReadFile("/myfamily/myfamily.txt")
  if err != nil {
    fmt.Println("File reading error", err)
  } 

  fmt.Fprintf(w, "My family: %s.", string(data))

}
