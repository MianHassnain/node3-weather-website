const request = require('request')

const forecast = (latitude,longitude,callback)=>{
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+encodeURIComponent(latitude)+'&lon='+encodeURIComponent(longitude)+'&appid=039bf9bb3ac647fd74d5bfbbb0308b81'
    request({url,json:true},(error, { body } )=>{
        if (error) {
            callback("couldn't open url",undefined)
        }else if(body.error){
            callback("unable to find locations",undefined)
        }else {
            callback(undefined,"it is currently "+body.current.weather[0].description)    
        }
    })

}

module.exports = forecast
