import getDataFromAPI from './request.js'

export default async function createSelect(data, parent){
  const select = document.createElement('select');
  console.log(data)
   const setCollection = new Set()
  data.forEach((elem, index)=>{
    setCollection.add(elem.country);
   
  })
  console.log(setCollection)
  for(let set of setCollection) {
    const option = document.createElement('option')
    option.value = set;
		option.innerHTML = set;
    select.appendChild(option)
  }
   
  console.log(setCollection)
  console.log(select);
  parent.appendChild(select)
}