const request = require('request')


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoidGhvbWFzYmVuamFtaW45NSIsImEiOiJja3dmbXpvZ2UwZzZxMm9uMG96YjF0YWppIn0.Mznb5cOeTGvEjpfwav9iHA'
    request({url: url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        }else if(body.features.length === 0){
            callback('Unable to find location, try another search!', undefined)
        }else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    }
    )}


module.exports = geocode