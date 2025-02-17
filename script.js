document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        de: {
            welcome: "Willkommen in meinem Portfolio",
            intro: "Ich suche Rollen in den Bereichen Content Writing, Content Editing und Data Analytics.",
            skills: "Meine Fähigkeiten",
            roles: "Gesuchte Rollen",
            contact: "Kontaktieren Sie mich für weitere Informationen."
        },
        en: {
            welcome: "Welcome to My Portfolio",
            intro: "I am looking for roles in Content Writing, Content Editing, and Data Analytics.",
            skills: "My Skills",
            roles: "Desired Roles",
            contact: "Contact me for more information."
        },
        es: {
            welcome: "Bienvenido a mi Portafolio",
            intro: "Busco roles en Redacción de Contenidos, Edición de Contenidos y Análisis de Datos.",
            skills: "Mis Habilidades",
            roles: "Roles Deseados",
            contact: "Contáctame para más información."
        }
    };

    function changeLanguage(language) {
        document.getElementById('welcome').textContent = translations[language].welcome;
        document.getElementById('intro').textContent = translations[language].intro;
        document.getElementById('skills-title').textContent = translations[language].skills;
        document.getElementById('roles-title').textContent = translations[language].roles;
        document.getElementById('contact').textContent = translations[language].contact;
    }

    const links = document.querySelectorAll('.language-switcher a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const language = this.getAttribute('href').substring(1);
            changeLanguage(language);
        });
    });

    // Standardmäßig Deutsch laden
    changeLanguage('de');
});
