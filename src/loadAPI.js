import React,{useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate'
import {Link} from 'react-router-dom'

const Country = () => {

    const[data,setData] = useState([])

    const [pageNumber,setPageNumber] = useState(0)

    const countryPerPage = 20

    const pageVisited = pageNumber * countryPerPage

    const pageCount = Math.ceil(data.length / countryPerPage)

    useEffect(()=> {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    })

    console.log(data)


    const changePage = ({selected}) => {

        setPageNumber(selected)
    
      }


    return(
        <div className='container'>

            <h1 className='display-4'>WorldInfo</h1> <hr/>

            <form class="form-inline">
                <input class="form-control mr-sm-2 col-md-8" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>


            <div className='row'>
                
                {data.slice(pageVisited,pageVisited + countryPerPage).map(c =>
                         <div class="col-3">
                             <div className='card' style={{width: "18rem"}}>
                                <img src={c.flag} className="card-img-top"  alt={c.flag}  />
                                <div className='card-body'>
                                    <h6 className='card-title'>{c.name}</h6>
                                    <p className='card-text'>Capital: {c.capital}</p>
                                    <Link className='btn btn-outline-info' to={`/country/${c.name}`}  >
                                        + Details Information
                                    </Link>
                                </div>
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