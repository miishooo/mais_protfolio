/* ==========================================================================
   MAIS FAHAD — PORTFOLIO
   Single script for every page.

   TABLE OF CONTENTS
   1. Site-wide behaviour (navigation scroll state + mobile menu)
   2. Project data  <- edit/add projects here
   3. Page: Work     (filter + project grid)
   4. Page: Project  (case study, reads ?id=... from the URL)
   5. Page: Contact  (form)
   ========================================================================== */
/* 1. SITE-WIDE BEHAVIOUR ================================================== */
;(function initNav() {
  var nav = document.getElementById("nav")
  var toggle = document.getElementById("nav-toggle")
  if (!nav) return
  function onScroll() {
    nav.classList.toggle("is-scrolled", window.scrollY > 40)
  }
  window.addEventListener("scroll", onScroll, { passive: true })
  onScroll()
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open")
      toggle.setAttribute("aria-expanded", String(open))
    })
  }
})()
/* 2. PROJECT DATA =========================================================== */
/* Each project appears on the Work page and gets a case-study page at
   project.html?id=<id>. To add a project, copy an entry and change its id. */
var projects = [
  {
    id: "florra",

    title: "Florra",
    categories: ["Branding"],
    org: "Personal",
    label: "BRAND.01",
    colors: ["#9333ea", "#ec4899"],
    year: "2025",
    type: "Brand Identity",
    role: "Brand Identity Designer",
    tools: ["Canva"],
    drive : "https://drive.google.com/file/d/17f5YVIPsK6RqEBJarOhqImjm2DZYCWFa/view?usp=drive_link",
    // Images
  cover: "./image/f/flora1.png",
  images: [
    "./image/f/FloraLogo.png",
    "./image/f/flora1.png",
    "./image/f/flora2.png",
    "./image/f/flora3.png",
  ],

    description:
      "A fictional floral brand identity designed for a flower shop, featuring a simple and playful visual style",
    overview:
      "Created as part of a design challenge organized by the student club. I developed the complete visual identity using Canva and earned third place in the challenge.",
    deliverables: [
      "Logo System",
      "Color Palette",
      "Typography",
      "Brand Guidelines",
      "Packaging",
      "Stationery",
      "Social Templates",
      "Pattern System",
    ],

     palette: [
      { name: "Warm Beige", hex: "#FAF6E3", role: "Primary" },
      { name: "Sage Green", hex: "#939C7F", role: "Background" },
      { name: "Dark Red", hex: "#641138", role: "Text" },
      { name: "Dark Blue", hex: "#0C0549", role: "Accent" },
    ],
    typography: [
      {name: "El Messiri", role: "Headings / Display", weight: "Light 300 · Regular 400 · Semibold 600" },
      {name: "DM Sans", role: "Body / Labels" ,weight: "Regular 400 · Medium 500" },
    ],
  },
  {
  id: "ami-studio",
  title: "AMI Studio",
  categories: ["Branding"],
  org: "Personal",
  label: "BRAND.02",
  colors: ["#3b82f6", "#06b6d4"],
  year: "2026",
  type: "Brand Identity",
  role: "Brand Identity Designer",
  tools: ["Canva"],
  drive : "https://drive.google.com/file/d/1U5PxlJ7qXhULqxOALg5QAjBDXrEo19Id/view?usp=drive_link",
  // Images
  cover: "./image/a/ami1.png",
  images: [
    "./image/a/AmiLogo.png",
    "./image/a/ami1.png",
    "./image/a/ami2.png",
    "./image/a/ami3.png",
  ],

  description:
    "A visual identity for my small business, created as a personal reference for future brand-related designs",
  overview:
    "I designed this identity to maintain visual consistency across the brand's future materials. Using Canva, I developed a simple, playful style with soft, harmonious colors. I also created illustrated characters representing me and my business partner, and selected typefaces that complement the brand's friendly personality",
   deliverables: [
      "Logo System",
      "Color Palette",
      "Typography",
      "Brand Guidelines",
      "Packaging",
      "Stationery",
      "Social Templates",
      "Pattern System",
    ],

    palette: [
      { name: "Chestnut", hex: "#7a5244" },
      { name: "Lavender", hex: "#c7b5ff" },
      { name: "Cream", hex: "#f7e79a" },
      { name: "Aqua", hex: "#9edfcf"  },
      { name: "Blush", hex: "#f5a3b5" },
    ],
    typography: [
      { name: "frankfurter highlight", role: "EN - Headings / Display", weight: "Light 300 · Regular 400 · Semibold 600" },
      { name: "frankfurter medium", role: "EN - Body / Labels", weight: "Regular 400 · Medium 500" },
      { name: "ميلا", role: "AR - Headings / Display", weight: "Light 300 · Regular 400 · Semibold 600" },
      { name: "29LT BUKRA", role: "AR - Body / Labels", weight: "Regular 400 · Medium 500" },
    ],

  },
  {
    id: "tuwaiq-summer",
    title: "Summer Educational Content",
    categories: ["Educational Design"],
    org: "Tuwaiq",
    label: "EDU.01",
    colors: ["#f97316", "#fbbf24"],
    cover: "./image/tuwaiq/edu/summer1.png",
    year: "2026",
    type: "Educational Design",
    role: "Graphic Designer",
    tools: ["Canva"],
    drive : "https://drive.google.com/drive/folders/1hd-S9j-WYoF9BRAxTGIK9sxRpzR_YP9w?usp=drive_link",
    description:
    "An educational content series developed for the Design and Content Committee at Tuwaiq Club, covering four key topics: design fundamentals, AI tools, visual identity, and UI/UX", 
    overview:
    "I developed and designed the educational materials for the committee's summer learning program. The topics were selected to address members' interests and support their creative growth by introducing practical concepts and tools relevant to their development as designers", 
    images: ["./image/tuwaiq/edu/1.png" ,"./image/tuwaiq/edu/6.png" , "./image/tuwaiq/edu/7.png" , "./image/tuwaiq/edu/9.png" ,
    "./image/tuwaiq/edu/13.png" ,"./image/tuwaiq/edu/17.png" , "./image/tuwaiq/edu/20.png" ,"./image/tuwaiq/edu/21.png" ,
    
    ],
    
  },
{
    id: "Announcement of Joining - TUWAIQ",
    title: "Announcement of Joining Animation",
    categories: ["Motion"],
    org: "Tuwaiq",
    label: "MOT.01",
    colors: ["#a855f7", "#06b6d4"],
    cover: "./image/motion/Tuwaiq.png",
    year: "2026",
    type: "Motion Design",
    role: "Graphic Designer",
    tools: ["ibiesPaint" ,"Alight Motion"],
    drive : "https://drive.google.com/file/d/1XEfOtvdEcCISYKcdyLjN_gAZ-mDSXrt4/view?usp=drive_link",
    description:
    "A motion graphics video encouraging students to join Tuwaiq Student Club.", 
    overview:
      "Created using Alight Motion, the video introduces the club's tracks and committees to help students explore the available opportunities and make informed choices about where to get involved.",
    images: [
      "./image/motion/Tuwaiq.mp4" ,
    ],
  },

  {
    id: "Faundition Day - GDG",
    title: "Faundition Day Animation",
    categories: ["Motion"],
    org: "GDG",
    label: "MOT.02",
    colors: ["#a855f7", "#06b6d4"],
    cover: "./image/motion/FDay.png",
    year: "2026",
    type: "Animation & Motion Design",
    role: "Graphic Designer",
    tools: ["ibiesPaint" ,"Alight Motion"],
    drive : "https://drive.google.com/file/d/12kkUQWmWp-jV1gCPXhHJ6PUHmcL2yT4X/view?usp=drive_link",
    description:
      "An animation celebrating Saudi Founding Day and the Kingdom's cultural heritage..",
    overview:
      "I contributed by illustrating and animating the camel and background elements. The animation conveys the idea that, despite ongoing progress and modernization, Saudi Arabia continues to preserve its identity and heritage.",
    images: [
      "./image/motion/FDay.mp4" ,
    ],
  },

 { id: "google-club-opening - GDG",
    title: "Google Club Opening Animation",
    categories: ["Motion"],
    org: "GDG",
    label: "MOT.02",
    colors: ["#a855f7", "#06b6d4"],
    cover: "./image/motion/big.png",
    year: "2026",
    type: "Animation & Motion Design",
    role: "Graphic Designer",
    tools: ["ibiesPaint" ,"Alight Motion"],
    drive : "https://drive.google.com/file/d/1WPsxLSfsH1oiZNooUYWoLUm-lrVGGTBM/view?usp=drive_link",
    description:
      "An animation created to celebrate the opening of Google Developer Groups at the university.",
    overview:
      "The animation uses visual transitions to introduce the club and mark the beginning of a new chapter for the community",
    images: [
      "./image/motion/big.mp4" ,
    ],
  },

  {
    id: "programmers-day",
    title: "Programmer's Day",
    categories: ["Social Media"],
    org: "Personal",
    label: "SOC.01",
    colors: ["#a855f7", "#06b6d4"],
    cover: "./image/p/pgd.png",
    year: "2026",
    type: "Social Media Design",
    role: "Graphic Designer",
    tools: ["Canva"],
    drive : "https://drive.google.com/file/d/1tTYL82-xNWjHywmclfFkO5u1VGbqitff/view?usp=drive_link",
    description:
    "A social media post celebrating International Programmers' Day through a technology-inspired visual concept", 
    overview:
    "I created a celebratory design with a programming-inspired aesthetic, using visual elements to express the limitless possibilities of technology and the ideas it can bring to life.",
    images: [
      "./image/p/pgd.png" ,
    ],
  },
  {
    id: "tuwaiq-ds",
    title: "Data Science & AI",
    categories: ["Social Media"],
    org: "Tuwaiq",
    label: "SOC.02",
    colors: ["#7c3aed", "#3b82f6"],
    cover: "./image/tuwaiq/DSAI.png",
    year: "2026",
    type: "Social Media Design",
    role: "Graphic Designer",
    tools: ["Canva"],
    drive : "https://drive.google.com/drive/folders/1DmYPoHMoFSh9r2MXNbkNE3plFRWB-dDy?usp=drive_link",
    description:
    "Promotional graphics for a workshop introducing the Data Science and Artificial Intelligence track.",
    overview:
      "I contributed to refining the visual quality of the design in collaboration with other track members. The work focused on establishing a technology-inspired look while presenting the workshop information clearly.",
    images: [ 
      "./image/tuwaiq/DSAI3.png" , "./image/tuwaiq/DSAI1.png" , "./image/tuwaiq/DSAI2.png" ,

    ]
  },

  {
    id: "tuwaiq-adl",
    title: "Attack & Defense Lifecycle",
    categories: ["Social Media"],
    org: "Tuwaiq",
    label: "SOC.03",
    colors: ["#7c3aed", "#3b82f6"],
    cover: "./image/tuwaiq/adl0.png",
    year: "2026",
    type: "Social Media Design",
    role: "Graphic Designer",
    tools: ["Canva"],
    drive : "https://drive.google.com/drive/folders/1p6L9ScwxxGf2EtiNs-SO133uiqGCDi9I?usp=drive_link",
    description:
    "A set of promotional and educational designs for a four-day technical program focused on cybersecurity.",  
    overview:
    "I contributed to improving the overall visual quality and organizing the educational content, ensuring that the information worked well with the visual elements and remained clear and accessible.",
    images: [ 
      "./image/tuwaiq/adl.png" , "./image/tuwaiq/adl1.png", "./image/tuwaiq/adl2.png" ,
      "./image/tuwaiq/adl3.png" , "./image/tuwaiq/adl4.png" , "./image/tuwaiq/adl5.png" , 
    ]
  },
  {
    id: "tuwaiq-dday",
    title: "New Student Welcome Day",
    categories: ["Social Media" , "Print"],
    org: "Tuwaiq",
    label: ["SOC.04","PRT.01"],
    colors: ["#7c3aed", "#3b82f6"],
    cover: "./image/tuwaiq/dday.png",
    year: "2026",
    type: "Social Media Design",
    role: "Graphic Designer",
    tools: ["Canva"],
    drive : "https://drive.google.com/drive/folders/17Fcs-puqqkYaiEu2SWVj9Zido1yN_UDl?usp=drive_link",
    description:
    "A collection of designs created for the 1448 - 2026 academic year welcome event for new female students.", 
    overview:
    "I collaborated with the committee's design team to create the event's visual materials, including promotional announcements, printed giveaways, and a poster, helping maintain a consistent look across the event's materials.",
    images: [ 
      "./image/tuwaiq/dday1.png" , "./image/tuwaiq/dday2.png" , "./image/tuwaiq/dday3.png" ,
    ]
  },
  {
    id: "tuwaiq-dpsotr",
    title: "Data Science Poster",
    categories: ["Social Media" , "Print"],
    org: "Tuwaiq",
    label: "SOC.05",
    colors: ["#7c3aed", "#3b82f6"],
    cover: "./image/tuwaiq/dpostr.png",
    year: "2026",
    type: "Social Media Design",
    role: "Graphic Designer",
    tools: ["Canva"],
    drive : "https://drive.google.com/file/d/1Pb7Mav2Y1_N7pPv9VWGAwW4VKRiPf1IQ/view?usp=drive_link",
    description:
    "An informational poster showcasing online platforms for learning data science.", 
    overview:
   "I designed the poster to present the featured learning platforms clearly and attractively, helping students discover available resources and encouraging them to explore opportunities to learn data science.",  
    images: [ 
      "./image/tuwaiq/dpostr.png" ,
    ]
  },
  {
    id: "tuwaiq-dron",
    title: "Saudi Drone Champions League Announcement",
    categories: ["Social Media" , "Print"],
    org: "Tuwaiq",
    label: "SOC.06",
    colors: ["#7c3aed", "#3b82f6"],
    cover: "./image/tuwaiq/dron.png",
    year: "2026",
    type: "Social Media Design",
    role: "Graphic Designer",
    tools: ["Canva"],
    drive : "https://drive.google.com/file/d/13GQ54HUQ0Ua9QBbuhgGwg3B6vC-xXW4E/view?usp=drive_link",
    description:
    "A promotional design introducing the Saudi Drone Champions League.",
    overview:
    "I designed the announcement to introduce the program and highlight its key features, presenting the information in a clear, engaging visual format.",
    images: [ 
      "./image/tuwaiq/dron.png" ,
    ]
  },
{
    id: "gdg-sisters",
    title: "Big Sisters",
    categories: ["Social Media" , "Print"],
    org: "GDG",
    label: ["SOC.07" ,"PRT.04"],
    colors: ["#ec4899", "#a855f7"],
    cover: "./image/gdg/bigsis.png",
    year: "2025",
    type: "Social Media Design",
    role: "Graphic Designer",
    tools: ["Canva"],
    drive : "https://drive.google.com/drive/folders/1zC2WVG0oa9l37N8Q-M3hpBBNzraY1cxn?usp=drive_link",
    description:
    "Design materials for a Google Developer Groups initiative that connects younger female students with older students for guidance and support.",
    overview:
    "I used a soft, welcoming color palette to create a friendly and approachable visual style that reflects the initiative's focus on connection, guidance, and a sense of belonging.", 
    images: [ 
      "./image/gdg/bigsis1.jpeg" , "./image/gdg/bigsis2.png" , "./image/gdg/bigsis3.png" , "./image/gdg/bigsis4.png" , "./image/gdg/bigsis5.png" ,
    ]
  },
  {
    id: "google-privacy",
    title: "Data Privacy",
    categories: ["Social Media"],
    org: "GDG",
    label: "SOC.08",
    colors: ["#3b82f6", "#06b6d4"],
    cover: "./image/gdg/DataPraivcy2.png",
    year: "2026",
    type: "Social Media Design",
    role: "Graphic Designer",
    tools: ["Canva"],
    drive : "https://drive.google.com/file/d/1XmO5TCdRY084dY_lZKTfkSJxb-ejv41Q/view?usp=drive_link",
    description:
    "A series of awareness posts promoting data privacy and personal data protection.",  
    overview:
    "The designs highlight individuals' rights regarding their personal data and introduce ways to protect it. The goal was to communicate key privacy concepts clearly and encourage greater awareness of responsible data handling.", 
    images: [
          "./image/gdg/DataPraivcy2.png" , "./image/gdg/DataPraivcy3.png" ,
    ],
  },
   {
    id: "tuwaiq-calendar",
    title: "Tuwaiq Calendar",
    categories: ["Print"],
    org: "Tuwaiq",
    label: "PRT.01",
    colors: ["#3b82f6", "#9333ea"],
    cover: "./image/tuwaiq/2648.png",
    year: "2026",
    type: "Print Design",
    role: "Graphic Designer",
    tools: ["Canva"],
    drive : "https://drive.google.com/file/d/1ZPstNQ3dl33oXn34VW4SRyocjyh54vkP/view?usp=drive_link",
    description:
    "A calendar for the 1448 AH / 2026 academic year, designed for Tuwaiq Club.", 
    overview:
    "I designed a practical academic calendar featuring the semester weeks, scheduled holidays, and dedicated space for personal goals. The layout combines useful academic planning information with a clear, organized visual structure.",  
    images: [
      "./image/tuwaiq/2648.png" ,
    ],
  },

 
    ]
