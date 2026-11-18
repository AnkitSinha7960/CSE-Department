// 1. Notice Board Category Filter (on index.html)
const noticeFilter = document.getElementById('noticeFilter');
if (noticeFilter) {
    noticeFilter.addEventListener('change', function () {
        const selected = this.value;
        const notices = document.querySelectorAll('.notice-card');

        notices.forEach(card => {
            if (selected === 'all' || card.dataset.category === selected) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// 2. Department Contact Form Validation (on labs.html)
const contactForm = document.getElementById('deptContactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('studentName').value.trim();
        const email = document.getElementById('studentEmail').value.trim();
        const query = document.getElementById('queryText').value.trim();
        const feedback = document.getElementById('formFeedback');

        if (!name || !email || !query) {
            feedback.style.color = '#dc2626';
            feedback.textContent = 'Please fill out all fields before submitting.';
            return;
        }

        if (!email.includes('@')) {
            feedback.style.color = '#dc2626';
            feedback.textContent = 'Please enter a valid email address.';
            return;
        }

        feedback.style.color = '#16a34a';
        feedback.textContent = 'Thank you! Your inquiry has been submitted to the CSE office.';
        contactForm.reset();
    });
}
