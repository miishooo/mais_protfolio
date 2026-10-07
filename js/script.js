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
    category: "Branding",
    org: "Personal",
    label: "BRAND.01",
    colors: ["#9333ea", "#ec4899"],
    year: "2025",
    type: "Brand Identity",
    role: "Brand Identity Designer",
    tools: ["Canva"],
    // Images
  cover: "image/flora1.png",

  images: [
    "",
    "",
    "",
  ],

    description:
      "A botanical lifestyle brand built around natural beauty, handcrafted products, and an organic visual identity that feels both modern and rooted in nature.",
    overview:
      "Florra is a botanical lifestyle brand specializing in handcrafted plant-based products — skincare, home fragrances, and wellness goods. The brand needed a visual identity that communicated natural beauty, artisanal quality, and modern minimalism. The project included the full identity system: logo design, color palette, typography selection, brand guidelines, and application across packaging, stationery, and digital templates.",
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

    fullCaseStudy: true,

    palette: [
      { name: "her fierceness", hex: "#641138" , role: "Primary" },
      { name: "sage green", hex: "#939c7f" , role: "Secondary" },
      { name: "Comfort Ivory", hex: "#faf6e3" , role: "Light" },
      { name: "blue", hex: "#0c0549" , role: "Dark" },
    ],
    typography: [
      {
        name: "El Messiri",
        role: "Headings / Display",
        weight: "Light 300 · Regular 400 · Semibold 600",
      },
      {
        name: "DIN Next",
        role: "Body / Labels",
        weight: "Regular 400 · Medium 500",
      },
    ],
    applications: [
      "Business Card",
      "Letterhead",
      "Packaging Labels",
      "Social Media Templates",
      "Swing Tags",
      "Brand Guidelines",
      "Stamp",
      "Tote Bag",
    ],
  },
  {
  id: "ami-studio",

  title: "AMI Studio",
  category: "Branding",
  org: "Personal",
  label: "BRAND.02",

  colors: ["#3b82f6", "#06b6d4"],

  year: "2026",
  type: "Brand Identity",
  role: "Brand Identity Designer",
  tools: ["Canva"],

  // Images
  cover: "",

  images: [
    "",
    "",
    "",
  ],

  description:
    "A clean, modern brand identity for AMI Studio — a photography and creative studio. The identity centers on minimalism, precision, and a sophisticated blue palette that evokes trust and clarity.",

  overview:
    "AMI Studio required a professional identity system that would communicate quality, precision, and creativity. The visual language draws from photography's relationship with light — clean whites, structured layouts, and a confident blue signature color. The result is a brand that feels premium without being cold.",

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

    fullCaseStudy: true,

    palette: [
      { name: "Chestnut", hex: "#7a5244" },
      { name: "Lavender", hex: "#c7b5ff" },
      { name: "Cream", hex: "#f7e79a" },
      { name: "Aqua", hex: "#9edfcf"  },
      { name: "Blush", hex: "#f5a3b5" },
    ],
    typography: [
      {
        name: "frankfurter medium",
        role: "Headings / Display",
        weight: "Light 300 · Regular 400 · Semibold 600",
      },
      {
        name: "29LT BUKRA",
        role: "Body / Labels",
        weight: "Regular 400 · Medium 500",
      },
    ],
    applications: [
       {
    label: "Business Card",
    image: "images/ami/business-card.jpg",
  },
  {
    label: "Letterhead",
    image: "../image/ami3.jpg",
  },
      "Packaging Labels",
      "Social Media Templates",
      "Swing Tags",
      "Brand Guidelines",
      "Stamp",
      "Tote Bag",
    ],
  },
  
  {
    id: "tuwaiq-summer",
    title: "Tuwaiq Club",
    subtitle: "Summer Challenge",
    category: "Educational Design",
    org: "Tuwaiq",
    label: "EDU.01",
    colors: ["#f97316", "#fbbf24"],
    year: "2024",
    type: "Educational Design",
    role: "Graphic Designer",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    description:
      "High-energy visual design system for Tuwaiq Club's Summer Challenge — an intensive skills program designed to energize students over the summer break.",
    overview:
      "The Summer Challenge required an identity that felt vibrant, motivating, and distinct from the club's standard visual language. An orange-to-yellow gradient palette was selected to communicate energy, warmth, and the spirit of achievement. The system covers promotional materials, digital assets, and in-event signage.",
    deliverables: [
      "Challenge Branding",
      "Promotional Posters",
      "Social Media Series",
      "Email Templates",
      "Certificate Design",
      "Schedule Layout",
    ],
  },

  {
    id: "programmers-day",
    title: "Programmer's Day",
    category: "Social Media",
    org: "Personal",
    label: "SOC.01",
    colors: ["#a855f7", "#06b6d4"],
    year: "2023",
    type: "Social Media Design",
    role: "Graphic Designer",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    description:
      "A celebratory social media series for International Programmer's Day — combining technical motifs with a vibrant purple-cyan palette.",
    overview:
      "Programmer's Day is observed on the 256th day of the year — a number meaningful to every developer. This social media series celebrates the occasion with designs that honor the craft: code snippets, terminal aesthetics, and digital patterns woven into a festive but technically aware visual language.",
    deliverables: [
      "Main Post",
      "Story Variants",
      "Countdown Series",
      "Quote Cards",
      "Reel Cover",
    ],
  },
  {
    id: "gdg-sisters",
    title: "GDG",
    subtitle: "Big Sisters",
    category: "Social Media",
    org: "GDG",
    label: "SOC.02",
    colors: ["#ec4899", "#a855f7"],
    year: "2023",
    type: "Social Media Design",
    role: "Graphic Designer",
    tools: ["Adobe Illustrator", "Figma"],
    description:
      "Community-focused social media design for the GDG Big Sisters initiative — supporting women in technology through mentorship and community at University of Al-Baha.",
    overview:
      "The Big Sisters program connects experienced women in tech with students entering the field. The visual identity needed to feel welcoming, empowering, and distinct from standard GDG chapter branding. A pink-to-purple gradient language was developed to create warmth and identity while staying within the broader GDG ecosystem.",
    deliverables: [
      "Program Identity",
      "Announcement Posts",
      "Speaker Cards",
      "Event Stories",
      "Recap Graphics",
    ],
  },
  {
    id: "tuwaiq-ds",
    title: "Tuwaiq Club",
    subtitle: "Data Science & AI",
    category: "Social Media",
    org: "Tuwaiq",
    label: "SOC.03",
    colors: ["#7c3aed", "#3b82f6"],
    year: "2024",
    type: "Social Media Design",
    role: "Graphic Designer",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    description:
      "Visual identity and event branding for Tuwaiq Club's Data Science & AI initiative — communicating technical ambition through a bold, structured aesthetic.",
    overview:
      "This project involved designing a visual system for Tuwaiq Club's data science and AI programming track. The design needed to feel technical and intelligent while remaining approachable and energetic for a university audience. A deep purple-to-blue gradient language was used to signal both depth and innovation.",
    deliverables: [
      "Event Logo",
      "Poster Series",
      "Social Media Kit",
      "Banner Design",
      "Certificate Template",
      "Presentation Template",
    ],
  },

  {
    id: "tuwaiq-calendar",
    title: "Tuwaiq Calendar",
    category: "Print",
    org: "Tuwaiq",
    label: "PRT.01",
    colors: ["#3b82f6", "#9333ea"],
    year: "2023",
    type: "Print Design",
    role: "Graphic Designer",
    tools: ["Adobe Illustrator", "Adobe InDesign"],
    description:
      "A structured, elegant annual calendar for Tuwaiq Club — organizing the academic year's events, workshops, and key dates into a designed print artifact.",
    overview:
      "The Tuwaiq Club Calendar serves as both a practical planning tool and a branded touchpoint. The challenge was to balance data-dense calendar content with the club's visual identity — keeping the design clean and legible while remaining recognizably Tuwaiq. A blue-purple gradient system provides visual hierarchy across months.",
    deliverables: [
      "12-Month Calendar Layout",
      "Cover Design",
      "Event Highlights",
      "Print-Ready Files",
      "Digital PDF Version",
    ],
  },
  {
    id: "environment-day",
    title: "Environment Day",
    subtitle: "Giveaways",
    category: "Print",
    org: "Personal",
    label: "PRT.02",
    colors: ["#06b6d4", "#3b82f6"],
    year: "2023",
    type: "Print Design",
    role: "Graphic Designer",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    description:
      "Print and giveaway design for World Environment Day — a clean, nature-inspired series of materials that blends environmental awareness with considered design.",
    overview:
      "World Environment Day giveaways needed to feel genuine and considered — not like generic green-washed marketing. The design system uses a cool teal-to-blue palette to reference water and sky rather than defaulting to predictable greens. Materials included reusable tote bags, bookmarks, stickers, and awareness postcards.",
    deliverables: [
      "Tote Bag Design",
      "Bookmark Series",
      "Sticker Pack",
      "Awareness Postcards",
      "Social Announcement",
    ],
  },
]
var orgColors = {
  Tuwaiq: "#9333ea",
  GDG: "#3b82f6",
  Personal: "#06b6d4",
}
var placeholderSlots = [
  { id: "tuwaiq-upcoming-1", org: "Tuwaiq" },
  { id: "tuwaiq-upcoming-2", org: "Tuwaiq" },
  { id: "gdg-upcoming-1", org: "GDG" },
  { id: "gdg-upcoming-2", org: "GDG" },
]
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
        action: project.fullCaseStudy ? "View Case Study →" : "View Project →",
        title: escapeHtml(project.title),
        subtitle: project.subtitle
          ? renderTemplate("work-project-subtitle", {
              subtitle: escapeHtml(project.subtitle),
            })
          : "",
        category: escapeHtml(project.category),
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
            return p.category === activeFilter
          })
    grid.innerHTML = ""
    filtered.forEach(function (project) {
      grid.appendChild(projectCard(project))
    })
    if (activeFilter === "All") {
      placeholderSlots.forEach(function (slot) {
        grid.appendChild(placeholderCard(slot))
      })
    }
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
  function banner(p) {
    return renderTemplate("project-banner", {
      title: escapeHtml(p.title),
      subtitle: p.subtitle
        ? renderTemplate("project-banner-subtitle", {
            subtitle: escapeHtml(p.subtitle.toUpperCase()),
          })
        : "",
      label: escapeHtml(p.label),
      type: escapeHtml(p.type.toUpperCase()),
      year: escapeHtml(p.year),
    })
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

        return renderTemplate("project-tile", {
          variant: i % 3,
          label: escapeHtml(label.toUpperCase()),
          image: image
            ? '<img src="' +
              escapeHtml(image) +
              '" alt="' +
              escapeHtml(label) +
              '" class="project-tile__image">'
            : "",
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
  /* ---- Florra: full case study ---- */
  function florraHtml(p) {
    var palette = p.palette
      .map(function (c) {
        return renderTemplate("project-color-swatch", {
          color: c.hex,
          name: escapeHtml(c.name),
          hex: c.hex,
          role: escapeHtml(c.role),
        })
      })
      .join("")
    var typography = p.typography
      .map(function (t) {
        return renderTemplate("project-typography-row", {
          name: escapeHtml(t.name),
          role: escapeHtml(t.role),
          weight: escapeHtml(t.weight),
        })
      })
      .join("")
    var elements = [
      "Leaf motifs",
      "Monogram mark",
      "Pattern system",
      "Icon set",
      "Line illustrations",
      "Texture overlay",
    ]
      .map(function (el) {
        return renderTemplate("project-visual-element", {
          label: el,
        })
      })
      .join("")
    var dots = p.palette
      .map(function (c) {
        return renderTemplate("project-palette-dot", {
          color: c.hex,
        })
      })
      .join("")
    return renderTemplate("project-florra-case-study", {
      breadcrumb: breadcrumb("Florra"),
      description: escapeHtml(p.description),
      metadata: meta(p),
      banner: banner(p),
      overview: sectionCard(
        "[01] PROJECT OVERVIEW",
        "#a855f7",
        renderTemplate("project-florra-overview", {
          overview: escapeHtml(p.overview),
        }),
      ),
      palette: sectionCard(
        "[02] COLOR PALETTE",
        "#ec4899",
        renderTemplate("project-palette", {
          swatches: palette,
        }),
      ),
      typography: sectionCard(
        "[03] TYPOGRAPHY",
        "#60a5fa",
        renderTemplate("project-typography", {
          rows: typography,
        }),
      ),
      visualElements: sectionCard(
        "[04] VISUAL ELEMENTS",
        "#9333ea",
        renderTemplate("project-visual-elements", {
          elements: elements,
        }),
      ),
      applications: sectionCard(
        "[05] APPLICATIONS",
        "#06b6d4",
        mockupGrid(p.applications, "#7A8C6E", "#3D4A32"),
      ),
      finalIdentity: sectionCard(
        "[06] FINAL IDENTITY",
        "#a855f7",
        renderTemplate("project-final-identity", {
          paletteDots: dots,
        }),
      ),
      navigation: nav(getAdjacentProjects(p.id)),
    })
  }
  /* ---- Generic project template ---- */
  function genericHtml(p) {
    var swatches = [0, 1, 2, 1, 0]
      .map(function (level) {
        return renderTemplate("project-direction-swatch", {
          variant: level,
        })
      })
      .join("")
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
      banner: banner(p),
      overview: sectionCard(
        "[01] PROJECT OVERVIEW",
        p.colors[0],
        renderTemplate("project-overview", {
          overview: escapeHtml(p.overview),
        }),
      ),
      deliverables: sectionCard(
        "[02] DELIVERABLES",
        p.colors[1],
        mockupGrid(p.deliverables, p.colors[0], p.colors[1]),
      ),
      visualDirection: sectionCard(
        "[03] VISUAL DIRECTION",
        p.colors[0],
        renderTemplate("project-visual-direction", {
          swatches: swatches,
          label: escapeHtml(p.label),
        }),
      ),
      navigation: nav(getAdjacentProjects(p.id)),
    })
  }
  function notFoundHtml() {
    return renderTemplate("project-not-found", {})
  }
  function caseStudyHtml(p) {
  var content = []

  content.push(
    sectionCard(
      "[01] PROJECT OVERVIEW",
      p.colors[0],
      renderTemplate("project-overview", {
        overview: escapeHtml(p.overview),
      }),
    ),
  )

  if (p.applications && p.applications.length) {
    content.push(
      sectionCard(
        "[02] APPLICATIONS",
        p.colors[1],
        mockupGrid(p.applications, p.colors[0], p.colors[1]),
      ),
    )
  }

  if (p.images && p.images.length) {
    content.push(
      sectionCard(
        "[03] PROJECT GALLERY",
        p.colors[0],
        mockupGrid(
          p.images.map(function (image, i) {
            return {
              label: "IMAGE " + String(i + 1).padStart(2, "0"),
              image: image,
            }
          }),
          p.colors[0],
          p.colors[1],
        ),
      ),
    )
  }

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
    banner: banner(p),
    overview: content[0] || "",
    deliverables: content[1] || "",
    visualDirection: content[2] || "",
    navigation: nav(getAdjacentProjects(p.id)),
  })
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
;(function initContact() {
  var card = document.getElementById("contact-card")
  var form = document.getElementById("contact-form")
  var submit = document.getElementById("contact-submit")
  var reset = document.getElementById("contact-reset")
  if (!card || !form || !submit) return
  var SEND_DELAY = 1600 // ms the "Sending..." state is shown
  var fields = form.querySelectorAll(".contact-input")
  // Keep the glow on inputs after their first focus (same as the original).
  Array.prototype.forEach.call(fields, function (field) {
    field.addEventListener("focus", function () {
      field.classList.add("is-touched")
    })
  })
  form.addEventListener("submit", function (e) {
    e.preventDefault()
    form.classList.add("is-sending")
    submit.disabled = true
    setTimeout(function () {
      form.classList.remove("is-sending")
      submit.disabled = false
      card.classList.add("is-sent")
    }, SEND_DELAY)
  })
  if (reset) {
    reset.addEventListener("click", function () {
      card.classList.remove("is-sent")
      form.reset()
      Array.prototype.forEach.call(fields, function (field) {
        field.classList.remove("is-touched")
      })
    })
  }
})()
