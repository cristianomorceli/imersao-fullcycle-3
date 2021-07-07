package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", HomePage)
	http.ListenAndServe(":8000", nil)
}

func HomePage(w http.ResponseWriter, r *http.Request) {

	conteudoHtml := `
	<html>
    <head>
        <title>Imersão Full Cycle</title>
        <style>
            .titulo{
                text-align: center;
                color: red;
            }
            body {
                background-image: url('https://sm.ign.com/ign_br/screenshot/default/marvels-avengers-background-01-ps4-24jan19-en-us_p7hh.jpg');
                background-position: center;
                background-repeat: no-repeat;
  				background-size: contain;
                background-color: transparent;
            }
            p{
                text-align: justify;
                color:black;
                font-size: 12pt;
            }
        </style>
    </head>
    <body>
        <div class='titulo'>
            <h1>Imersão Full Cycle</h1>
        </div>
    </body>
</html>	
`

	fmt.Fprintf(w, conteudoHtml)
}
