// import React ,{useEffect,useState}from 'react'
// import axios from "axios"

// export default function Opinion() {
//     const[opinion,setOpinion]=useState([{id:"",subject:"",description:""}]);
//     useEffect(()=>{
// axios
// .get("Feedback")
// .then(res=>setOpinion(res.data));
// console.log(opinion);
//     },[]);
//     return (
//         <div>
//             <h1>feedback</h1>
//           {opinion.map(post =>{
//               return <div key={post.id}>
//                   <h2>{post.subject}</h2>
//                   <p>{post.description}</p>
//                   <button>Delete </button>
//                   </div>
//           })}  
//         </div>
//     )
// }
import React ,{Component} from 'react'
import axios from 'axios';
export default class Opinion extends Component{
constructor(props){
    super(props)
    this.state={
        opinion:[],

    };
}
componentDidMount(){
    axios.get("Feedback").then(res=>{
        const opinion=res.data
        this.setState({opinion})
    });
}
deleteOpinion(id){
    axios.delete(`Feedback/delete/${id}`)
    .then(res=>{
        const opinion=this.state.opinion.filter(item=> item.id !== id);
        this.setState({opinion})
    })
}
render(){ 
return(<div>
    <h1>Feedback</h1>
    <table>
        <tbody>
    {this.state.opinion.map((item=>(
        <div key={item.id}>
            <p>{item.subject}</p>
            <p>{item.description}</p>
            {/* { <p>{item.email}</p>  */}
            <p>{item.user.email}</p>
            <p>{item.services.category}</p>
            {/* <p>{}</p> */}
            <button onClick={(e) => this.deleteOpinion(item.id, e)}>Delete</button>
               
                </div>
    )))}
    </tbody>
</table>

</div>)


}

}
