import React,{useState}  from 'react'

export default function Grid(props) { 
    const [style, setStyle] = useState(null);
    const draw=()=>{
        let array=props.mat,count=0; 
        for(let i=0;i<9;++i){ 
            if(array[i]==='X' || array[i]==='O'){
               count++;
            }
        }
        if(count===9) return true;
        return false;
    }
    const click = () => { 
        if (props.value === null) {
            let a = props.mat;
            if (props.flag) {
                a[props.val] = 'X';
                setStyle({ color: "red" })
            }
            else {
                a[props.val] = 'O';
                setStyle({ color: "blue" })
            }
            props.setMat(a);
            if(props.isWon()){ 
                let num=props.score;
                if(props.flag){ 
                    num[0]++; 
                }
                else{  
                    num[1]++;
                } 
                props.setScore(num);
                setTimeout(() => {
                    props.setMat(Array(9).fill(null));
                }, 500);
            } 
            if(draw()){ 
                setTimeout(() => {
                    props.setMat(Array(9).fill(null));
                }, 1000)
            }
            props.setFlag(!props.flag)
        }
    }
    return (
        <div>
            <button style={style} onClick={click}>{props.value}</button>
        </div>
    )
}
