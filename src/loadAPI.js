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
            <h1 className='display-4'>World Information</h1> <hr/>

            <div className='row'>
                
                {data.slice(pageVisited,pageVisited + countryPerPage).map(c =>
                         <div class="col-xs-9 col-sm-6  col-md-3 col-lg-2 my-1 card p-4 mx-2">
                              <img src={c.flag}  alt={c.flag} style={{maxWidth:'100%'}}  />
                             <h6 className='mt-2'>{c.name}</h6>
                             <p>Capital: {c.capital}</p>
                             <p>Region : {c.region}</p>
                             <Link className='btn btn-outline-info' to={`/country/${c.name}`}  >
                                 More Information
                             </Link>

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