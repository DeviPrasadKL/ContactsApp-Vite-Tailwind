import React, { useEffect, useState } from 'react';
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default function Maps() {

    let [lineData, setLineData] = useState([]);
    let [pending, setpending] = useState(true);
    let [error, seterror] = useState(null);

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/countries")
            .then((res) => {
                if (res.ok === false) {
                    throw Error("Searching data not found in this API")
                }
                return res.json();
            })
            .then((data) => { setLineData(data); setpending(false) })
            .catch((err) => { seterror(err.message); setpending(false) })
    }, []);

    var optionsCases = lineData.map((data) => {
        return (
            data.cases
        )
    })
    var optionsDeaths = lineData.map((data) => {
        return (
            data.deaths
        )
    })
    var optionsRecovered = lineData.map((data) => {
        return (
            data.recovered
        )
    })
    var optionsPopulation = lineData.map((data) => {
        return (
            data.population
        )
    })


    const cases = {
        title: {
            text: 'Cases'
        },
        series: [{
            data: optionsCases,
        }]
    }
    const deaths = {
        title: {
            text: 'Deaths'
        },
        series: [{
            data: optionsDeaths,
        }]
    }
    const recovered = {
        title: {
            text: 'Recovered'
        },
        series: [{
            data: optionsRecovered,
        }]
    }
    const population = {
        title: {
            text: 'Population'
        },
        series: [{
            data: optionsPopulation,
        }]
    }


    return (
        <div className='max-sm:w-screen'>
            {error && <h1>{error}</h1>}
            <div className='flex max-sm:block'>
                <div className='pl-24 max-sm:pl-1' >
                    <div className='my-4'>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={cases}
                        />
                    </div>
                    <div>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={deaths}
                        />
                    </div>
                </div>
                <div className='pl-4 max-sm:pl-1'>
                    <div className='my-4'>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={recovered}
                        />
                    </div>
                    <div>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={population}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
