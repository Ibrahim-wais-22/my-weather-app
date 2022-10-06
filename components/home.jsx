
function Home({ weather ,city ,onClick}){
    console.log(weather);
    return(
       <>
       <div className="countries">

      <h4>THis is Countries</h4>
        <hr />
        <div className="col-6">

        <div className="anotherData1">
            {/* THis is anatherData1 */}
        <div className="name1">
    
           
        <div className='select-head'>
        {city.data.map((city, key) => {
          return (
            <div  key={key} onClick={() => onClick(city.name)}>                
                  {city.name}

            </div>
          );
        })}
      </div> 
        </div>
        </div>
        </div>      
        </div>

        <div className="home">
            <div className="hea">
            
            </div>
            <div className="body-home">

                <h1>{(weather && weather.current.wind_speed) || "..."}</h1>
                <h2>THis is contry state</h2> 
                
      
            </div>
            </div>
        
       </>
    )
}
export default Home
