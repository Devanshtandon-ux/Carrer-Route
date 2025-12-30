# 🎓 CareerRoute – Smart Career Analyzer

A free, interactive web application that helps students and professionals discover the best career path based on their interests and passions. Get personalized career suggestions, understand why they fit, and find free courses to get started immediately.

---

## 📋 Features

- **Smart Career Analyzer** – Enter your interests and get AI-matched career suggestions
- **Career Insights** – Understand why each suggested career fits your skills and interests
- **Recommended Courses** – Discover free, high-quality courses from platforms like:
  - Google Digital Garage
  - freeCodeCamp
  - HubSpot Academy
  - YouTube Creator Academy
  - And many more
- **Visual Analytics** – Interactive charts showing career fit and market demand
- **Study Background Optional** – Select your current stream (BCA, B.Tech, B.Com, etc.) for better recommendations
- **Popular Platforms Directory** – Browse links to top learning platforms (Coursera, edX, freeCodeCamp, etc.)

---

## 🎯 Supported Career Fields

The app provides suggestions for careers in:
- 💻 Full Stack Development
- 📱 Mobile App Development
- 🎬 Video Editing & Content Creation
- 📊 Data Science & Analytics
- 📈 Digital Marketing
- 🎨 UI/UX Design
- 🔒 Cybersecurity
- ☁️ Cloud Computing
- And more...

---

## 📁 Project Structure

```
Minpr Project/
├── README.md                 # This file
├── images/                   # Learning platform logos
│   ├── coursera (1).png
│   ├── FreeCodeCamp-logo-01.png
│   ├── e.png
│   ├── khan-academy-logo.png
│   ├── skillshop-google.webp
│   └── online-school-logo-learning-logo-design-vector_567288-21.jpg
└── project/                  # Main application files
    ├── index.html           # Home & Career Analyzer
    ├── courses.html         # Popular Learning Platforms
    ├── result.html          # Career Results Page
    ├── script.js            # Career matching logic & data
    └── style.css            # Styling
```

---

## 🚀 How to Use

1. **Open the application:**
   - Navigate to `project/` folder
   - Open `index.html` in your browser (or use a local server)

2. **Enter your details:**
   - Your Name
   - Current Study (optional): Select your degree/stream
   - Interests: Type what you enjoy (e.g., "coding", "digital marketing", "video editing")

3. **Get Results:**
   - View your personalized career suggestions
   - See why each career fits your interests
   - Check market demand and career prospects with visual charts
   - Browse recommended free courses for each career path

4. **Explore Learning Platforms:**
   - Visit the "Courses" page to discover top learning platforms
   - Links to Coursera, freeCodeCamp, edX, and more

---

## 💻 Technical Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Visualization:** Chart.js for career analytics
- **Data Storage:** Browser LocalStorage for user preferences
- **Deployment:** Static HTML/CSS/JS (no backend required)

---

## 🔧 Installation & Running

### Option 1: Direct Browser (No Setup)
1. Open `project/index.html` directly in your browser

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
cd project
python -m http.server 8000

# Using Node.js (http-server)
npx http-server project -p 8000

# Using VS Code Live Server Extension
# Right-click index.html → "Open with Live Server"
```

Then visit: `http://localhost:8000`

---

## 📝 Features in Detail

### Career Analyzer Form
- Accepts user interests as free text input
- Matches interests against 15+ predefined career fields
- Considers educational background for better suggestions
- Uses keyword matching algorithm for intelligent recommendations

### Career Results
- **AI Career Card:** Personalized explanation of why the career matches
- **Fit Chart:** Visual representation of match percentage
- **Recommended Courses:** Curated free courses with direct links
- **Career Titles:** Common job titles within the suggested field

### Course Database
The application includes 50+ free courses across:
- Programming & Web Development
- Data Science & Analytics
- Digital Marketing
- Content Creation & Video Editing
- UI/UX Design
- Cybersecurity
- And more

---

## 🎨 Customization

### Add New Career Fields
Edit `script.js` and add to the `FIELD_MAP` array:
```javascript
{
  keys: ["keyword1", "keyword2"], // Keywords users might type
  field: "Career Field Name",
  reasons: ["reason1", "reason2"], // Why this career fits
  careers: ["Job Title 1", "Job Title 2"],
  courses: [
    { title: "Course Name", provider: "Provider", url: "https://..." }
  ]
}
```

### Update Styles
Modify `style.css` to customize colors, fonts, and layout.

---

## 📊 Career Matching Algorithm

The app uses keyword matching:
1. Takes user input (interests/passion areas)
2. Compares against predefined keyword lists for each career
3. Finds the best match (highest keyword overlap)
4. Returns career info, explanations, and relevant free courses
5. Displays results with visual charts

---

## 🌍 Featured Learning Platforms

- **Google Digital Garage** – Free digital marketing certifications
- **freeCodeCamp** – Hands-on coding & development courses
- **YouTube Creator Academy** – Content creation training
- **HubSpot Academy** – Marketing & sales certifications
- **Khan Academy** – General education across all levels
- **Coursera** – University-level courses & professional certificates
- **edX** – Courses from top universities worldwide

---

## 📱 Browser Compatibility

- ✅ Chrome/Chromium (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 💡 Tips for Best Results

1. **Be specific** in your interests (e.g., "Python coding" vs. just "coding")
2. **Use relevant keywords** (job titles, tools, skills)
3. **Check multiple course platforms** for diverse learning styles
4. **Start with free courses** before investing in paid certifications
5. **Combine courses** for a comprehensive learning path

---

## 🤝 Contributing

Found a bug or have a suggestion? You can:
- Add new career fields to `script.js`
- Update course links as they change
- Improve the UI/UX in `style.css`
- Enhance matching algorithm in `script.js`

---

## 📄 License

This project is free to use and modify. Feel free to share and adapt it for educational purposes.

---

## 👨‍💻 Author

Built by **Devansh** – Created as an educational tool to help students discover career paths aligned with their passions.

---

## 🎓 Special Thanks

- **Google** for free digital marketing courses
- **freeCodeCamp** for excellent coding education
- **Chart.js** for beautiful visualizations
- All platform partners for providing free learning resources

---

## 📞 Support & Feedback

If you have questions, feedback, or want to contribute, feel free to reach out!

**Last Updated:** December 2025