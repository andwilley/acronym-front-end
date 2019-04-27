# Acronym Web App Front End

Now in React!

## Docker Instructions

docker build -t acronym-front-end --build-arg REACT_APP_API_BASE_URL="localhost:8080" .

docker run -d --rm -p 80:80 --name acronym-front-end acronym-front-end:latest
