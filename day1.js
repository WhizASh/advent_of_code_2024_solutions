//Your input 
let inp = `3   4
4   3
2   5
1   3
3   9
3   3`

const num_sort = (a,b)=>{
    return a-b
}

let input1 = inp.split('\n').map((ele)=> parseInt(ele.match(/\d+/g)[0]))
let input2 = inp.split('\n').map((ele)=>parseInt(ele.match(/\d+/g)[1]))

const part1 = ()=>{
    
    input1 = input1.sort(num_sort)
    input2 = input2.sort(num_sort)

    let result = input1.map((ele,idx)=>Math.abs(ele-input2[idx]))
    
    let sum = 0
    result.forEach((ele)=>sum=sum+ele)
    // console.log(result)
    console.log(sum)
}

const part2 = ()=>{
    let result = {}  //element:count
    input1.forEach((ele)=>{
        if (!result.hasOwnProperty(ele)){
            let ele_count = input2.filter((num)=>num==ele).length
            result[ele] = ele_count
        }
    })

    let sum = 0
    input1.forEach((ele)=>{
        sum = sum + (result[ele]*ele)
    })

    // console.log(result)`
    console.log(sum)
}

part1()
part2()