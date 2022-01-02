function Todo({item}) {
    return <div key={item.id} className={'row'}>
        <div className="col-md-2">
            <input type="checkbox" id={'check/'+item.id}/>
        </div>
        <div className="col-md-10">
            <label htmlFor={'check/'+item.id}>
                {item.title}
            </label>
        </div>
    </div>
}

export default Todo