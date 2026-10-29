/* =====================================================================
   CONTENT FILE — edit this file to update your portfolio.
   You never need to touch index.html, style.css or script.js.

   Rules of thumb:
   - Text goes inside quotes: "like this".
   - Every item in a list ends with a comma.
   - To add a project or video, copy one whole { ... } block, paste it
     after the last one, and change the values.
   - Save the file and refresh the page to see your change.
   See HOW-TO-EDIT.md for step-by-step examples.
   ===================================================================== */

window.SITE = {

  /* ---------- Google Analytics ----------
     Paste your GA4 Measurement ID between the quotes, e.g. "G-AB12CD34EF".
     Leave it empty ("") to turn tracking off. See HOW-TO-EDIT.md.          */
  googleAnalyticsId: "G-6SX5L20FR5",

  /* ---------- Your details ---------- */
  name: "Omer Shriky",
  role: "Data Analyst · Statistics & Data Science",
  photo: "assets/profile.jpg",

  email: "omershriky@gmail.com",
  emailSubject: "Hi Omer, I saw your portfolio",

  whatsappNumber: "972546600524",            // country code + number, digits only
  whatsappMessage: "Hi Omer, I saw your portfolio and would like to talk.",

  /* ---------- CV files (put the PDFs in the cv/ folder) ---------- */
  cvEnglish: "cv/Omer_Shriky_CV_EN.pdf",
  cvHebrew: "cv/Omer_Shriky_CV_HE.pdf",

  /* ---------- Profile links ---------- */
  links: {
    github: "https://github.com/OmerShriky",
    linkedin: "https://www.linkedin.com/in/omer-shriky-404844211",
    kaggle: "https://www.kaggle.com/omershriky",
  },

  /* ---------- About me ---------- */
  about: [
    "Hi, I’m Omer Shriky.",
    "I’m a data analyst with a B.Sc. in Statistics and Data Science from Bar-Ilan University. I’ve worked in fraud prevention, where I learned to dig into complex data, spot patterns that don’t look right, and turn them into decisions that protect the business.",
    "I’m passionate about analyzing data and applying machine learning to deliver practical business solutions. This portfolio brings together projects that show how I go from raw data to clear insights and actionable results.",
  ],

  education: [
    { title: "B.Sc. Statistics & Data Science", place: "Bar-Ilan University · Ramat Gan, Israel" },
    { title: "Certified Data Analyst Expert", place: "John Bryce College · Tel-Aviv, Israel" },
  ],

  experience: [
    { title: "Fraud Analyst", place: "Risk Management Department · Isracard, Tel Aviv, Israel" },
  ],

  // Icons available: sql, python, excel, powerbi, math, stats, ml, ai, tableau, r, chart
  stack: [
    { name: "SQL", icon: "sql" },
    { name: "Python", icon: "python" },
    { name: "Excel", icon: "excel" },
    { name: "Power BI", icon: "powerbi" },
    { name: "Mathematics", icon: "math" },
    { name: "Statistics", icon: "stats" },
    { name: "Machine Learning", icon: "ml" },
    { name: "AI agents", icon: "ai" },
  ],

  /* ---------- Projects ----------
     link = your Google Colab notebook URL
     (in Colab: Share → "Anyone with the link" → Copy link)               */
  projects: [
    {
      title: "Los Angeles Crime Rate 2020-2024",
      tags: ["Python","Statistics", "ETL", "RestAPI"],
      tools: ["Python", "Pandas", "Statsmodels","scipy"],
      description: "Built an end-to-end data pipeline on Los Angeles open crime data and used statistical testing to analyze how crime changed from 2020 to 2024.",
      results: ["The Afro-American community have experience a significant decrease in crime rates", "The female population experienced a higher proportion of violent crimes in the younger cohorts, from age 51 and above trend inverts and males face a higher risk of violent victimization."],
      link: "https://colab.research.google.com/drive/1XepGyEtA86tOsc2mlex9a-B7I_d1h82D?usp=sharing",
    },
    {
      title: "[PROJECT TITLE]",
      tags: ["Statistical analysis", "[TAG]"],
      tools: ["Python", "Statistics"],
      description: "[Short description: the question and the data, in one or two sentences.]",
      results: ["[Key result 1]", "[Key result 2]"],
      link: "https://colab.research.google.com/",
    },
    {
      title: "[PROJECT TITLE]",
      tags: ["Predictive model", "[TAG]"],
      tools: ["Python", "Machine Learning"],
      description: "[Short description: the question and the data, in one or two sentences.]",
      results: ["[Key result 1]", "[Key result 2]"],
      link: "https://colab.research.google.com/",
    },
    {
      title: "[PROJECT TITLE]",
      tags: ["Data cleaning", "[TAG]"],
      tools: ["SQL", "Excel"],
      description: "[Short description: the question and the data, in one or two sentences.]",
      results: ["[Key result 1]", "[Key result 2]"],
      link: "https://colab.research.google.com/",
    },
    {
      title: "[PROJECT TITLE]",
      tags: ["[TAG]", "[TAG]"],
      tools: ["[TOOL]", "[TOOL]"],
      description: "[Short description: the question and the data, in one or two sentences.]",
      results: ["[Key result 1]", "[Key result 2]"],
      link: "https://colab.research.google.com/",
    },
  ],

  /* ---------- Videos ----------
     video can be EITHER:
       - a file you put in the videos/ folder, e.g. "videos/project1.mp4"
       - a YouTube link, e.g. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
     description is the short text shown under the video (one or two sentences).
     Leave it "" to show nothing.
     duration is just the label shown on the card, e.g. "2:45".
     thumbnail is optional (an image in assets/), leave "" for none.        */
  videos: [
    {
      title: "Chef Agent",
      description: "An AI cooking assistant that builds recipes around what you actually have. Tell it what’s in your pantry, which kitchen tools you own, and what you’re craving, and it creates a personalized recipe to match.",
      video: "videos/Chef_agent.mp4", duration: "3:32", thumbnail: "assets/testing.jpg",
    },
    {
      title: "Webscraping Agent",
      description: "An autonomous agent designed to ingest a target URL, interactively clarify extraction goals and data requirements, and parse a local schema.md to define the output dataset structure. It generates a preview pilot for user validation before executing the final web scraping pipeline.",
      video: "videos/webscraper1.mp4", duration: "5:29", thumbnail: "assets/webscraping.jpg",
    },
    {
      title: "[PROJECT 03 TITLE]",
      description: "[Short description: what the video shows, in one or two sentences.]",
      video: "", duration: "0:00", thumbnail: "",
    },
    {
      title: "[PROJECT 04 TITLE]",
      description: "[Short description: what the video shows, in one or two sentences.]",
      video: "", duration: "0:00", thumbnail: "",
    },
    {
      title: "[PROJECT 05 TITLE]",
      description: "[Short description: what the video shows, in one or two sentences.]",
      video: "", duration: "0:00", thumbnail: "",
    },
  ],
};
