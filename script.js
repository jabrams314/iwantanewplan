/* script.js */
document.addEventListener("DOMContentLoaded", () => {
    // Conversion Module Logic
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const step3 = document.getElementById("step3");
    const progressFill = document.getElementById("progressFill");

    const step1Btns = step1.querySelectorAll(".option-btn");
    const step2Btns = step2.querySelectorAll(".option-btn");

    // Handle Step 1 clicks
    step1Btns.forEach(btn => {
        btn.addEventListener("click", function() {
            // Remove selected class from all
            step1Btns.forEach(b => b.classList.remove("selected"));
            // Add to clicked
            this.classList.add("selected");
            
            // Advance to Step 2
            setTimeout(() => {
                step1.classList.add("hidden");
                step2.classList.remove("hidden");
                progressFill.style.width = "75%";
            }, 300);
        });
    });

    // Handle Step 2 clicks
    step2Btns.forEach(btn => {
        btn.addEventListener("click", function() {
            // Remove selected class from all
            step2Btns.forEach(b => b.classList.remove("selected"));
            // Add to clicked
            this.classList.add("selected");
            
            // Advance to Step 3 (Final CTA)
            setTimeout(() => {
                step2.classList.add("hidden");
                step3.classList.remove("hidden");
                progressFill.style.width = "100%";
            }, 300);
        });
    });

    // FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const isActive = question.classList.contains("active");
            
            // Close all
            faqQuestions.forEach(q => {
                q.classList.remove("active");
                q.nextElementSibling.style.maxHeight = null;
            });

            // Open clicked if it wasn't active
            if (!isActive) {
                question.classList.add("active");
                const answer = question.nextElementSibling;
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // Smooth Scroll for local links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
