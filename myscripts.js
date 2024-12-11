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
  toggleScrollTop(); 
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
    if (i < 10) {i = "0" + i}; 
    return i;
  }

//---------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    function updateValue(sliderId, displayId) {
        const slider = document.getElementById(sliderId);
        const display = document.getElementById(displayId);

        if (slider && display) {
            display.textContent = slider.value;

            slider.addEventListener('input', () => {
                display.textContent = slider.value;
            });
        } else {
            console.error(`Element with id ${sliderId} or ${displayId} not found.`);
        }
    }
    updateValue('websiteRating', 'websiteValue');
    updateValue('catsRating', 'catsValue');
    updateValue('dogsRating', 'dogsValue');
    updateValue('travelRating', 'travelValue');
    updateValue('codingRating', 'codingValue');
});
//----------------------------------------------------------------------------------

// Listen for form submission
// Add event listener to handle form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload

    // Collect form data
    const formData = {
        name: document.querySelector('input[name="name"]').value.trim(),
        email: document.querySelector('input[name="email"]').value.trim(),
        telephone: document.querySelector('input[name="telephone"]').value.trim(),
        country: document.querySelector('input[name="country"]').value.trim(),
        address: document.querySelector('input[name="adress"]').value.trim(),
        ratings: {
            website: document.getElementById('websiteRating').value,
            cats: document.getElementById('catsRating').value,
            dogs: document.getElementById('dogsRating').value,
            travel: document.getElementById('travelRating').value,
            coding: document.getElementById('codingRating').value
        }
    };

    // Check collected data in the console
    console.log('Collected Form Data:', formData);

    // Call function to display the collected data
    displayData(formData);
});

// Function to display form data on the webpage
function displayData(data) {
    const outputDiv = document.getElementById('formOutput');

    // Ensure the output div exists
    if (!outputDiv) {
        console.error('Output div not found. Ensure <div id="formOutput"></div> is in the HTML.');
        return;
    }

    // Create HTML content to display form data
    outputDiv.innerHTML = `
        <h3>Submitted Data</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telephone:</strong> ${data.telephone}</p>
        <p><strong>Country:</strong> ${data.country}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        <h4>Ratings</h4>
        <ul>
            <li><strong>Website:</strong> ${data.ratings.website}</li>
            <li><strong>Cats:</strong> ${data.ratings.cats}</li>
            <li><strong>Dogs:</strong> ${data.ratings.dogs}</li>
            <li><strong>Travel:</strong> ${data.ratings.travel}</li>
            <li><strong>Coding:</strong> ${data.ratings.coding}</li>
        </ul>
    `;
}
