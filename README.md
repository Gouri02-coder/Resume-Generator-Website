📝 ResumeCraft – Full Stack Resume Generator

ResumeCraft is a full-stack web application that allows users to create, preview, and download professional resumes with ease. Designed for job seekers, students, and professionals, the platform provides a smooth, user-friendly interface for crafting beautiful resumes in minutes.


🚀 Features
🌐 User Authentication – Sign up, log in, and manage your profile securely

🖊️ Resume Builder – Fill out forms for education, experience, skills, and more

🎨 Live Preview – See changes reflected instantly as you build your resume

📄 PDF Export – Download your resume as a professional-quality PDF

☁️ Data Persistence – Save and edit your resume data anytime

💡 Responsive Design – Works great on desktop, tablet, and mobile

🧰 Tech Stack

🔹 Frontend:
   React.js
   
   Tailwind CSS
   
   Axios for API calls

🔹 Backend:
    
   Node.js
   
   Express.js
  
    MongoDB with Mongoose (or    PostgreSQL if relational)
    
    JWT for authentication

    
🔹 Tools & Libraries:
     HTML5 / CSS3 / JavaScript (ES6+)
     
     React-PDF / jsPDF (for PDF generation)
     dotenv for environment variables

## Run locally

### Backend
```bash
cd backend
npm i
# set MONGO_URI in .env
npm run dev
```

### Frontend
```bash
cd frontend
npm i
cp .env.example .env # optional, edit VITE_API_BASE if needed
npm run dev
```

Open http://localhost:5173

## Deploy
- Frontend: build with `vite`.
- Backend: set env var `MONGO_URI`.
- Database: MongoDB Atlas.
=======
# Resume-Generator-Website
A website where anyone can build his/her resume with few clicks.
>>>>>>> 
