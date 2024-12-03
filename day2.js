inp =`//your input`

const formated_input = () =>{
    inpu = inp.split("\n").map((ele)=>{
        return ele.match(/\d+/g).map((ele)=>parseInt(ele))
    })
    return inpu
}
let count = 0;
const checking_Logic = (ele) => {
    let i=0
    let newsign=0
    let prevsign=0
    let flag = 0

    for(i=0;i<ele.length-1;i++){

        //checking difference
        let diff = ele[i]-ele[i+1]
        //no sign differnece
        let newdiff = Math.abs(diff)
        //current sign
        newsign = diff > 0? 0:1

        //0 -> negative / ascending order
        //1 -> positive / descending order
        
        //only true for first time when prevsign is not set
        if (flag==1)
        if(newsign!=prevsign){
            break
        }
        if(newdiff==0 || newdiff>3){
            break
        }

        prevsign = diff > 0? 0:1
        //once prevsign is set , set flag to true
        if(flag==0)
            flag = 1
    }

    //checking if all elements are checked 
    if (i==ele.length-1){
        return true
    }
}

const part1 = () =>{
    
   let input = formated_input()
   input.forEach((ele)=>{
    if(checking_Logic(ele)){
        count ++;
    }
   });
   console.log(count)
}

const part2 = ()=>{
    let input = formated_input()
    
    input.forEach((ele)=>{
        for (let i=0;i<ele.length;i++){
            let temp = ele.filter((e,idx)=>idx!=i)
            if (checking_Logic(temp)){
                count++;
                break
            }
            
        }
    })
    console.log(count)
}

part2()