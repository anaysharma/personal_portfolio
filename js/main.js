// Data
const techStack = ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL"];

const workExperience = [
  {
    year: "2024",
    role: "Software Developer",
    company: "Eulogik",
    description: "Building trading and financial software solutions with focus on options strategies and portfolio analytics.",
    tech: ["React", "FastAPI", "PostgreSQL"],
  },
  {
    year: "2024",
    role: "Web Developer",
    company: "TechIncept",
    description: "Developed career guidance web app with 2000+ daily active members and ERP systems.",
    tech: ["React", "TypeScript", "Node.js"],
  },
  {
    year: "2023",
    role: "React Developer",
    company: "Boostup Digital",
    description: "Debugged and maintained fullstack web apps, guided team of 9 developers.",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    year: "2023",
    role: "Full Stack Engineer (Freelance)",
    company: "College360",
    description: "University search and counseling platform with filtering and application workflows.",
    tech: ["Next.js", "Express", "MongoDB"],
  },
];

const projects = [
  {
    title: "College360",
    excerpt: "University search and counseling platform with filtering and application workflows.",
    date: "2024",
    url: "https://college360.co.in",
  },
  {
    title: "Trading Platform (Siya)",
    excerpt: "Complete trading solution with option chains, market heatmap, and strategy builder similar to Sensibull.",
    date: "2025",
    url: "https://app-siya.tempdemo.co/",
  },
  {
    title: "Portfolio Management System",
    excerpt: "Order placement system with stop loss and target functionality for consultant-managed trading.",
    date: "2025",
    url: "https://pms.tradefastr.com",
  },
  {
    title: "Adv. Market Screener (MIS)",
    excerpt: "Technical screening with pgpool-2 caching and fast data lookup for market analysis.",
    date: "2025",
    url: "https://screener-app.datatokenapi.com",
  },
  {
    title: "X-Ray",
    excerpt: "Trading insights with Sharpe ratio, Treynor, Alpha, Beta calculations and portfolio analytics.",
    date: "2025",
    url: "https://xray.datatokenapi.com",
  },
  {
    title: "DataTokenAPI SSO",
    excerpt: "Single Sign On for DataTokenAPI App.",
    date: "2026",
    url: "https://auth.datatokenapi.com",
  },
];

const socialLinks = [
  { name: "GitHub", handle: "@anaysharma", url: "https://github.com/anaysharma" },
  { name: "LinkedIn", handle: "anay-sharma", url: "https://www.linkedin.com/in/anay-sharma-b3785321a/" },
  { name: "Twitter", handle: "@AnaySharma", url: "https://x.com/AnaySharma" },
  { name: "Email", handle: "anaysharma8791@gmail.com", url: "mailto:anaysharma8791@gmail.com" },
];

// Arrow icon SVG
const arrowIcon = `<svg class="size-4 group-hover:translate-x-2 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;

// Render functions
function renderTechStack() {
  const container = document.getElementById("tech-stack");
  container.innerHTML = techStack
    .map(
      (skill) =>
        `<span class="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300">${skill}</span>`
    )
    .join("");
}

function renderWorkExperience() {
  const container = document.getElementById("work-list");
  container.innerHTML = workExperience
    .map(
      (job) => `
      <div class="group grid lg:grid-cols-12 gap-4 sm:gap-8 pb-6 sm:pb-10 border-b">
        <div class="lg:col-span-2">
          <div class="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">${job.year}</div>
        </div>
        <div class="lg:col-span-6 space-y-3">
          <div>
            <h3 class="text-lg sm:text-xl font-medium">${job.role}</h3>
            <div class="text-muted-foreground">${job.company}</div>
          </div>
          <p class="text-muted-foreground leading-relaxed max-w-lg">${job.description}</p>
        </div>
        <div class="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
          ${job.tech.map((t) => `<span class="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500">${t}</span>`).join("")}
        </div>
      </div>
    `
    )
    .join("");
}

function renderProjects() {
  const container = document.getElementById("projects-list");
  container.innerHTML = projects
    .map(
      (post) => `
      <a href="${post.url}" target="_blank" rel="noopener noreferrer" class="group p-6 sm:p-8 transition-all duration-500 hover:shadow-lg cursor-pointer border">
        <div class="flex flex-col h-full gap-6">
          <div class="flex items-center justify-between text-xs text-muted-foreground font-mono">
            <span>${post.date}</span>
          </div>
          <h3 class="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">${post.title}</h3>
          <p class="text-muted-foreground leading-relaxed flex-1">${post.excerpt}</p>
          <div class="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            <span>Visit</span>
            ${arrowIcon}
          </div>
        </div>
      </a>
    `
    )
    .join("");
}

function renderSocialLinks() {
  const container = document.getElementById("social-links");
  container.innerHTML = socialLinks
    .map(
      (social) => `
      <a href="${social.url}" target="_blank" rel="noopener noreferrer">
        <div class="space-y-1">
          <div class="text-foreground group-hover:text-muted-foreground transition-colors duration-300">${social.name}</div>
          <div class="text-sm text-muted-foreground">${social.handle}</div>
        </div>
      </a>
    `
    )
    .join("");
}

// Theme toggle
function initTheme() {
  const toggle = document.getElementById("theme-toggle");
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");
  let isDark = true;

  function updateIcons() {
    if (isDark) {
      sunIcon.classList.remove("hidden");
      moonIcon.classList.add("hidden");
    } else {
      sunIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
    }
  }

  toggle.addEventListener("click", () => {
    isDark = !isDark;
    document.documentElement.classList.toggle("dark", isDark);
    updateIcons();
  });

  updateIcons();
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderTechStack();
  renderWorkExperience();
  renderProjects();
  renderSocialLinks();
  initTheme();
});
