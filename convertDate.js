function convertDate(input){
    let months = [
        { month: "Jan", day: 31 },
        { month: "Feb", day: 28 },
        { month: "Mar", day: 31 },
        { month: "Apr", day: 30 },
        { month: "Mei", day: 31 },
        { month: "Jun", day: 30 },
        { month: "Jul", day: 31 },
        { month: "Aug", day: 31 },
        { month: "Sep", day: 30 },
        { month: "Oct", day: 31 },
        { month: "Nov", day: 30 },
        { month: "Dec", day: 31 },
    ];
    
    var result = "";
    try{
        let arrDatetime = input.split(" ");
        let arrDate = arrDatetime[0].split("-");
        
        let tahun = Number(arrDate[0]);
        let bulan = Number(arrDate[1]);
        let hari = Number(arrDate[2]);
        
        if(!Number.isInteger(tahun)
        || !Number.isInteger(bulan)
        || !Number.isInteger(hari)){
            return '';
        }
        
        if(tahun % 4== 0){
            months[1]['day'] = 29;
        }
        
        if(hari <= 0 || hari > months[bulan-1]['day']) {
            return ""
        }
        
        result = `${hari} ${months[bulan-1]['month']} ${tahun}`
        
        if(arrDatetime.length == 2){
            try{
                
                let arrTime = arrDatetime[1].split(":");
                if(Number.isInteger(Number(arrTime[0]))
                && Number.isInteger(Number(arrTime[1]))
                && Number.isInteger(Number(arrTime[2]))){
                    result += ` Pukul ${arrTime[0]}:${arrTime[1]}`
                }
            }catch(err2){
                console.log(err2)
            }
        }
        
    }catch(err){
        console.log(err)
    }
    return result;
}

let result = convertDate("2023-05-28");
console.log(result);