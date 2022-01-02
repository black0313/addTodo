import {useState} from 'react'
import {connect} from "react-redux";
function AddTack({add}) {

    const [inVal,setInVal] = useState('');

    function addTack(){
        if (inVal){
            add(inVal);
        }
    }

    return(
        <div className={'row'}>
            <div className="col-md-10">
                <input value={inVal} onChange={(e)=>setInVal(e.target.value)} type="text" className={'form-control'}/>
            </div>
            <div className="col-md-2">
                <button className={'btn btn-dark'} onClick={addTack}>ADD</button>
            </div>
        </div>
    )
}
function mapDisPatch(dispatch) {
    return {
        add:(title)=>{
            dispatch({
                type: 'addTodo',
                payload:title
            })
        }
    }
}

export default connect(null,mapDisPatch) (AddTack)