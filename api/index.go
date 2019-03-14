package main

import (
	"context"
	"fmt"
	"log"

	firebase "firebase.google.com/go"

	"google.golang.org/api/iterator"
	"google.golang.org/api/option"
)

func main() {
	opt := option.WithCredentialsFile("./sophearak-me.json")
	ctx := context.Background()
	app, err := firebase.NewApp(ctx, nil, opt)
	if err != nil {
		fmt.Println("error initializing app")
		log.Fatal(err)
		return
	}

	client, err := app.Firestore(ctx)
	if err != nil {
		// Handle any errors in an appropriate way, such as returning them.
		log.Printf("An error has occurred: %s", err)
	}

	// _, _, err = client.Collection("users").Add(ctx, map[string]interface{}{
	// 	"first": "Sophearak",
	// 	"last":  "Tha",
	// 	"born":  1993,
	// })
	// if err != nil {
	// 	fmt.Println("error add user")
	// 	log.Fatal(err)
	// 	return
	// }

	_, err = client.Collection("users").Doc("BfnrQDFZBFJtoCTRIPks").Delete(ctx)
	if err != nil {
		// Handle any errors in an appropriate way, such as returning them.
		log.Printf("An error has occurred: %s", err)
	}

	iter := client.Collection("users").Documents(ctx)
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			log.Fatalf("Failed to iterate: %v", err)
		}
		fmt.Println(doc.Data())
	}

	defer client.Close()
}
