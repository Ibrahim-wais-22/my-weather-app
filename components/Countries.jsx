import AnotherData1 from './AnotherData1';
import AnotherData2 from './AnotherData2';

function Countries( {city, onClick}){
    return(
        <>
        <div className="countries">

       



      <h4>THis is Countries</h4>
        <hr />
        <div className="col-6">

        <div className="anotherData1">
            {/* THis is anatherData1 */}
        <div className="name1">
    
           
        <select className='select-head'>
        {city.data.map((city, key) => {
          return (
            <option  key={key} onClick={() => onClick(city.name)}>
                
                
                  {city.name}

              
                
            </option>
          );
        })}
      </select> 
        </div>
        
        </div>



        </div>
        <hr />
        
      
        </div>
        </>
    )
}
export default Countries
