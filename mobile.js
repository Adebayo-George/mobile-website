const bredcrumb = document.querySelector('#bredcrumb')
const navBarMenu = document.querySelector('#mobile-menu')
const xBtn = document.querySelector('.icon-wrapper')
const listItems = document.querySelectorAll('.menu-list')

bredcrumb.addEventListener('click', ()=> {
    bredcrumb.style.display = 'none'
    xBtn.style.display = 'block'
    navBarMenu.style.display = 'block'
})
xBtn.addEventListener('click', ()=> {
    xBtn.style.display = 'none'
    navBarMenu.style.display = 'none'
    bredcrumb.style.display = 'block'
})

listItems.forEach((n) => (
  n.addEventListener('click', () => {
    xBtn.style.display = 'none'
    navBarMenu.style.display = 'none'
    bredcrumb.style.display = 'block'
    })));


const toolCards = document.querySelector('.all-cards');

const data = [{
  name: 'Profesional Art Printing Data',
  description:'A daily section of privately personalized reads; no accounts or sign-upsrequired. Has been the industry standard dummy text eversince 1500s, whenan unknown printer took a standard dummy text',
  image:'mobile-version-images/Img-Placeholder2.png',
  tool:['html', 'bootstrap', 'Ruby'],
  button:'See Project',
},
{
  name: 'Profesional Art Printing Data',
  description:'A daily section of privately personalized reads; no accounts or sign-upsrequired. Has been the industry standard dummy text eversince 1500s, whenan unknown printer took a standard dummy text',
  image:'mobile-version-images/Img-Placeholder2.png',
  tool:['html', 'bootstrap', 'Ruby'],
  button:'See Project',
},
{
  name: 'Profesional Art Printing Data',
  description:'A daily section of privately personalized reads; no accounts or sign-upsrequired. Has been the industry standard dummy text eversince 1500s, whenan unknown printer took a standard dummy text',
  image:'mobile-version-images/Img-Placeholder2.png',
  tool:['html', 'bootstrap', 'Ruby'],
  button:'See Project',
},
{
  name: 'Profesional Art Printing Data',
  description:'A daily section of privately personalized reads; no accounts or sign-upsrequired. Has been the industry standard dummy text eversince 1500s, whenan unknown printer took a standard dummy text',
  image:'mobile-version-images/Img-Placeholder2.png',
  tool:['html', 'bootstrap', 'Ruby'],
  button:'See Project',
},
{
  name: 'Profesional Art Printing Data',
  description:'A daily section of privately personalized reads; no accounts or sign-upsrequired. Has been the industry standard dummy text eversince 1500s, whenan unknown printer took a standard dummy text',
  image:'mobile-version-images/Img-Placeholder2.png',
  tool:['html', 'bootstrap', 'Ruby'],
  button:'See Project',
}]

data.forEach((card) => {
  // //   `
  // //  <div id="first-card">
  // //     <div id="first-card-content">
  // //       <h2>${card.name}</h2>
  // //       <p>${card.description}</p>
  // //       <ul class="frame-works-two">
  // //         <li>${card.tool[0]}</li>
  // //         <li>${card.tool[1]}</li>
  // //         <li>${card.tool[2]}</li>
  // //       </ul>
  // //       <button class="project-button" type="submit">${card.button}</button>
  // //     </div>
  //       </div>
  // //   `;
  // //   console.log(cardContent)
  // //   toolCards.innerHTML += cardContent
  const divOne = document.createElement('div');
  divOne.classList.add("first-card");
  const divTwo = document.createElement('div');
  divTwo.classList.add("first-card-content");
  const h2 = document.createElement('h2');
  const p = document.createElement('p')
  const button = document.createElement('button')
  button.textContent = `${card.button}`
  h2.textContent = `${card.name}`
  p.textContent = `${card.description}`
  const ul = document.createElement('ul')
  ul.classList.add('frame-works-two');
  card.tool.forEach((n)=> {
    const li = document.createElement('li');
    li.textContent = `${n}`
    ul.appendChild(li)
  })

  divTwo.appendChild(h2)
  divTwo.appendChild(p)
  divTwo.appendChild(ul)
  divTwo.appendChild(button)
  divOne.appendChild(divTwo)
  toolCards.appendChild(divOne)
  console.log(divOne)
  button?.addEventListener('click', handlePopup);
})

const body = document.querySelector('body');

function handlePopup(e) {
  console.log(e.target)
  // const div = document.createElement('div');
  // div.style.backgroundColor = 'red';
  // div.style.minHeight = '200px';
  // div.style.width = '100%';
  // div.style.position = 'fixed';
  // div.style.top = '50%'
  // const btnX = document.createElement('i');
  // // <i class="fa-thin fa-x"></i>
  // btnX.classList.add('fa-thin');
  // btnX.classList.add('fa-x')
  // btnX.style.marginLeft = '80%'
  // div.appendChild(btnX);
  // toolCards.appendChild(div)

  // btnX.addEventListener('click', closePopup);
    // function closePopup() {
  //   div.style.display = 'none';
  // }
  const popUp = document.querySelector('#mobile-popup-background');
  const img = document.querySelector('#pp-cancel-btn');
  img.addEventListener('click', closePopup);
  popUp.classList.add('show')
  function closePopup() {
    popUp.style.display = 'none';
  }

}

const fullname = document.getElementById("fullname");
fullname.addEventListener("input", (event) => {
  if (fullname.validity.typeMismatch) {
    fullname.setCustomValidity("I am expecting at only three letters");
    fullname.reportValidity();
  } else {
    fullname.setCustomValidity("");
  }
});

const email = document.getElementById("mail");
email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});







