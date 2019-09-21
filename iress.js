
function solution1(S, K) {
    weekdays =['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    let index = weekdays.indexOf(S)
    index = index +K;
    let nextIndex =index%7;
    return weekdays[nextIndex]
}


function solution2(T){
    let hour = parseInt(T/3600);
    T =T-hour*3600;
    let minute =parseInt(T/60);
    T =T-minute*60;
    return `${hour}h${minute}m${T}s`
}

function solution3(T,R){
    let caseNum =[];
    T.map(test=>{
        let record =test.match(/(\d+)/)
        recordNum = record[0];
        caseNum.push(recordNum)
    })
    let caseSet = new Set(caseNum)
    caseNums =[...caseSet]
    let passNum = Array(caseNum.length-1).fill(0)
    let totalNum = Array(caseNum.length-1).fill(0)
    // num,totalcase,ok 
    for(let index=0;index<T.length;index++){
        let testCase =T[index].match(/(\d+)/)
        let testNum =testCase[0]-1;
     
        if(R[index] ==="OK"){
            passNum[testNum]=passNum[testNum]+1
        }else{
            passNum[testNum] = passNum[testNum]
        }
        totalNum[testNum]=totalNum[testNum]+1
    }

    let passScore = 0;

    for(let index = 0;index<passNum.length;index++){
        if(totalNum[index]!==0){
            if(totalNum[index] === passNum[index]){
                passScore=passScore+1
            }else{
                passScore=passScore
            }
        }
    }
    totalScore=caseNums.length
    let finalScore = passScore/totalScore*100;
     finalScore = Math.floor(finalScore);
    return finalScore;
}
let T =['test1a', 'test2', 'test1b', 'test1c', 'test3']
let R = ['Wrong answer', 'OK', 'Runtime error', 'OK', 'Time limit exceeded']
let score =solution3(T,R)

console.log(score)