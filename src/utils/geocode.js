const request = require('request')


const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibWlhbmhhc3NuYWluNzg2IiwiYSI6ImNrZW5taHR4dDB2NzIzM284ZXVtYjE2cjgifQ._AuMZf-iTVx3i4kAd9hAbA&limit=1'
    request({url,json:true},(error,{ body })=>{
        if (error) {
            callback("couldn't open url",undefined) 
        } else if(body.features.length === 0) {
            callback('unable to find coordinates error',undefined)
        } else {
            const data= {
                longtitude : body.features[0].center[0],
                latitude : body.features[0].center[1] 

            }
             
            callback(undefined,data)
        }

    })

}

module.exports = geocode 