// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.padding = "0.5rem 0"
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)"
  } else {
    navbar.style.padding = "1rem 0"
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
  }
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Contact form submission
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name").value
    const phone = document.getElementById("phone").value
    const email = document.getElementById("email").value
    const service = document.getElementById("service").value
    const message = document.getElementById("message").value

    // Here you would typically send the data to a server
    // For now, we'll just show a success message

    // Show success message
    const successMessage = document.getElementById("successMessage")
    successMessage.style.display = "block"

    // Reset form
    contactForm.reset()

    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.style.display = "none"
    }, 5000)

    // Scroll to success message
    successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" })
  })
}

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all service cards and specialty cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card, .specialty-card, .value-card, .contact-info-item")

  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
  })
})

// Mobile menu close on link click
const navLinks = document.querySelectorAll(".nav-link")
const navbarCollapse = document.querySelector(".navbar-collapse")
const bootstrap = window.bootstrap // Declare the bootstrap variable

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 992) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      })
      bsCollapse.hide()
    }
  })
})

// Add active class to current page nav link
const currentPage = window.location.pathname.split("/").pop() || "index.html"
navLinks.forEach((link) => {
  const linkPage = link.getAttribute("href")
  if (linkPage === currentPage) {
    link.classList.add("active")
  } else {
    link.classList.remove("active")
  }
})
