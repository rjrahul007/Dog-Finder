const   BREEDS_URL = `https://dog.ceo/api/breeds/list/all`;
const select = document.querySelector('.select-dog');

fetch(BREEDS_URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const breedsOject = data.message;
       
        const breedsArr = Object.keys(breedsOject);
        

        for(let i = 0; i < breedsArr.length; i++){
            const option = document.createElement('option');
            option.value = breedsArr[i];
            option.innerText = breedsArr[i];
            select.appendChild(option);
        }
    })

    select.addEventListener('change', function(event) {
        let IMG_URL = `https://dog.ceo/api/breed/${event.target.value}/images/random` ;

        addDoggo(IMG_URL);
    })

const img = document.querySelector('.dog-img');
const spinner = document.querySelector('.spinner');

function addDoggo(IMG_URL){
    spinner.classList.add('show');
    img.classList.remove('show');
    fetch(IMG_URL)
        .then(function(response) {
            return response.json();
        })
        .then(function (data) {
            img.src = data.message;
            
        })
        
}
img.addEventListener('load', function() {
    spinner.classList.remove('show');
    img.classList.add('show');
});


const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.querySelector('.bone');
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
    //   mass: 10,
    //   damping: 10
    }).start(ballXY);
  });

