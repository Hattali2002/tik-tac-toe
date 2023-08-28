import React,{useState}  from 'react'

export default function Grid(props) { 
    const {flag,setFlag,ind,mat,setMat,setScore,score,value,isWon}=props;

    const [style, setStyle] = useState(null);
    const draw=()=>{
        let array=mat,count=0; 
        for(let i=0;i<9;++i){ 
            if(array[i]==='X' || array[i]==='O'){
               count++;
            }
        }
        if(count===9) return true;
        return false;
    }
    const click = () => { 
        if (value === null) {
            let a = mat;
            if (flag) {
                a[ind] = 'X';
                setStyle({ color: "red" })
            }
            else {
                a[ind] = 'O';
                setStyle({ color: "blue" })
            }
            setFlag(!flag)
            setMat(a);
            if(isWon()){ 
                let num=score;
                if(flag){ 
                    document.getElementById("msg").innerHTML="X won the game"
                    num[0]++; 
                }
                else{  
                    document.getElementById("msg").innerHTML="O won the game"
                    num[1]++;
                } 
                setScore(num);
                setTimeout(() => {
                    setMat(Array(9).fill(null));
                    setFlag(true);
                }, 500); 
            } 
            if(draw()){ 
                document.getElementById("msg").innerHTML="match draw"
                setTimeout(() => { 
                    setFlag(true);
                    setMat(Array(9).fill(null));
                }, 1000) 
            }  
            setTimeout(() => {
                document.getElementById("msg").innerHTML="";
            }, 1000)
        }
    }

    return (
        <div>
            <button style={style} onClick={click}>{value}</button>
        </div>
    )
}
