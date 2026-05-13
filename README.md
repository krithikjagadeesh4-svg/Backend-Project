# Student Information Form

A full-stack web application for collecting student information with MongoDB integration.

## Features

- Student registration form with fields:
  - Name
  - Roll Number
  - Department
  - Phone Number
  - Year of Study
- Data persistence with MongoDB
- Responsive web interface
- RESTful API

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Frontend**: HTML, CSS, JavaScript
- **Deployment**: Railway (recommended)

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/krithikjagadeesh4-svg/Backend-Project.git
cd Backend-Project
```

2. Install dependencies:
```bash
cd backend
npm install
```

3. Create a `.env` file in the backend directory:
```env
MONGODB_URI=your_mongodb_connection_string_here
```

4. Start the server:
```bash
npm start
```

5. Open your browser and go to `http://localhost:3000`

## Deployment to Railway

1. **Connect to Railway**:
   - Go to [railway.app](https://railway.app)
   - Sign up/Login with GitHub
   - Click "New Project" → "Deploy from GitHub repo"
   - Connect this repository

2. **Set Environment Variables**:
   - In Railway dashboard, go to your project
   - Go to "Variables" tab
   - Add: `MONGODB_URI` = `mongodb+srv://krithikjagadeesh4_db_user:tvk2026@cluster0.ailrzqe.mongodb.net/?appName=Cluster0`

3. **Deploy**:
   - Railway will automatically detect it's a Node.js app
   - It will install dependencies and start the server
   - You'll get a live URL like: `https://your-project-name.up.railway.app`

## API Endpoints

- `GET /` - Serves the HTML form
- `POST /save` - Saves student data to database

### Sample API Usage:
```javascript
fetch('/save', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    rollNo: '12345',
    department: 'Computer Science',
    phoneNo: '1234567890',
    yearOfStudy: '3'
  })
})
```

## Security Notes

- Database credentials are stored in environment variables
- The `.env` file is excluded from version control
- Never commit sensitive information to the repository

## Project Structure

```
backend-project/
├── backend/
│   ├── server.js          # Main server file
│   ├── package.json       # Dependencies and scripts
│   └── package-lock.json  # Lock file
├── frontend/
│   └── index.html         # Original HTML file (for reference)
├── .env                   # Environment variables (local only)
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## License

ISC License