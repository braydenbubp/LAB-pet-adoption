const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6xgo9S5jyv1Vss6-7inSVljRBcWOb21N3CA&usqp=CAU",
      
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlbYsuZhqLgnYM6m7hk9OrS-QsQk6YceY-g&usqp=CAU"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nVzaW1BBoAVKgRGa5MfpBZItpktR-Yo0RA&usqp=CAU"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDMqpSxgtGbFgZBUuwILbq3Y_XDHcFkfSrEA&usqp=CAU"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVAKx2pNfSc2Pox7mi9fsNOk4hZ_HZjEe4Ng&usqp=CAU"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFr_SiRx87sBYKiFSKv77hO307bZN-pep7CQ&usqp=CAU"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG23nGg2_a8b1c-DejPxyjL65FsmBcfjabMg&usqp=CAU"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu1me_KHz7FAK5qnarAGIl2FECrA2RNmoolw&usqp=CAU"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzySO8TACxxZVykdof7q6tJYrA8c_XfgGV8w&usqp=CAU"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-ujmpwXrAulUhUAdnZdRdiUwewy2pPK4fg&usqp=CAU"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL1-YvIXlB_T0Pl7N3lgsJrEzwMhAC4Ly4ng&usqp=CAU"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4c6lcc6wW3NfJ0WkVlRQNHxgV-4AUw-LEg&usqp=CAU"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_BZAZvcN87OWk0bcdhgQF4dsD_i9WKVl0g&usqp=CAU"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0wUklJVQuux0VEHoEYUf-B63jIQvk2aiKTg&usqp=CAU"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwQJF0QTqTdiPFnLAjpIBrYPwCLnTQgGBZA&usqp=CAU"
    }
  ];

const app = document.querySelector("#app")

const renderToDom = (array) => {

  let domString = ""
  for (let i = 0; i < array.length; i++) {
    domString += `<div class="card text-center myClass" class="margin" style="width: 18rem;">

    <div class="card-header text-center">${array[i].name}</div>

    <img src=${array[i].imageUrl} class="card-img-top imgSize" alt=${array[i].name}>

    <div class="card-body">
      <h5 class="card-title">${array[i].color}</h5>
      <p class="card-text">${array[i].specialSkill}</p>
    </div>

    <button class="remove" id="delete--${array[i].id}">Remove Pet</button>

    <div class="card-footer text-center text-body-secondary ${array[i].type}">
        <p>${array[i].type}</p>
      </div>
  </div>`;
  }
  app.innerHTML = domString;
}  
renderToDom(pets)



const dogBtn = document.querySelector("#dog")
const catBtn = document.querySelector("#cat")
const dinoBtn = document.querySelector("#dino")
const allBtn = document.querySelector("#all")

dogBtn.addEventListener("click" , () => {
  filter(pets, "dog")
})

catBtn.addEventListener("click" , () => {
   filter(pets, "cat")
})

dinoBtn.addEventListener("click" , () => {
  filter(pets, "dino")
})

allBtn.addEventListener("click" , () => {
  renderToDom(pets)
})

const filter = (array, animalType) => {
  // let petArray = []

  let petArray = array.filter((pet) => pet.type == animalType)

  // if (animalType === "all"){
  //   return renderToDom(pets)
  // }else {
  //   for(pet of array) {
  //   if (pet.type === animalType){
  //      petArray.push(pet)
  //   }  }
  // } 
  renderToDom(petArray)
}


const form = document.querySelector('form')
  

const newPet = (event) => {
  event.preventDefault()

  const newPetObj = {
    id: pets.length + 1, 
    name: document.querySelector("#petName").value,
    color: document.querySelector("#petColor").value,
    specialSkill: document.querySelector("#petSkill").value,
    type: document.querySelector('input[name="exampleRadios"]:checked').value,
    imageUrl: document.querySelector("#petImg").value,
  }; console.log(newPetObj)

  pets.push(newPetObj)
  console.log(pets.length)
  renderToDom(pets)
  form.reset()
}

form.addEventListener('submit', newPet)

const deletePet = (event) => {
  
  if(event.target.id.includes("delete")){
    //remove pet once we get the right button
    //determine the correct object, get id
    const [,id] = event.target.id.split("--");
    //identify where in the array is it
    const index = pets.findIndex(obj => obj.id === Number(id));
    console.log(index);
    //re-render with the array
    pets.splice(index, 1);
    console.log(pets.length);
    //render with removal in place
    renderToDom(pets);
  }
}
app.addEventListener("click", deletePet);
