// Navigation Toggle für mobile Geräte
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Interaktive FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        question.classList.toggle('active');
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});

// Event Listener für Mietungs-Buttons
const rentButtons = document.querySelectorAll('.rent-button');

rentButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.getAttribute('data-product');
        // Weiterleitung zur Mietungsseite oder Öffnen eines Modals
        window.location.href = `dashboard.html?product=${product}`;
    });
});

// Live-Status-Aktualisierung im Dashboard
if (document.getElementById('server-status')) {
    setInterval(() => {
        // AJAX-Anfrage an den Server senden, um den aktuellen Status zu erhalten
        // Beispiel mit Fetch API
        fetch('/api/server-status')
            .then(response => response.json())
            .then(data => {
                document.getElementById('server-status').innerText = data.status;
            })
            .catch(error => console.error('Fehler beim Abrufen des Server-Status:', error));
    }, 5000);
}

// Server neu starten
if (document.getElementById('restart-button')) {
    document.getElementById('restart-button').addEventListener('click', () => {
        // AJAX-Anfrage zum Neustarten des Servers
        fetch('/api/restart-server', { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                alert('Der Server wird neu gestartet.');
            })
            .catch(error => console.error('Fehler beim Neustarten des Servers:', error));
    });
}

// Discord-Integration
if (document.getElementById('connect-discord')) {
    document.getElementById('connect-discord').addEventListener('click', () => {
        // Weiterleitung zur Discord OAuth2 Autorisierung
        window.location.href = 'https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=identify';
    });
}
