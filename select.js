import getDataFromAPI from './request.js'

export default async function createSelect(){
  const data = await getDataFromAPI();
  const fragment = document.createDocumentFragment();
  const select = document.createElement('select');
  console.log(data)
  data.forEach((elem)=>{
    const option = document.createElement('option');
    option.value = elem.country;
    option.innerHTML = elem.country;
    select.appendChild(option);
  })
  fragment.appendChild(select);
  document.querySelector('#select').appendChild(fragment)
}