var orgColors = {
  Tuwaiq: "#9333ea",
  GDG: "#3b82f6",
  Personal: "#06b6d4",
}
function getProject(id) {
  return projects.find((p) => p.id === id)
}
function getAdjacentProjects(id) {
  var idx = projects.findIndex((p) => p.id === id)
  return {
    prev: idx > 0 ? projects[idx - 1] : undefined,
    next: idx < projects.length - 1 ? projects[idx + 1] : undefined,
  }
}
/* Markup lives in the page's HTML templates, not in JavaScript. */
function renderTemplate(id, values) {
  var template = document.getElementById(id)
  return template.innerHTML.replace(/\{\{(\w+)\}\}/g, function (_, key) {
    return values[key] == null ? "" : String(values[key])
  })
}
/* 3. PAGE: WORK ============================================================= */
/* Select a theme defined in css/style.css; no inline styles are written. */
function applyColor(el, name, color) {
  el.setAttribute("data-" + name, color)
}
;(function initWork() {
  var grid = document.getElementById("work-grid")
  if (!grid || document.body.dataset.page !== "work") return
  var filtersBar = document.getElementById("work-filters")
  var countEl = document.getElementById("work-count")
  var emptyEl = document.getElementById("work-empty")
  var activeFilter = "All"
  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
  }
  function create(html) {
    var template = document.createElement("template")
    template.innerHTML = html.trim()
    return template.content.firstChild
  }
  function orgBadge(org) {
    return renderTemplate("work-org-badge", {
      organization: escapeHtml(org),
    })
  }
  function projectCard(project) {
    var card = create(
      renderTemplate("work-project-card", {
        id: encodeURIComponent(project.id),
        label: escapeHtml(project.label),
        year: escapeHtml(project.year),
        action: "View Project →",
        coverImage: project.cover
  ? '<img src="' +
    escapeHtml(project.cover) +
    '" alt="' +
    escapeHtml(project.title) +
    '" class="work-card__image" loading="lazy">'
  : "",
        title: escapeHtml(project.title),
        subtitle: project.subtitle
          ? renderTemplate("work-project-subtitle", {
              subtitle: escapeHtml(project.subtitle),
            })
          : "",
        category: escapeHtml(project.categories.join(" · ")),
        organizationBadge: orgBadge(project.org),
      }),
    )
    applyColor(card, "c1", project.colors[0])
    applyColor(card, "c2", project.colors[1])
    applyColor(card, "o", orgColors[project.org])
    return card
  }
  function placeholderCard(slot) {
    var card = create(
      renderTemplate("work-placeholder-card", {
        organizationBadge: orgBadge(slot.org),
      }),
    )
    applyColor(card, "o", orgColors[slot.org])
    return card
  }
  function render() {
    var filtered =
      activeFilter === "All"
        ? projects
        : projects.filter(function (p) {
    return p.categories.includes(activeFilter)
  })
    grid.innerHTML = ""
    filtered.forEach(function (project) {
      grid.appendChild(projectCard(project))
    })
    countEl.textContent = String(filtered.length).padStart(2, "0") + " PROJECTS"
    emptyEl.hidden = filtered.length !== 0
    Array.prototype.forEach.call(
      filtersBar.querySelectorAll(".work-filter"),
      function (button) {
        button.classList.toggle(
          "is-active",
          button.dataset.filter === activeFilter,
        )
      },
    )
  }
  filtersBar.addEventListener("click", function (event) {
    var button = event.target.closest(".work-filter")
    if (!button) return
    activeFilter = button.dataset.filter
    render()
  })
  render()
})()
;(function initProject() {
  var root = document.getElementById("project-root")
  if (!root || document.body.dataset.page !== "project") return
  var id = new URLSearchParams(window.location.search).get("id") || ""
  var project = getProject(id)
  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
  }
  function create(html) {
    var template = document.createElement("template")
    template.innerHTML = html.trim()
    return template.content.firstChild
  }
  /* ---- Shared pieces ---- */
  function breadcrumb(title) {
    return renderTemplate("project-breadcrumb", {
      title: escapeHtml(title.toUpperCase()),
    })
  }
  function meta(p) {
    return renderTemplate("project-metadata", {
      rows: [
        ["ROLE", p.role],
        ["TYPE", p.type],
        ["TOOLS", p.tools.join(" · ")],
        ["YEAR", p.year],
      ]
        .map(function (row) {
          return renderTemplate("project-metadata-row", {
            label: row[0],
            value: escapeHtml(row[1]),
          })
        })
        .join(""),
    })
  }
  function driveLink(p) {
  if (!p.drive) return ""

  return `
    <a
      class="project-drive"
      href="${escapeHtml(p.drive)}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span class="label-mono">DRIVE</span>
      <span>VIEW PROJECT ↗</span>
    </a>
  `
}

  /* A titled card; `accent` is a colour string (set as --accent on the card) */
  function sectionCard(label, accent, inner) {
    return renderTemplate("project-section-card", {
      accent: accent,
      label: label,
      content: inner,
    })
  }
  /* Grid of placeholder tiles; --b / --a hold the base and accent colours */
  function mockupGrid(items, base, accent) {
  return renderTemplate("project-tiles", {
    baseColor: base,
    accentColor: accent,
    tiles: items
      .map(function (item, i) {
        var label = typeof item === "string" ? item : item.label
        var image = typeof item === "string" ? "" : item.image

        var isVideo =
          typeof image === "string" &&
          /\.mp4(\?.*)?$/i.test(image)

        var media = ""

        if (image) {
          if (isVideo) {
            media =
              '<video src="' +
              escapeHtml(image) +
              '" class="project-tile__image" controls playsinline preload="metadata"></video>'
          } else {
            media =
              '<img src="' +
              escapeHtml(image) +
              '" alt="' +
              escapeHtml(label) +
              '" class="project-tile__image">'
          }
        }

        return renderTemplate("project-tile", {
          variant: i % 3,
          label: escapeHtml(label.toUpperCase()),
          image: media,
        })
      })
      .join(""),
  })
}
  function nav(adjacent) {
    var prev = adjacent.prev
    var next = adjacent.next
    return renderTemplate("project-navigation", {
      previous: prev
        ? renderTemplate("project-previous-link", {
            id: encodeURIComponent(prev.id),
            title: escapeHtml(prev.title),
          })
        : renderTemplate("project-all-previous", {}),
      next: next
        ? renderTemplate("project-next-link", {
            id: encodeURIComponent(next.id),
            title: escapeHtml(next.title),
          })
        : renderTemplate("project-all-next", {}),
    })
  }
  function paletteGrid(palette) {
    if (!Array.isArray(palette)) return ""

    return palette
      .filter(function (c) {
        return c && c.hex
      })
      .map(function (c) {
        return renderTemplate("project-color-swatch", {
          color: escapeHtml(c.hex),
          name: escapeHtml(c.name || ""),
          hex: escapeHtml(c.hex),
          role: escapeHtml(c.role || ""),
        })
      })
      .join("")
  }
function typographyGrid(typography) {
  if (!Array.isArray(typography)) return ""

  return typography
    .filter(function (t) {
      return t && t.name
    })
    .map(function (t) {
      return renderTemplate("project-type-row", {
        name: escapeHtml(t.name),
        role: escapeHtml(t.role || ""),
        weight: escapeHtml(t.weight || ""),
      })
    })
    .join("")
}

  function galleryGrid(images, base, accent) {
  var validImages = Array.isArray(images)
    ? images.filter(function (image) {
        return image && image.trim()
      })
    : []

  if (!validImages.length) return ""

  return mockupGrid(
    validImages.map(function (image, i) {
      var isVideo = /\.mp4(\?.*)?$/i.test(image)

      return {
        label:
          (isVideo ? "VIDEO " : "IMAGE ") +
          String(i + 1).padStart(2, "0"),
        image: image,
      }
    }),
    base,
    accent,
  )
}

  function caseStudyHtml(p) {
    var overview = sectionCard(
      "[01] PROJECT OVERVIEW",
      p.colors[0],
      renderTemplate("project-overview", {
        overview: escapeHtml(p.overview),
      }),
    )

    var palette = paletteGrid(p.palette)
      ? sectionCard(
          "[02] COLOR PALETTE",
          p.colors[1],
          renderTemplate("project-palette", {
            swatches: paletteGrid(p.palette),
          }),
        )
      : ""

      var typography = typographyGrid(p.typography)
  ? sectionCard(
      "[03] TYPOGRAPHY",
      p.colors[0],
      renderTemplate("project-typography", {
        rows: typographyGrid(p.typography),
      }),
    )
  : ""

    var gallery = galleryGrid(p.images, p.colors[0], p.colors[1])
      ? sectionCard(
          "[04] PROJECT GALLERY",
          p.colors[0],
          galleryGrid(p.images, p.colors[0], p.colors[1]),
        )
      : ""

    return renderTemplate("project-generic-case-study", {
      breadcrumb: breadcrumb(
        p.subtitle ? p.title + " — " + p.subtitle : p.title,
      ),
      type: escapeHtml(p.type),
      title: escapeHtml(p.title),
      subtitle: p.subtitle
        ? renderTemplate("project-subtitle", {
            subtitle: escapeHtml(p.subtitle),
          })
        : "",
      description: escapeHtml(p.description),
      metadata: meta(p),
      drive: driveLink(p),
      overview: overview,
      palette: palette,
      typography: typography,
      gallery: gallery,
      navigation: nav(getAdjacentProjects(p.id)),
    })
  }
  function notFoundHtml() {
    return renderTemplate("project-not-found", {})
  }
  
  /* ---- Render + select stylesheet themes ---- */
  var page
  if (!project) {
    page = create(notFoundHtml())
  } else {
    page = create(caseStudyHtml(project))
    applyColor(page, "c1", project.colors[0])
    applyColor(page, "c2", project.colors[1])
    Array.prototype.forEach.call(
      page.querySelectorAll("[data-accent]"),
      function (el) {
        applyColor(el, "accent", el.dataset.accent)
      },
    )
    Array.prototype.forEach.call(
      page.querySelectorAll(".project-tiles"),
      function (el) {
        applyColor(el, "b", el.dataset.base)
        applyColor(el, "a", el.dataset.accentColor)
      },
    )
  }
  root.appendChild(page)
})()
;

