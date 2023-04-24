import React, { useEffect, useState } from 'react'

const Statewise = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, [])
    return (
        <>
            <div className='container-fluid mt-5 text-center'>
                <div className="main-heading">
                    <h1 className='mb-5 text-center'> <span className='font-weight-bold'>INDIA</span> COVID-19 DASHBOARD</h1>
                </div>
                <div className="table-responsive1">
                    <table className='table table-hover'>
                        <thead className='thread-dark'>
                            <tr >
                                <th>STATE</th>
                                <th>CONFIRMED</th>
                                <th>RECOVERED</th>
                                <th>DEATHS</th>
                                <th>ACTIVE</th>
                                <th>UPDATED</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((currElem, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <td className='state' style={{ background: 'white' }}
                                                onMouseOver={(e) => {
                                                    e.target.style.background = 'green';
                                                }}
                                                onMouseOut={(e) => {
                                                    e.target.style.background = 'white';
                                                }}
                                            >{currElem.state} </td>
                                            <td   onMouseOver={(e) => {
                                                    e.target.style.background = 'green';
                                                }}
                                                onMouseOut={(e) => {
                                                    e.target.style.background = 'white';
                                                }}>{currElem.confirmed}</td>
                                            <td   onMouseOver={(e) => {
                                                    e.target.style.background = 'green';
                                                }}
                                                onMouseOut={(e) => {
                                                    e.target.style.background = 'white';
                                                }}>{currElem.recovered}</td>
                                            <td   onMouseOver={(e) => {
                                                    e.target.style.background = 'red';
                                                }}
                                                onMouseOut={(e) => {
                                                    e.target.style.background = 'white';
                                                }}>{currElem.deaths}</td>
                                            <td   onMouseOver={(e) => {
                                                    e.target.style.background = 'yellow';
                                                }}
                                                onMouseOut={(e) => {
                                                    e.target.style.background = 'white';
                                                }}>{currElem.active}</td>
                                            <td   onMouseOver={(e) => {
                                                    e.target.style.background = 'yellow';
                                                }}
                                                onMouseOut={(e) => {
                                                    e.target.style.background = 'white';
                                                }}>{currElem.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </>
    )
}

export default Statewise
