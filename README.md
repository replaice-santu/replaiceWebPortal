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


Steps to Restart Your Node.js Backend
1. Check if Node.js is Running
Run:

bash
Copy
Edit
ps aux | grep node
If you see output like:

nginx
Copy
Edit
ubuntu    12345  0.1  1.2 123456 67890 ? Ssl 12:00 0:10 node server.js
Note the Process ID (PID) (e.g., 12345 above), then kill it:

bash
Copy
Edit
kill -9 12345
If no process is found, your backend is not running.

2. Check if Backend is Managed by PM2
If you use PM2 to manage your Node.js backend, check its status:

bash
Copy
Edit
pm2 list
If your backend appears in the list, restart it:

bash
Copy
Edit
pm2 restart all
If PM2 is not installed or not being used, continue to the next step.

3. Restart the Backend Manually
Navigate to your backend directory:

bash
Copy
Edit
cd ~/replaiceWebPortal/backend
Start the backend:

bash
Copy
Edit
nohup node server.js &  # Replace with your actual server file
This runs the backend in the background, ensuring it doesn't terminate when you close the terminal.

4. Verify That Backend is Running
Check if it's listening on the expected port:

bash
Copy
Edit
netstat -tulnp | grep node
or

bash
Copy
Edit
ps aux | grep node
If it's running, your backend should now be serving requests.

✅ Summary
Check if the backend is running: ps aux | grep node
Kill old process (if necessary): kill -9 <PID>
If using PM2, restart it: pm2 restart all
Manually restart backend: nohup node server.js &
Verify it's running: netstat -tulnp | grep node
