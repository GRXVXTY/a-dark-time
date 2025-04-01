// Navigation handling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = e.target.dataset.section;
        
        // Update active navigation link
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        e.target.classList.add('active');
        
        // Show target section
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(targetSection).classList.add('active');
    });
});

// Form submission handlers
document.getElementById('character-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const character = {
        name: document.getElementById('char-name').value,
        class: document.getElementById('char-class').value,
        stats: {
            strength: document.getElementById('strength').value,
            dexterity: document.getElementById('dexterity').value,
            constitution: document.getElementById('constitution').value,
            intelligence: document.getElementById('intelligence').value,
            wisdom: document.getElementById('wisdom').value,
            charisma: document.getElementById('charisma').value
        },
        background: document.getElementById('char-background').value
    };
    
    saveCharacter(character);
    showNotification('Character created successfully!');
    e.target.reset();
});

document.getElementById('monster-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const monster = {
        name: document.getElementById('monster-name').value,
        type: document.getElementById('monster-type').value,
        stats: {
            hp: document.getElementById('monster-hp').value,
            ac: document.getElementById('monster-ac').value,
            speed: document.getElementById('monster-speed').value,
            cr: document.getElementById('monster-cr').value
        },
        description: document.getElementById('monster-description').value
    };
    
    saveMonster(monster);
    showNotification('Monster created successfully!');
    e.target.reset();
});

document.getElementById('weapon-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const weapon = {
        name: document.getElementById('weapon-name').value,
        type: document.getElementById('weapon-type').value,
        stats: {
            damage: document.getElementById('weapon-damage').value,
            range: document.getElementById('weapon-range').value,
            durability: document.getElementById('weapon-durability').value
        },
        description: document.getElementById('weapon-description').value
    };
    
    saveWeapon(weapon);
    showNotification('Weapon created successfully!');
    e.target.reset();
});

document.getElementById('gadget-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const gadget = {
        name: document.getElementById('gadget-name').value,
        type: document.getElementById('gadget-type').value,
        stats: {
            powerLevel: document.getElementById('gadget-power').value,
            durability: document.getElementById('gadget-durability').value,
            charges: document.getElementById('gadget-charges').value
        },
        description: document.getElementById('gadget-description').value
    };
    
    saveGadget(gadget);
    showNotification('Gadget created successfully!');
    e.target.reset();
});

// Data storage functions
function saveCharacter(character) {
    const characters = JSON.parse(localStorage.getItem('characters') || '[]');
    characters.push(character);
    localStorage.setItem('characters', JSON.stringify(characters));
}

function saveMonster(monster) {
    const monsters = JSON.parse(localStorage.getItem('monsters') || '[]');
    monsters.push(monster);
    localStorage.setItem('monsters', JSON.stringify(monsters));
}

function saveWeapon(weapon) {
    const weapons = JSON.parse(localStorage.getItem('weapons') || '[]');
    weapons.push(weapon);
    localStorage.setItem('weapons', JSON.stringify(weapons));
}

function saveGadget(gadget) {
    const gadgets = JSON.parse(localStorage.getItem('gadgets') || '[]');
    gadgets.push(gadget);
    localStorage.setItem('gadgets', JSON.stringify(gadgets));
}

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Add styles for notification
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--accent-color);
            color: var(--text-color);
            padding: 15px 25px;
            border-radius: 5px;
            box-shadow: 0 4px 6px var(--shadow-color);
            animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s;
            z-index: 1000;
        }
        
        @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log('A Dark Time - Character Creation System initialized');
}); 