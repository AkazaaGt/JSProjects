export default async function getListTemplate(data) {

    console.log('after await')

    //TODO: Use reduce method instead map https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    const listTemplates = data.reduce((acc,elem) => { //O(n)
        acc += `  <li>
                <h2>${elem.breed}</h2>
                <p>${elem.country}</p>
            </li>`
        return acc;
        
    }, ``)
//n
    return `
       <ul>
           ${listTemplates}
       </ul>
    `
}