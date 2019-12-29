const request=require('request')


const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiYW5pbGt1IiwiYSI6ImNqejRqd3l4MTAwMGEzYm9kcGh5MGU2bzQifQ.rM_dyl8xYTk_yP3ZKhe-GQ&limit=1'
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to MAPbox service!!!',undefined)
        }else if(body.features.length === 0){
            callback('Unable to find location!!! and try another search',undefined)
        }else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })

}

module.exports=geocode;