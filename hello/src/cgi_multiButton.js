import Button from '@material-ui/core/Button';

const changeText=(event)=>{
  console.log(event.target)

  if (event.target.innerText.length <= 6)
    event.target.innerText = event.target.innerText + "被點了";
  else
  event.target.innerText = event.target.innerText.substring(0, event.target.innerText.length - 3)
 }
/**
 const MultiButton=(num)=>{
  var output=[];
  for(let i=1;i<num+1;++i)
    output.push( <button onClick = {changeText} >第{i}個按鍵</button>)
  return output;
 } 
 */
 console.log("xxxxxx");

 const MultiButton=(num)=>{
    var output=[];
    for(let i=1;i<num+1;++i) {
    output.push(<Button variant="contained" color="primary"
    onClick={changeText}>第{i}個按鍵</Button>)
   }
  return output;
 }


export default MultiButton; 
