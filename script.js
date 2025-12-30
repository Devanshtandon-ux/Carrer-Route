const FIELD_MAP = [
  {
    keys: [
      "digital",
      "marketing",
      "seo",
      "social",
      "ads",
      "facebook",
      "instagram",
    ],
    field: "Digital Marketing",
    reasons: [
      "Strong match with social media & content skills",
      "High demand for marketers",
      "Quick wins via free certifications",
    ],
    careers: [
      "Digital Marketer",
      "SEO Specialist",
      "Content Strategist",
      "PPC Analyst",
    ],
    courses: [
      {
        title: "Google Digital Garage",
        provider: "Google",
        url: "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing",
      },
      {
        title: "Google Skillshop",
        provider: "Google",
        url: "https://skillshop.withgoogle.com/",
      },
      {
        title: "HubSpot Academy",
        provider: "HubSpot",
        url: "https://academy.hubspot.com/",
      },
    ],
  },
  {
    keys: [
      "edit",
      "editing",
      "video",
      "premiere",
      "final cut",
      "after effects",
    ],
    field: "Video Editing & Content Creation",
    reasons: [
      "Creative visual storytelling fit",
      "High demand in creator economy",
      "Portfolio builds fast",
    ],
    careers: [
      "Video Editor",
      "Motion Designer",
      "YouTube Creator",
      "Content Creator",
    ],
    courses: [
      {
        title: "YouTube Creator Academy",
        provider: "YouTube",
        url: "https://creatoracademy.youtube.com/",
      },
      {
        title: "Adobe Premiere Pro",
        provider: "Adobe",
        url: "https://helpx.adobe.com/premiere-pro/tutorials.html",
      },
    ],
  },
  {
    keys: [
      "code",
      "program",
      "developer",
      "web",
      "javascript",
      "python",
      "html",
      "css",
    ],
    field: "Full Stack Development",
    reasons: [
      "You like solving technical problems",
      "Strong industry demand",
      "Many project-based learning options",
    ],
    careers: [
      "Front-end Developer",
      "Back-end Developer",
      "Full Stack Engineer",
    ],
    courses: [
      {
        title: "freeCodeCamp Web Design",
        provider: "freeCodeCamp",
        url: "https://www.freecodecamp.org/learn/responsive-web-design/",
      },
      {
        title: "freeCodeCamp APIs",
        provider: "freeCodeCamp",
        url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/",
      },
    ],
  },
  {
    keys: ["data", "analytics", "machine", "ml", "ai", "analysis"],
    field: "Data Science & Analytics",
    reasons: [
      "You enjoy patterns & numbers",
      "High industry demand",
      "Start with Python & SQL easily",
    ],
    careers: ["Data Analyst", "Data Scientist", "ML Engineer"],
    courses: [
      {
        title: "IBM Data Science",
        provider: "Coursera",
        url: "https://www.coursera.org/professional-certificates/ibm-data-science",
      },
      {
        title: "Kaggle Learn",
        provider: "Kaggle",
        url: "https://www.kaggle.com/learn",
      },
    ],
  },
  {
    keys: ["design", "ui", "ux", "graphic", "photoshop", "illustrator"],
    field: "Design & UX",
    reasons: [
      "You care about visuals & user experience",
      "Creative + product thinking",
      "Portfolio grows with case studies",
    ],
    careers: ["UI/UX Designer", "Graphic Designer", "Product Designer"],
    courses: [
      {
        title: "Google UX Design",
        provider: "Coursera",
        url: "https://www.coursera.org/professional-certificates/google-ux-design",
      },
      {
        title: "Canva Design School",
        provider: "Canva",
        url: "https://www.canva.com/learn/design-school/",
      },
    ],
  },
];

const DEFAULT_SUGGESTION = {
  field: "Multi-path / Explore",
  reasons: ["Try multiple fields & short courses first"],
  careers: ["Freelancer", "Intern"],
  courses: [
    {
      title: "Coursera Free Courses",
      provider: "Coursera",
      url: "https://www.coursera.org",
    },
  ],
};

function findBestMatch(text) {
  text = (text || "").toLowerCase();
  let best = DEFAULT_SUGGESTION,
    scoreMax = 0;
  FIELD_MAP.forEach((item) => {
    const matches = item.keys.filter((k) => text.includes(k)).length;
    const score =
      matches * 2 + (text.includes(item.field.toLowerCase()) ? 1 : 0);
    if (score > scoreMax) {
      scoreMax = score;
      best = item;
    }
  });
  return best;
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
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const study = document.getElementById("study").value;
    const text = document.getElementById("interestText").value.trim();
    if (!text) return;
    const match = findBestMatch(text);
    renderSuggestion(name, study, match);
    renderCourses(match);
    renderChart();
    document.getElementById("result").scrollIntoView({ behavior: "smooth" });
  });
});
