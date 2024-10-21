document.addEventListener("DOMContentLoaded", function() {
    // Skill percentages for animation
    const skills = [
        { id: 'js-progress', width: '80%' },
        { id: 'python-progress', width: '70%' },
        { id: 'html-progress', width: '90%' },
        { id: 'bash-progress', width: '75%' }
    ];

    // Animate each skill bar
    skills.forEach(skill => {
        const progressBar = document.getElementById(skill.id);
        setTimeout(() => {
            progressBar.style.width = skill.width;
        }, 500); // Start animation after 0.5s
    });
});