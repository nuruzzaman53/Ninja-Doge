import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Details = (props) => {

    const [data,setData] = useState([])

    const [loading,setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const countryId = props.match.params.countryId
        fetch(`https://restcountries.eu/rest/v2/name/${countryId}`)
        .then(response =>  response.json())
        .then(data => {
            setData(data)
            setLoading(false)
        })
    },[])

    const loadingData = (loading) => {
        if(loading) {
            return <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>

        }
    }

    return(

        <div className='container'>
            <h1 className='display-4'>Country details information will display here</h1><br/>
            <Link to='/' className='page-link col-md-2'><i className="fa fa-arrow-circle-left"></i> Back to Home</Link><br/>
            {loadingData(loading)}
                {data.map(c => 
                    <div className='row'>

                        <div className='col-md-4'> 
                            <img src={c.flag} alt={c.flag} style={{maxWidth:'100%'}} /><br/>
                            <h1 className='display-4'>{c.name}</h1>
                            <h5 className='btn btn-outline-primary'> Short Name : {c.alpha3Code}</h5>
                        </div>

                        <div className='col-md-8'>

                            <div className='row'>

                                <div className='col-md-6'>
                                   
                                    <h5><span className='highlight'><i class="fa fa-compass "></i>  Native Name : </span> {c.nativeName}</h5>
                                    <h5><span className='highlight'><i class="fa fa-map-marker "></i> Capital : </span> {c.capital}</h5>  
                                    <h5><span className='highlight'><i class="fa fa-location-arrow"> Region : </i></span>  {c.region}</h5>
                                    <h5><span className='highlight'><i class="fa fa-globe "></i> Sub-region : </span>  {c.subregion}</h5>
                                    <h5><span className='highlight'><i class="fa fa-map"></i> Area (Sq.km) : </span>  {c.area} </h5>
                                    <h5><span className='highlight'><i class="fa fa-users"></i> Population : </span>  {c.population} </h5>
                                    <h5><i class="fa fa-angle-double-right"></i>Regional Blocks</h5>
                                    {c.regionalBlocs.map(rgb => 
                                         <span className='btn btn-outline-primary'>{rgb.name}</span>
                                    )}

                                </div>

                                <div className='col-md-6'>

                                    <h5>Borders</h5>
                                    {c.borders.map(border =>
                                       <span  className='btn btn-outline-primary' style={{margin:'2px'}}>{border} </span> 
                                    )} 
                                    <br/><br/>
                                     <h5><span className='highlight'>Timezones: </span>  {c.timezones} </h5>
                                    {c.currencies.map(curr => 
                                        <h5>
                                            <span className='highlight'>Currency:</span>
                                            <span className='btn btn-outline-primary'> {curr.name} </span>
                                        </h5>
                                    )}
                                    <h5>Languages:</h5>
                                    {c.languages.map(lang => 
                                        
                                            <span  className='btn btn-outline-primary' style={{marginLeft:'5px'}}> {lang.name} </span>
                                        
                                    )} 

                                </div>

                            </div>
                            
                        </div>

                    </div>
                 )}
       </div>
    )
}

export default Details