# Docker-compose demo to test gitpod issue
When running a docker container, connections to google.com over https don't resolve.

1) Open the repo in a gitpod workspace.

2) View the open ports and click the web icon to view the page in the browser if it didn't automatically open.

3) You should see a basic hello message.

4) In the browser change path to `/the-daily`. You will see an RSS feed.

5) In the browser change path to `/google`. No response is returned and the server will eventually time out.

6) Alternatively you can enter the container using `docker exec -it demo bash` and then try `curl -v https://www.google.com`.
