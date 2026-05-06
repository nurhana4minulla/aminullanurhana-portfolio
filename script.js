document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Typewriter Effect Logic ---
    const words = [
        "> BSCS Student",
        "> Full-Stack Web Developer", 
        "> Mobile App Developer",
        "> Tech Enthusiast"
    ];
    let i = 0;
    let timer;
    const typewriterEl = document.getElementById('typewriter');

    // Safety check: Only run if the typewriter span exists
    if (typewriterEl) {
        function typingEffect() {
            let word = words[i].split("");
            var loopTyping = function() {
                if (word.length > 0) {
                    typewriterEl.innerHTML += word.shift();
                } else {
                    setTimeout(deletingEffect, 2000); // Pause before deleting
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
                    i = (i + 1) % words.length; // Loop back to the start
                    typingEffect();
                    return false;
                };
                timer = setTimeout(loopDeleting, 30); // Fast delete
            };
            loopDeleting();
        }
        
        typingEffect(); // Start the loop
    }

    // --- 2. Scroll Animation Logic ---
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    // Safety check: Only run if there are elements to animate
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Optional: stop observing once it appears
                    // observer.unobserve(entry.target); 
                }
            });
        }, { 
            threshold: 0.1 // Triggers as soon as 10% of the item is visible 
        });

        animatedElements.forEach(el => observer.observe(el));
    }
});