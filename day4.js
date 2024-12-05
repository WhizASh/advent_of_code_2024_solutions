let input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`

input = input.split("\n")

let xmax = input[0].length;
let ymax = input.length;



function get(indy,indx){
    if (indx < xmax && indx>=0 && indy>=0 && indy < ymax){
        return input[indy][indx]
    }
    return 0
}

function checking_part1(indy,indx){
    let xmax_count = 0;
    let checkIndex = [
        // [[0,0]], // the origin element
        [[0,1],[0,2],[0,3]],   // right side of origin
        [[0,-1],[0,-2],[0,-3]],// left side of origin
        [[-1,0],[-2,0],[-3,0]],//up side of origin
        [[1,0],[2,0],[3,0]],   //bottom side of origin
        [[-1,1],[-2,2],[-3,3]],//up right digonal
        [[-1,-1],[-2,-2],[-3,-3]],//up left digonal
        [[1,1],[2,2],[3,3]],      //bottom right diagonal
        [[1,-1],[2,-2],[3,-3]]   //bottom left diagonal
    ]
    let xmax_word = 'XMAS'
    

    if(get(indy,indx)=="X"){ //if origin is X 
        let word_idx = 1
        let res_word = 'X'

        for (let y=0;y<checkIndex.length;y++){
            for (let x=0;x<checkIndex[y].length;x++){

                let new_indy = checkIndex[y][x][0] + indy
                let new_indx = checkIndex[y][x][1] + indx
                let w = get(new_indy,new_indx)

                if(w==xmax_word[word_idx]){
                    res_word = res_word + w
                    word_idx++;
                }
                else{
                    break
                }
            }
            if(res_word==xmax_word){
                xmax_count++;
                console.log(res_word,indy,indx)
            }
            word_idx =  1
            res_word = "X"
        }
        
    }
    return xmax_count
}
    
const part1  = () =>{
    let result_count = 0
    for (let i = 0;i<input.length;i++){ // y
        for (let j = 0; j<input[i].length;j++){  //x
            result_count = result_count + checking_part1(i,j)
        }
    }

    console.log(result_count)
}

function checking_part2(indy,indx){
    let right_diagonal_flag= 0

    let checkIndex1 = [
        [[-1,1]],[[1,-1]],   // digonal right side going
    ]
    let checkIndex2=[
        [[1,1]],[[-1,-1]]  // diagonal left side going 
    ]


    if(get(indy,indx)=="A"){ //if origin is A
        let res_word1 = 'A'

        for (let y=0;y<checkIndex1.length;y++){
            for (let x=0;x<checkIndex1[y].length;x++){

                let new_indy = checkIndex1[y][x][0] + indy
                let new_indx = checkIndex1[y][x][1] + indx
                let w = get(new_indy,new_indx)

                if(w=="M" ||  w=="S" && !res_word1.includes(w)){
                    res_word1 = res_word1 + w
                }
                else{
                    break
                }
            }
        }
        if(res_word1.includes('M')&&res_word1.includes("S")){
            right_diagonal_flag =  1
        }
        res_word1 = "A"
        
    }

    if (right_diagonal_flag==1)
    if(get(indy,indx)=="A"){ //if origin is A
        let res_word1 = 'A'

        for (let y=0;y<checkIndex2.length;y++){
            for (let x=0;x<checkIndex2[y].length;x++){

                let new_indy = checkIndex2[y][x][0] + indy
                let new_indx = checkIndex2[y][x][1] + indx
                let w = get(new_indy,new_indx)

                if(w=="M" ||  w=="S" && !res_word1.includes(w)){
                    res_word1 = res_word1 + w
                }
                else{
                    break
                }
            }
        }
        if(res_word1.includes('M')&&res_word1.includes("S")){
            console.log(indy,indx)
            return true
        }
        res_word1 = "A"
        
    }

    return false
}

const part2 = () =>{
    let result_count = 0
    for (let i = 0;i<input.length;i++){ // y
        for (let j = 0; j<input[i].length;j++){  //x
            if(checking_part2(i,j)){
                result_count++
            }
        }
    }

    console.log(result_count)
}

part2()