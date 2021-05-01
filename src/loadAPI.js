import React,{useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate'
import {Link} from 'react-router-dom'
import Menu from './Menu'

const Country = () => {

    const[data,setData] = useState([])

    const [loading,setLoading] = useState(false)

    const [search,setSearch] = useState('')

    const [pageNumber,setPageNumber] = useState(0)

    const countryPerPage = 20

    const pageVisited = pageNumber * countryPerPage

    const pageCount = Math.ceil(data.length / countryPerPage)

    useEffect(()=> {
        setLoading(true)
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
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


    const changePage = ({selected}) => {

        setPageNumber(selected)
    
      }

      const filteredData = data.filter(country => {
          return country.name.toLowerCase().includes(search.toLowerCase())
      })


    return(
                   
        <div className='container'>
             <Menu /> <br/>
            <input type='search'           
                className='form-control col-md-8 col-sm-3' 
                placeholder='Enter A country .....'
                onChange={ e => setSearch(e.target.value)}        
            />

            <br/>
            <div className='row'>
            <div className='justify-content-center'>{loadingData(loading)}</div>
                {filteredData.slice(pageVisited,pageVisited + countryPerPage).map(c =>
                         <div class="col-sm-12 col-md-5 col-lg-4 col-xl-3 my-3">
                             <div className='card' style={{width: "18rem" ,height:"18rem"}}>
                                <Link to={`/country/${c.name}`} className='link' >
                                <img src={c.flag} className="card-img-top"  alt={c.flag}  />
                                <div className='card-body'>
                                    <h6 className='card-title'>{c.name}</h6>
                                    <p className='card-text'>Capital: {c.capital}</p>

                                </div>
                                </Link>                         
                             </div>
                       </div>
                 )}
            </div>

            <br/>

            <div className='row'>
                <ReactPaginate 
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={'pagination'}
                        previousLinkClassName={'page-link'}
                        nextLinkClassName={'page-link'}
                        pageClassName={'page-item'}
                        activeClassName={'active'}
                        pageLinkClassName={'page-link'}
                />
            </div>
            


        </div>
    )
}

export default Country