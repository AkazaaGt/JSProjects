// import mockData from './mock.js'
const API = 'https://catfact.ninja/breeds'

// TODO: use async/await
// TODO: init singleTone
export default async function getDataFromAPI() {
    console.log('before fetch')
      const response =await fetch(API)
	    const responseJson = await response.json()
		const data = await responseJson.data
			return data
}