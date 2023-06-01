function pagination(total, current){
    let result = [];
    let pageStatus = false;

    if(current > total){
        current = total;
    }
    if(current < 1){
        current = 1;
    }

    for(let i = 1; i <= total; i++){
        if(i == 1 || i == total){
            result.push(i);
            pageStatus = true;
            continue;
        }
        if(current > i - 3 && current < i + 3){
            result.push(i);
            pageStatus = true;
            continue;
        }

        if(pageStatus){
            result.push('...');
            pageStatus = false;
            continue;
        }

    }

    return result.join(" ");
}

console.log(pagination(29,25));