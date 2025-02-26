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



 Steps to Restart the Frontend (React)
1. Verify That Latest Code is Pulled
Run:

bash
Copy
Edit
cd ~/replaiceWebPortal/frontend
git status
If any files are untracked or modified, commit and pull the latest updates:

bash
Copy
Edit
git add .
git commit -m "Deploy latest frontend updates"
git pull --rebase origin main
2. Install Dependencies (If Needed)
If there are updates in package.json or package-lock.json, install dependencies:

bash
Copy
Edit
npm install
3. Build the Frontend
React apps served via Nginx need to be built into a static site before deployment:

bash
Copy
Edit
npm run build
This will generate a new frontend/build/ directory.

4. Restart Nginx
Since Nginx serves the frontend, restart it to pick up the new build:

bash
Copy
Edit
sudo systemctl restart nginx
5. Verify That Nginx is Running Properly
Check Nginx status to ensure it restarted successfully:

bash
Copy
Edit
sudo systemctl status nginx
If there are errors, check the logs:

bash
Copy
Edit
tail -f /var/log/nginx/error.log
