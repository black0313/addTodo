import AddTack from "./component/AddTack";
import TackList from "./component/TackList";

function App() {
    return (
        <div className={'container'}>
            <div className="row" style={{marginTop:'25px'}}>
                <div className="col-md-8 offset-2">
                    <div className="card">
                        <div className="card-header">
                            <AddTack/>
                        </div>
                        <div className="card-body" style={{background:'#fee9ff',color:'black'}}>
                            <TackList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
