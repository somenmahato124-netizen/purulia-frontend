  <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Page navigation
            const navLinks = document.querySelectorAll('.nav-link');
            const navDots = document.querySelectorAll('.nav-dot');
            const pages = document.querySelectorAll('.page');

            function showPage(pageId) {
                // Hide all pages
                pages.forEach(page => {
                    page.classList.remove('active');
                });
                
                // Show selected page
                document.getElementById(pageId).classList.add('active');
                
                // Update active nav link
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.dataset.page === pageId) {
                        link.classList.add('active');
                    }
                });
                
                // Update active nav dot
                navDots.forEach(dot => {
                    dot.classList.remove('active');
                    if (dot.dataset.page === pageId) {
                        dot.classList.add('active');
                    }
                });
            }
            
            // Add click event to nav links
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    showPage(this.dataset.page);
                });
            });
            
            // Add click event to nav dots
            navDots.forEach(dot => {
                dot.addEventListener('click', function() {
                    showPage(this.dataset.page);
                });
            });
            
            // Gallery image interaction
            const galleryItems = document.querySelectorAll('.gallery-item');
            galleryItems.forEach(item => {
                item.addEventListener('click', function() {
                    // You can expand this to show a lightbox
                    console.log('Opening image in lightbox');
                });
            });
        });
        // ✅ Contact Form submit -> send data to backend
document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const tour = document.getElementById("tour").value;

    try {
        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone, tour })
        });

        const data = await response.json();
        document.getElementById("formMessage").innerText = "✅ Booking saved successfully!";
        document.getElementById("formMessage").classList.remove("text-red-600");
        document.getElementById("formMessage").classList.add("text-green-700");
        console.log("Saved data:", data);
    } catch (error) {
        document.getElementById("formMessage").innerText = "❌ Error saving booking.";
        document.getElementById("formMessage").classList.remove("text-green-700");
        document.getElementById("formMessage").classList.add("text-red-600");
        console.error(error);
    }
});

    </script>
    <script>
document.querySelector("form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        tour: document.getElementById("tour").value
    };

    try {
        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });

        const result = await response.json();
        alert(result.message || "Booking saved!");
    } catch (err) {
        console.error("Error:", err);
        alert("❌ Server error");
    }
});
</script>