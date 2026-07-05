document.addEventListener("DOMContentLoaded", () => {
    initPortfolio();
    initThemeToggle();
});

function initPortfolio() {
    document.getElementById("hero-name").textContent = portfolioData.profile.name;
    document.getElementById("hero-title").textContent = portfolioData.profile.title;

    const skillsList = document.getElementById("skills-list");
    portfolioData.skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    const projectsGrid = document.getElementById("projects-grid");
    portfolioData.projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">${project.tags.map(t => `<span>${t}</span>`).join('')}</div>
            <a href="${project.link}" target="_blank" rel="noopener">View Project</a>
        `;
        projectsGrid.appendChild(card);
    });
}

function initThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) return;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
    }

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        
        if (document.body.classList.contains("light-theme")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });
}
