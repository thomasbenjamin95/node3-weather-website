const request = require('request')
const forecast = (lattitude, longitude, callback) => {
const url = 'http://api.weatherstack.com/current?access_key=ce241b27d54d227117296ee0cdfbcf01&query='+lattitude+','+longitude+'&units=f'


    request( {url: url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to webservices', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined)
        }else {
            callback(undefined, 'It is currently '+ body.current.temperature + ' degree out. It feels like '+ body.current.feelslike + ' degress out.')
        }
    })
}

module.exports = forecast