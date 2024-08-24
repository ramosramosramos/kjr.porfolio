document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navigation_links a");

    function activateLink(link) {
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      link.classList.add("active");
    }

    function handleScroll() {
      let currentSection = sections[0]; // Default to the first section

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 2) {
          currentSection = section;
        }
      });

      const currentLink = document.querySelector(
        `.navigation_links a[href="#${currentSection.id}"]`
      );
      if (currentLink) {
        activateLink(currentLink);
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on page load to set the correct active link

 
   
  });


const navigation_links = document.querySelector('.navigation_links');

  function openMenu(){
    navigation_links.classList.toggle('openMenu');
  }
  function closeMenu(){
    navigation_links.classList.remove('openMenu');
  }

 