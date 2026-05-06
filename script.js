document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Typewriter Effect Logic ---
    const words = [
            "> BSCS Student",
            "> Creative Thinker",
            "> Music Lover & Night Owl",
            "> Future Tech Innovator"
        ];
    let i = 0;
    let timer;
    const typewriterEl = document.getElementById('typewriter');

    if (typewriterEl) {
        function typingEffect() {
            let word = words[i].split("");
            var loopTyping = function() {
                if (word.length > 0) {
                    typewriterEl.innerHTML += word.shift();
                } else {
                    setTimeout(deletingEffect, 2000); 
                    return false;
                };
                timer = setTimeout(loopTyping, 100);
            };
            loopTyping();
        }

        function deletingEffect() {
            let word = words[i].split("");
            var loopDeleting = function() {
                if (word.length > 0) {
                    word.pop();
                    typewriterEl.innerHTML = word.join("");
                } else {
                    i = (i + 1) % words.length; 
                    typingEffect();
                    return false;
                };
                timer = setTimeout(loopDeleting, 30); 
            };
            loopDeleting();
        }
        
        typingEffect(); 
    }

    // --- 2. Scroll Animation Logic ---
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    // Safety check: Only run if there are elements to animate
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    
                }
            });
        }, { 
            threshold: 0.1 
        });

        animatedElements.forEach(el => observer.observe(el));
    }
});