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
    const cardContent= `
   <div id="first-card">
      <div id="first-card-content">
        <h2>Profesional Art Printing Data</h2>
        <p>A daily section of privately personalized reads; no accounts or sign-upsrequired. Has been the
          industry standard dummy text eversince 1500s, whenan unknown printer took a standard dummy text</p>
        <ul class="frame-works-two">
          <li>html</li>
          <li>bootstrap</li>
          <li>Ruby</li>
        </ul>
        <button class="project-button" type="submit">See Project</button>
      </div>
    `;
    toolCards.innerHTML += cardContent
})


