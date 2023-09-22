import  {useEffect, useState} from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [allData,setAllData]  = useState([]);
    const handleClick = (val) =>{
        setShow(val);
    }
    const handleAddData = e =>{
        e.preventDefault();
        const name   = e.target.name.value;
        const status = e.target.status.value;
        const newData = [...allData];
        newData.push({name,status});
        setAllData(newData);
    }
    useEffect(()=>{
      
    },[show])
    const activeData = allData.filter(item=> item.status === 'active');
    const completedData = allData.filter(item=> item.status === 'completed');
    const othersData    = allData.filter(item=> item.status !=='active' && item.status !=='completed')
    let showData = [];
    if(show=='active'){
       showData = [...activeData];
    }else if(show=='completed'){
       showData = [...completedData]
    }else{
        showData = [...activeData,...completedData,...othersData]
    }
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleAddData} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" className="form-control" name='name' placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" name='status' placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                           {showData.map((data,index)=><tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.status}</td>
                            </tr>)
                           }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;