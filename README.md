# replaiceWebPortal

Ensure latest code is pulled (git pull --rebase origin main).
Install dependencies (if needed) (npm install).
Build frontend (npm run build).
Restart Nginx (sudo systemctl restart nginx).
Clear browser cache & check if changes reflect.

Frontend:
sudo systemctl restart nginx

Then, verify that Nginx is running:
sudo systemctl status nginx
