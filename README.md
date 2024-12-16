## JobHunt using Mern stack

# STACK
Html,CSS,Javascript,React,MonodB,express,Node,Postman,cloudinary 

# To Create Backend 
create Backend folder  
cd Backend  
npm init
# To install Packages required in Project
npm install bcrypt cloudinary cookie-parser cors dotenv express express-fileupload jsonwebtoken mongoose node-cron nodemailer validator  
bcrypt is used to hash password  
cloudinary are use to upload file on cloud  
cookie-parser use for to get generated token  
cors are used to connect frontend and backend  
dotenv is used to keep variable secret  
express is framework of nodejs  
express-fileupload to get file uploaded from frontend or backend  
jsonwebtoken used for genreated JWT token  
mongoose used for mongodB  
node-cron,nodemailer use for sending email   
validator used for email validation 

# To create Frontend
create Frontend Folder
cd Frontend
npm create vite@latest ./
npm install 
npm run dev 
# To install package for Frontend
npm install react-redux @reduxjs/toolkit axios react-router-dom react-spinners react-toastify


# Postman URL of Routes  
In User Routes  
Register user = http://localhost:4000/api/v1/user/register  
Login = http://localhost:4000/api/v1/user/login  
Logout = http://localhost:4000/api/v1/user/logout  
GetUser=http://localhost:4000/api/v1/user/getUser  
updateProfile=http://localhost:4000/api/v1/user/update/profile  
updatePassword=http://localhost:4000/api/v1/user/update/password  
In Job Routes  
Post Jobs=http://localhost:4000/api/v1/job/post    
Get all jobs=  http://localhost:4000/api/v1/job/getall  
Get My jobs=  http://localhost:4000/api/v1/job/getmyjobs  
delete jobs=  http://localhost:4000/api/v1/job/delete/  
get a single jobs=  http://localhost:4000/api/v1/job/get/
In Application Routes  
Post application=http://localhost:4000/api/v1/application/post/  
Employer get all application= http://localhost:4000/api/v1/application/employer/getall  
Jobseeker get all application= http://localhost:4000/api/v1/application/jobseeker/getall  
delete application= http://localhost:4000/api/v1/application/delete/

# Step to run project 
nodemon server.js (To run backend folder)  
npm run dev (Frontend)
# To run code loclly
http://localhost:5173/

