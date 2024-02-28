const loadPhone =async(searchText) =>{
                const res = await fetch(` https://openapi.programming-hero.com/api/phones?search=${searchText}`);
                const data = await res.json();
                const phones =data.data ;
                // console.log(phones);
                displayPhones(phones);

}

const displayPhones= phones =>{

                const phoneContainer =document.getElementById('phone-container')
                // clear phone container cards before adding new cards

                phoneContainer.textContent='';

                // display show button 
                // const showAllContainer = document.getElementById('show-all-container')
                // if(phones.length > 8){
                //   showAllContainer.classList.remove('hidden');
                // }
                // else {
                //   showAllContainer.classList.add('hidden');
                // }

                // // display only first 12 phones

                // phones =phones.slice(0,8);




                  phones.forEach(phone =>{
                  console.log(phone);
                //   to create a div
                  const phoneCard = document.createElement('div');
                  phoneCard.classList=`card p-4 bg-base-100 shadow-xl`;
                //   to set inner html
                  phoneCard.innerHTML=`
                  <figure><img src="${phone.image}" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title">${phone.phone_name}</h2></h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>`;
                phoneContainer.appendChild(phoneCard);
                });
                toggleLoadingSpinner(false);
}


// handle search button 

const handleSearch =() => {
                const searchField = document.getElementById('search-field');
                const searchText =searchField.value;
                console.log(searchText);
                loadPhone(searchText);
}



const handleSearch2=() =>{
  toggleLoadingSpinner(true);
  const searchField2 =document.getElementById('search-field2');
  const searchText =searchField2.value ;
  loadPhone(searchText);
}


const toggleLoadingSpinner=(isLoading) =>{
    const loadingSpinner =document.getElementById('loading-spinner');
    if(isLoading){
      loadingSpinner.classList.remove('hidden');
    }
    else{
      loadingSpinner.classList.add('hidden')
    }


}



// loadPhone();