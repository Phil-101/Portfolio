document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        de: {
            welcome: "Willkommen in meinem Portfolio",
            intro: "Ich suche Rollen in den Bereichen Content Writing, Content Editing und Data Analytics.",
            skills: "Meine Fähigkeiten",
            roles: "Gesuchte Rollen",
            contact: "Kontaktieren Sie mich für weitere Informationen.",
            skill1: "Content Writing",
            skill2: "Copywriting",
            skill3: "Creative Design",
            skill4: "Digital Art",
            skill5: "Digital Marketing",
            skill6: "Marketing Analytics",
            skill7: "Google Ads",
            skill8: "E-commerce",
            skill9: "Social Media",
            skill10: "Ghostwriting",
            skill11: "Gesundheit",
            skill12: "HTML/CSS",
            skill13: "Microsoft Office Suite",
            skill14: "Problemlösung",
            role1: "Graduate/Internships/Entry-Level",
            role2: "Junior (1-2 Jahre Erfahrung)",
            role3: "Mid-Level (3-4 Jahre Erfahrung)"
        },
        en: {
            welcome: "Welcome to My Portfolio",
            intro: "I am looking for roles in Content Writing, Content Editing, and Data Analytics.",
            skills: "My Skills",
            roles: "Desired Roles",
            contact: "Contact me for more information.",
            skill1: "Content Writing",
            skill2: "Copywriting",
            skill3: "Creative Design",
            skill4: "Digital Art",
            skill5: "Digital Marketing",
            skill6: "Marketing Analytics",
            skill7: "Google Ads",
            skill8: "E-commerce",
            skill9: "Social Media",
            skill10: "Ghostwriting",
            skill11: "Health",
            skill12: "HTML/CSS",
            skill13: "Microsoft Office Suite",
            skill14: "Problem Solving",
            role1: "Graduate/Internships/Entry-Level",
            role2: "Junior (1-2 years experience)",
            role3: "Mid-Level (3-4 years experience)"
        },
        es: {
            welcome: "Bienvenido a mi Portafolio",
            intro: "Busco roles en Redacción de Contenidos, Edición de Contenidos y Análisis de Datos.",
            skills: "Mis Habilidades",
            roles: "Roles Deseados",
            contact: "Contáctame para más información.",
            skill1: "Redacción de Contenidos",
            skill2: "Copywriting",
            skill3: "Diseño Creativo",
            skill4: "Arte Digital",
            skill5: "Marketing Digital",
            skill6: "Análisis de Marketing",
            skill7: "Google Ads",
            skill8: "Comercio Electrónico",
            skill9: "Redes Sociales",
            skill10: "Ghostwriting",
            skill11: "Salud",
            skill12: "HTML/CSS",
            skill13: "Microsoft Office Suite",
            skill14: "Resolución de Problemas",
            role1: "Graduado/Pasantías/Nivel Inicial",
            role2: "Junior (1-2 años de experiencia)",
            role3: "Nivel Medio (3-4 años de experiencia)"
        }
    };

    function changeLanguage(language) {
        // Übersetze alle Textelemente
        document.getElementById('welcome').textContent = translations[language].welcome;
        document.getElementById('intro').textContent = translations[language].intro;
        document.getElementById('skills-title').textContent = translations[language].skills;
        document.getElementById('roles-title').textContent = translations[language].roles;
        document.getElementById('contact').textContent = translations[language].contact;

        // Übersetze die Fähigkeiten
        for (let i = 1; i <= 14; i++) {
            document.getElementById(`skill${i}`).textContent = translations[language][`skill${i}`];
        }

        // Übersetze die Rollen
        for (let i = 1; i <= 3; i++) {
            document.getElementById(`role${i}`).textContent = translations[language][`role${i}`];
        }
    }

    const buttons = document.querySelectorAll('.language-switcher button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const language = this.textContent.toLowerCase();
            changeLanguage(language);
        });
    });

    // Standardmäßig Deutsch laden
    changeLanguage('de');
});
