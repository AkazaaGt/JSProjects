import getListTemplate from './list.js'

// TODO: improve btn filter and 
// TODO: implement selector on breed
const FILTER_TYPES = {
    natural: 'Natural',
    mutation: 'Mutation'
}

export default async function filter({btns, data, parent}) {
    if(!btns) return

    const handleBtnFilter = (event) => {
        event.preventDefault()
        const btn = event.target
        const filterType = btn.dataset.btn
        let filteredData = data
        if(filterType === FILTER_TYPES.natural) {
            filteredData = naturalDataFilter()
        } else if(filterType === FILTER_TYPES.mutation) {
            filteredData = mutationDataFilter()
        }

        return filteredData
    } 

    const naturalDataFilter = () => {
        return data.filter(item => item.origin === FILTER_TYPES.natural)
    }

    const mutationDataFilter = () => {
        return data.filter(item => item.origin === FILTER_TYPES.mutation)
    }

    btns.forEach(btn => document.addEventListener('click', async(e) => {
        const filteredData = handleBtnFilter(e)
        parent.innerHTML = await getListTemplate(filteredData)
    }))

}