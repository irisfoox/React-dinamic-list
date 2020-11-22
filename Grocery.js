import React from 'react';
class Grocery extends React.Component{
    constructor (props){
        super(props);
        this.state={
            name :'',
            num :0,
            mylist:[],
        };
    }
    updateRow=(e)=>{
         let name=e.target.value.item.name;
         let num=e.target.value.item.num;
         mylist=[...(e.target.value.item)];
         return  this.setState({[name]: num});
        }
    addRow(e){
        var row=document.getElementById("row").innerHTML();
        document.getElementById("table").append(row);
    }
    addRow(e,props){
        this.addRow(e);
        this.setState.props.name= this.state(e.target.value); //to get the clicked name from arr into the shopping list
    }
    deletRow=(e)=>{
        mylist.remove(e.target.value.item);
    }
    filter(e){
        var rowArr[]=document.getElementsById("row");
        <select className="select" id="search">
        </select>    
        for(let i=0;i<rowArr.length;i++){
            if(rowArr[i].contains({name:this.state.item.name})){
                  document.getElementById("search").append(
                  <option onClick={(e)=>this.addRow(e,rowArr[i])}>
                      {rowArr[i].pop(rowArr[i].contains({name:this.state.item.name}))}
                  </option>);              
            }
        } 
    }
    getStyle=()=>{
        var mystyle={color: "blueviolet"}
        return mystyle;
    }
    render(){
        //var item=new Grocery();
        var mylist=[];
        return(
            <>
               <h1 style={this.getStyle()}>Grocery shopping</h1>
               <table id="table">
               <tr>
               <th>Product</th>
               <th>Quantity</th>
               </tr>
               <tr id="row">
                  <td>
                     <input type="text" value={this.state.item.name} onChange={(e)=>this.setState(e.target.value)} onChange={this.state.filter(e)}></input>
                  </td>
                  <td>
                      <input type="number" value={this.state.item.num} onChange={(e)=>this.setState(e.target.value)}></input>
                  </td>
                  <td>
                      <button type="button" id="up" onClick={(e)=>this.state.updateRow(e.target.value)}>Update row</button>
                  </td>
                  <td>
                      <button type="button" id="add" onClick={(e)=>this.state.addRow(e.target.value)}>Add row</button>
                  </td>
                  <td>
                      <button type="button" id="del" onClick={(e)=>this.state.deletRow(e.target.value)}>Delete row</button>
                  </td>
       
              </tr>
              </table>
            </>
        );
    }
} 
export default Grocery  