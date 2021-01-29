//get result element
const resultCont = document.querySelector('#result');
//get input filter element
const filter = document.querySelector('#filter');
//define an array variable
const listItems = [];

//add an event listener to filter element
filter.addEventListener('input', function(e){
    // filterData(e.???.???);
  filterData(e.target.value);
})

getData();

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50');
    const { results } = await res.json();

    // Clear result
    result.innerHTML = '';


   // name

    //iterate every result and display inside of UL
    // <img src=?? 
    // <div class="user-info"
        //h4 --- name
        //p -- any info you wanna put
    // </div

        // img.src = `${element.picture.large}`;
        // div.classList.add('user-info');
        // h4 = `${element.id.name}`


    results.forEach((re) => {
        const li = document.createElement('li');
        // result.appendedChild(li);


        const img = document.createElement('img');
        img.src = `${re.picture.thumbnail}`; 
        li.appendChild(img);

        const container = document.createElement("div");
        li.appendChild(container);
        container.classList.add("user-info");

        const name = document.createElement("h4");
        container.innerText = `${re.name.first} ${re.name.last}`;
        container.appendChild(name);

        const info = document.createElement("p");
        info.innerText = `${re.location.city}, ${re.location.country}`;
        container.appendChild(info);


        listItems.push(li);


        resultCont.appendChild(li);

    });
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        /* add conditional logic below */
        const search = item.innerText.toLowerCase();

        if(search.includes(searchTerm.toLowerCase())) {
            //remove the class of .hide
            item.classList.remove("hide");
        } else {
            //add the class of .hide
            item.classList.add("hide");
        }
    });
}