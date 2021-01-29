//get result element
const result = document.querySelect('#result');
//get input filter element
const input = document.querySelect('#filter');
//define an array variable
const listItems = [];

//add an event listener to filter element
filter.addEventListener('input', function(e){
    // filterData(e.???.???);
    filterData(e.target.value);
})

getData();

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const { results } = await res.json()

    // Clear result
    result.innerHTML = ''


   // name

    //iterate every result and display inside of UL
    // <img src=?? 
    // <div class="user-info"
        //h4 --- name
        //p -- any info you wanna put
    // </div

    for (const element of results) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');

        result.appendedChild(li);
        li.appendChild(img);
        li.appendChild(div);
        div.appendChild(h4);
        div.appendChild(p);

        

    }
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        /* add conditional logic below */
        if(listItems.includes(searchTerm)) {
            //remove the class of .hide
            item.classList.remove('hide');
        } else {
            //add the class of .hide
            item.classList.add('hide');
        }
    })
}