(function initContact() {
  var card = document.getElementById("contact-card");
  var form = document.getElementById("contact-form");
  var submit = document.getElementById("contact-submit");
  var reset = document.getElementById("contact-reset");

  if (!card || !form || !submit) return;

  var FORM_ENDPOINT = "https://formsubmit.app/f/dbg2qrzp6y";
  var fields = form.querySelectorAll(".contact-input");

  Array.prototype.forEach.call(fields, function (field) {
    field.addEventListener("focus", function () {
      field.classList.add("is-touched");
    });
  });

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (form.classList.contains("is-sending")) return;

    form.classList.add("is-sending");
    submit.disabled = true;

    try {
      var data = new FormData(form);
      data.set("_ts", String(Date.now()));

      var response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json"
        }
      });

      var result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(
          result.error?.message || "Something went wrong"
        );
      }

      card.classList.add("is-sent");
    } catch (error) {
      console.error("Contact form error:", error);
      alert(
        "Couldn't send your message. Please try again."
      );
    } finally {
      form.classList.remove("is-sending");
      submit.disabled = false;
    }
  });

  if (reset) {
    reset.addEventListener("click", function () {
      card.classList.remove("is-sent");
      form.reset();

      Array.prototype.forEach.call(fields, function (field) {
        field.classList.remove("is-touched");
      });
    });
  }
})();