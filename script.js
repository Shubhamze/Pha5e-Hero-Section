document.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector(".hero-content");
  
    // Initial animations
    gsap.fromTo(
      heroContent,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" }
    );
  
    // Floating element animations
    const floatingElements = document.querySelectorAll(".floating-elements span");
    floatingElements.forEach((element) => {
      gsap.to(element, {
        x: "random(-20, 20)",
        y: "random(-20, 20)",
        repeat: -1,
        duration: "random(4, 6)",
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  
    // Parallax mouse move effect
    document.querySelector(".hero").addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const xOffset = (clientX - centerX) * 0.01;
      const yOffset = (clientY - centerY) * 0.01;
  
      gsap.to(heroContent, { x: xOffset, y: yOffset, duration: 0.5, ease: "power3.out" });
    });
  });
  