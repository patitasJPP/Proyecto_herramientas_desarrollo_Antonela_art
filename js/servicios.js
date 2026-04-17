// Intersection Observer for scroll animations
      const items = document.querySelectorAll(".service-item");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 },
      );

      items.forEach((item) => observer.observe(item));

      // Active nav link
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", function (e) {
          document
            .querySelectorAll(".nav-links a")
            .forEach((l) => l.classList.remove("active"));
          this.classList.add("active");
        });
      });