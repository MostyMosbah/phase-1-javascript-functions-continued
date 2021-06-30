function saturdayFun(activity= "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(task= "go to the office") {
    return `This Monday, I will ${task}.`;
}
mondayWork();


function wrapAdjective(visual="*") {
    return function(adjective="special") {
        return `You are ${visual}${adjective}${visual}!`
    }
}

wrapAdjective("*")("special");