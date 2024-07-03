
import './CSS/Todoitems.css';
import tick from './Assets/tick.png';
import circle from './Assets/circle.png';
import cross from './Assets/cross.png'




export const Todoitem = ({no,display,text,settodos}) => {
  const deletes=(no)=>{
    let data=JSON.parse(localStorage.getItem("todos"));
    data=data.filter((todo)=>todo.no!==no);
    
    settodos(data);
  }
    const toggle=()=>{
        let data=JSON.parse(localStorage.getItem("todos"));
        for(let i=0;i<data.length;i++){
          if(data[i].no===no){
            if(data[i].display===""){
              data[i].display="line-through";
            }
            else{
              data[i].display="";
            }
            break;
          }
        }
        settodos(data);
    }
  return (
    <div className='todoitem'>
        <div className={`todoitem-container ${display}`} onClick={()=>{toggle(no)}}>
         {display===""?<img src={circle} alt="" />: <img src={tick} alt="" />}   
            
             <div className="todoitem-text">{text}</div>
             </div>
         <div className="todocross"> <img onClick={()=>{deletes(no)}} src={cross} alt="" /></div>
    </div>
  )
}
