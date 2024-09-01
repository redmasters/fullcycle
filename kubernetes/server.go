package main
import "net/http"
import "fmt"
import "os"


func main() {
  http.HandleFunc("/", Hello)
  http.ListenAndServe(":8000", nil)
}


func Hello(w http.ResponseWriter, r *http.Request) {

  name1:= os.Getenv("NAME1")
  name2:= os.Getenv("NAME2")

  fmt.Fprintf(w, "%s e %s sao duas angels", name1, name2)

}
