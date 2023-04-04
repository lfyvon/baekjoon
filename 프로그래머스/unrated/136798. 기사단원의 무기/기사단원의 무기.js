function solution(number, limit, power) {
    var answer = 0;
    for(let i = 1; i <= number; i++){
        let count = 0;
        for(let j = 1; j <= Math.sqrt(i); j++){
            if(i % j === 0) count++;
        }
        count *= 2;
        if(Number.isInteger(Math.sqrt(i))) count--;
        if(count > limit) count = power;
        answer += count;
    }
    return answer;
}