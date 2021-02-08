// Code your solution here

function findMatching(drivers, string){
    let match = drivers.filter( driver => {
        return driver === string || driver === string.toLowerCase()
    })
   return match 
}


function fuzzyMatch(drivers, string){
    return drivers.filter(function(driver){
        return driver.indexOf(string) === 0})
}

function matchName(drivers, string){
    return drivers.filter(function(object) { //driver object, with name property
        if (object["name"] === string){
        return object 
    }
    })

}