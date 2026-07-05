// js/main.java

document.addEventListener("DOMContentLoaded", () => {
    initPortfolio();
});

 /* Initializes and populates the portfolio with data from data.java */
function initPortfolio() {
    // 1. Displays Profile Info
    document.getElementById("hero-name").textContent = portfolioData.profile.name;
    document.getElementById("hero-title").textContent = portfolioData.profile.title;

    // 2. Displays Skills List
    const skillsList = document.getElementById("skills-list");
    portfolioData.skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // 3. Displays Projects Grid
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