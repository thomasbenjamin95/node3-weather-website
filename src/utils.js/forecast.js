const request = require('request')

const forecast = (longitude,lattitude, callback) => {
    const urls = 'http://api.weatherstack.com/current?access_key=57f3beb1b7aa984e8b5364c9cba1dd24&query='+lattitude+','+longitude
    request({url: urls, json: true}, (error, {body}) => {
        console.log(body)
        if(error){
            callback('Unable to connect to webservices', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined)
        }else {
            callback(undefined, 'In '+ body.location.name +', the weather is '+ body.current.weather_descriptions+ '. It is currently '+ body.current.temperature + ' degree out. The wind speed is '+ body.current.wind_speed+ ' and the visibility is '+ body.current.visibility+'. It feels like '+ body.current.feelslike + ' degree outside.')
        }
    })
}

module.exports = forecast