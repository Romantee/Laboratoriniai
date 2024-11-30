function toggleDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.toggle("show");
}
//-----------------------------------------------------------------------------
function myFunction() {
    var element = document.body;
    var element2 = document.querySelector('.header');
    element.classList.toggle("dark-mode");
    element2.classList.toggle("dark-mode")
 }
 //----------------------------------------------------------------------------
 window.addEventListener('load', () => {
  const scrollTop = document.getElementById('scroll-top');
  if (!scrollTop) {
      console.error('Scroll-to-top button not found!');
      return;
  }
  scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth',
      });
  });
  function toggleScrollTop() {
      if (window.scrollY > 100) {
          scrollTop.classList.add('active');
      } else {
          scrollTop.classList.remove('active');
      }
  }
  document.addEventListener('scroll', toggleScrollTop);
  toggleScrollTop(); // Initial call
});
//-----------------------------------------------------------------------------