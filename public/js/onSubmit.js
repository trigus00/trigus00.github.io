// Form set to prevent page refresh on submit
let form = document.getElementById("form")
function handleForm(event) { event.preventDefault() }
form.addEventListener('submit', handleForm)

// Gets called on form submission, sets a container html to api results
const getFoodSearch = async () => {
    let result = document.getElementById('value').value
    let data = await foodSearch(result)
    let cardData = document.getElementById('card-data')
    cardData.innerHTML = `
    <div class="card">
    <div class="card-body">
      <h4 class="card-title py-3 px-2 m-0 bg-white text-center"><img class="thumbnail py-2" src="${data.foods[0].photo.thumb}" alt="${data.foods[0].food_name}" /> ${data.foods[0].food_name} </h4>
      <table class="table table-sm table-responsive-stack bg-white" id="foodTable">
        <thead>
          <tr>
            <th scope="col">Calories</th>
            <th scope="row">Sodium</th>
            <th scope="col">Total Fat</th>
            <th scope="col">Saturated Fat</th>
            <th scope="col">Cholesterol</th>
            <th scope="col">Carbohydrates</th>
            <th scope="col">Fiber</th>
            <th scope="col">Sugar</th>
            <th scope="col">Protein</th>
            <th scope="col">Potassium</th>
          </tr>
        </thead>
        <tbody>
          <tr class="p-3">
            <td><span class="responsive-thead">Calories: </span> ${Math.round(data.foods[0].nf_calories)} </td>
            <td><span class="responsive-thead">Sodium: </span> ${Math.round(data.foods[0].nf_sodium)}m g </td>
            <td><span class="responsive-thead">Total Fat: </span> ${Math.round(data.foods[0].nf_total_fat)} g </td>
            <td><span class="responsive-thead">Saturated Fat: </span> ${Math.round(data.foods[0].nf_saturated_fat)} g </td>
            <td><span class="responsive-thead">Cholesterol: </span> ${Math.round(data.foods[0].nf_cholesterol)} mg </td>
            <td><span class="responsive-thead">Carbohydrates: </span> ${Math.round(data.foods[0].nf_total_carbohydrate)} g </td>
            <td><span class="responsive-thead">Fiber: </span> ${Math.round(data.foods[0].nf_dietary_fiber)} g </td>
            <td><span class="responsive-thead">Sugar: </span> ${Math.round(data.foods[0].nf_sugars)} g </td>
            <td><span class="responsive-thead">Protein: </span> ${Math.round(data.foods[0].nf_protein)} g </td>
            <td><span class="responsive-thead">Potassium: </span> ${Math.round(data.foods[0].nf_potassium)} mg </td>     
          </tr>
        </tbody>
      </table>
    </div>
  </div>`;
}