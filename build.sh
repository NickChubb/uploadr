docker build . -t nickchubb/uploadr
docker run -d -p 4006:3000 --name  uploadr nickchubb/uploadr
