function stringLimit(text, limit){
    var result = '';
    text = text.slice(0, limit+10)
    let arrString = text.split(" ");
    let bts = limit;


    for(let i = 0; i < arrString.length; i++){
        if(arrString[i].length <= bts){
            result += result.length>0?" "+arrString[i]:arrString[i];
            bts -= arrString[i].length+1;
        }else{
            break;
        }
    }
    
    if(text.length > limit){
        result += '...';
    }

    return result;
}

console.log(stringLimit("aku pergi makan nasi goreng di kampung sebelah", 10));