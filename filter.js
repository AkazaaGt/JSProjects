import getListTemplate from './list.js'

// TODO: improve btn filter and 
// TODO: implement selector on breed
const FILTER_TYPES = {
    natural: 'Natural',
    mutation: 'Mutation'
}


export default async function filter({btns, data, parent, select}) {
    if(!btns) return
    if(!select) return

    let currentFilter = new Map();

    const handleBtnFilter = (event) => {
        event.preventDefault()
        const btn = event.target
        const filterType = btn.dataset.btn
        if(filterType === FILTER_TYPES.natural) {
            filteredData = naturalDataFilter()
        } else if(filterType === FILTER_TYPES.mutation) {
            filteredData = mutationDataFilter()
        }
        return filteredData
    } 
    const handleSelectFilter = (event) =>{
        const filterType = event.target.value
        filteredData = data.filter(item=>{
            return item.country === filterType;
        })
        console.log(filterType)
        return filteredData;
    }
    const handleFilter = (e) => {
        let filteredData = data
        if (e.target.dataset.btn) {
            currentFilter.set('options', e.target.dataset.btn)
            if(e.target.dataset.btn == 'Mutation') {
                filteredData = btnDataFilter()
            } else if(e.target.dataset.btn == 'Natural') {
                filteredData = btnDataFilter()
            } else if(e.target.dataset.btn == 'All') {
                filteredData = data
            }
        } else if (e.target.value) {
            currentFilter.set('selectors', e.target.value)
            filteredData = selectDataFilter()
        }

        return filteredData
    }
    const btnDataFilter = () => {
        return data.filter(item => item.origin === currentFilter.get('options'))
    }

       const selectDataFilter = () => {
					return data.filter(
						(item) => item.country === currentFilter.get('selectors')
					)
				}


 
    // const selectDataFilter = ()

    btns.forEach(btn => document.addEventListener('click', async(e) => {
        const filteredData = handleFilter(e)
        parent.innerHTML = await getListTemplate(filteredData)

    }))
    
    select.addEventListener('change', async (e)=> {
      const filteredData = handleFilter(e);
       parent.innerHTML = await getListTemplate(filteredData)
       console.log(currentFilter)
    })

}