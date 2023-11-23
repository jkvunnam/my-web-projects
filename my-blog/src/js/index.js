// The following code starts Mock Service Worker tool which allows you to simulate a backend (an API) for building your apps that talk to a remote service. You can visit https://mswjs.io for details on this utility and check src/api/routes.js for a sample API route that you can edit/create as needed to simulate a real world API. This simulated backend will not be part of the completed application (built edition) and you must use a real world backend built using Node.js + Express or Java + Spring Boot to provide such a service.

// If you do not require a simulated backend, you can remove the code shown below.
if (process.env.NODE_ENV === 'development') {
  const apiStatus = document.querySelector('#api-status');
  import('../api/browser')
    .then(({ worker }) => worker.start())
    .then(() => fetch('/'))
    .then((res) => res.json())
    .then((res) => (apiStatus.innerText = res.message));
}

/*const postcard = document.createElement('div');
document.body.append(postcard)
postcard.setAttribute('class','postcard')

const head1 = document.createElement('h1');
document.postcard.append(head1);
head1.setAttribute('class', 'head1');
head1.innerText='hello mr. Vunnam'; */


const up = document.querySelector('#up');
const king = document.querySelector('#king')
const morning = document.querySelector('#morning');
const afternoon = document.querySelector('#afternoon');
const evening = document.getElementById('#evening')
let xpos = 0
let ypos = 0
const moveUp = () =>{
  king.style.top = '${ypos}px'
}
up.addEventListener('click', moveUp)

morning.addEventListener('click',()=>(greeting.innerText='Good Morning'));
afternoon.addEventListener('click', () => greeting.innerText='Good Afternoon');

  