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
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }