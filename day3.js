const fs = require("fs")

let inp = fs.readFileSync('day3_input.txt','utf8')


const part1 = ()=>{
    let result_muls = inp.match(/mul\(\d+,\d+\)/g)
    let result = 0
    result_muls.forEach((ele) => {
        nums = ele.match(/\d+/g)
        result = result + (parseInt(nums[0])*parseInt(nums[1]))
        console.log(nums)
    });

    console.log(result)
   
}

const part2 = ()=>{
    let flag = 1
    let do_flag = 0
    let result_muls = inp.match(/don't\(\)|do\(\)|mul\(\d+,\d+\)/g)
    console.log(result_muls)
    let result = 0

    for(let i=0;i<result_muls.length;i++){
        let ele = result_muls[i]
        if (ele=="don't()"){
            flag = 0
        }
        if(ele=="do()"){
            flag = 1
            do_flag = 1
        }
        if (do_flag==0){
            if (flag==1){
                let nums = ele.match(/\d+/g)
                console.log(ele)
                result = result + (parseInt(nums[0])*parseInt(nums[1]))
            }
        }
        do_flag = 0
    }
    
    console.log(result)

}

part2()