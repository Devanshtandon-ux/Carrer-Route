const GEMINI_API_KEY = "AIzaSyBhEtV5e_LH-m7p4G_j0o6oQcdNMyPQj1c";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

const CAREER_COURSES = {
  "Digital Marketing": [
    { title: "Google Digital Garage", provider: "Google", url: "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing" },
    { title: "Google Skillshop", provider: "Google", url: "https://skillshop.withgoogle.com/" },
    { title: "HubSpot Academy", provider: "HubSpot", url: "https://academy.hubspot.com/" },
  ],
  "Video Editing & Content Creation": [
    { title: "YouTube Creator Academy", provider: "YouTube", url: "https://creatoracademy.youtube.com/" },
    { title: "Adobe Premiere Pro", provider: "Adobe", url: "https://helpx.adobe.com/premiere-pro/tutorials.html" },
  ],
  "Full Stack Development": [
    { title: "freeCodeCamp Web Design", provider: "freeCodeCamp", url: "https://www.freecodecamp.org/learn/responsive-web-design/" },
    { title: "freeCodeCamp APIs", provider: "freeCodeCamp", url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/" },
  ],
  "Data Science & Analytics": [
    { title: "IBM Data Science", provider: "Coursera", url: "https://www.coursera.org/professional-certificates/ibm-data-science" },
    { title: "Kaggle Learn", provider: "Kaggle", url: "https://www.kaggle.com/learn" },
  ],
  "Design & UX": [
    { title: "Google UX Design", provider: "Coursera", url: "https://www.coursera.org/professional-certificates/google-ux-design" },
    { title: "Canva Design School", provider: "Canva", url: "https://www.canva.com/learn/design-school/" },
  ],
};

// AI-powered career analysis using Google Gemini
async function analyzeCareerWithAI(name, study, interests) {
  try {
    const studyContext = study ? `Current Study: ${study}. ` : "";
    const prompt = `You are a career advisor AI. Analyze this person's interests and suggest a career path.
${studyContext}Interests/Passions: "${interests}"

Provide ONLY valid JSON response with this exact structure (NO markdown, NO code blocks):
{
  "field": "Career Field Name",
  "reasons": ["reason1", "reason2", "reason3"],
  "careers": ["job1", "job2", "job3"]
}

Valid career fields: Digital Marketing, Video Editing & Content Creation, Full Stack Development, Data Science & Analytics, Design & UX, or suggest another relevant field.`;

    const response = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    if (!response.ok) throw new Error("API request failed");
    const data = await response.json();
    let text = data.contents[0].parts[0].text.trim();
    
    // Remove markdown code blocks if present
    text = text.replace(/```json\n?/g, "").replace(/```\n?/g, "");
    
    const result = JSON.parse(text);
    result.courses = CAREER_COURSES[result.field] || CAREER_COURSES["Full Stack Development"];
    return result;
  } catch (error) {
    console.error("AI Analysis Error:", error);
    return {
      field: "Full Stack Development",
      reasons: ["Explore coding & tech careers", "High demand in industry", "Strong salary growth"],
      careers: ["Developer", "Engineer", "Tech Lead"],
      courses: CAREER_COURSES["Full Stack Development"],
    };
  }
}

function renderSuggestion(name, study, match) {
  const aiBox = document.getElementById("aiBox");
  aiBox.innerHTML = `
    <div class="ai-suggestion">
      <h3>🤖 AI Career Insight</h3>
      <p>Hello ${name || "Student"} ${study ? `(${study})` : ""}</p>
      <h2>${match.field}</h2>
      <ul>${match.reasons.map((r) => `<li>${r}</li>`).join("")}</ul>
      <p><strong>Possible career paths:</strong> ${match.careers.join(", ")}</p>
    </div>
  `;
}

function renderCourses(match) {
  const list = document.getElementById("coursesList");
  list.innerHTML = match.courses
    .map(
      (c) => `
    <div class="course-card">
      <h4>${c.title}</h4>
      <p>${c.provider || ""}</p>
      <a href="${c.url}" target="_blank">Apply</a>
    </div>
  `
    )
    .join("");
}

let chartInstance;
function renderChart() {
  const ctx = document.getElementById("chart");
  if (!ctx) return;
  const c = ctx.getContext("2d");
  if (chartInstance) chartInstance.destroy();
  chartInstance = new Chart(c, {
    type: "line",
    data: {
      labels: [
        "Start",
        "1-3 months",
        "3-6 months",
        "6-12 months",
        "12+ months",
      ],
      datasets: [
        {
          label: "Skill Progress",
          data: [10, 40, 65, 85, 100],
          tension: 0.35,
          fill: true,
        },
      ],
    },
    options: {
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } },
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("careerForm");
  if (!form) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const study = document.getElementById("study").value;
    const text = document.getElementById("interestText").value.trim();
    if (!text) return;

    // Show loading state
    const resultDiv = document.getElementById("result");
    const aiBox = document.getElementById("aiBox");
    aiBox.innerHTML = '<div class="ai-suggestion"><p>🤖 Analyzing your career path with AI...</p></div>';
    resultDiv.scrollIntoView({ behavior: "smooth" });

    // Get AI analysis
    const match = await analyzeCareerWithAI(name, study, text);
    renderSuggestion(name, study, match);
    renderCourses(match);
    renderChart();
  });
});
