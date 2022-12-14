import React, {useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';




const Chart = ({
                   dataForCharts
               }) => {


    /*    console.log('fileAgr1000Data = '+fileAgr1000Data.data)
        console.log('fileAgr2000Data = '+fileAgr2000Data.data)*/

/*
    console.log('dataForCharts')
    console.log(dataForCharts)
*/

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const agrIndexes=[]

    const colors=[
        'rgb(255, 50, 50)',
        'rgb(99, 250, 132)',
        'rgb(130, 99, 250)',
        'rgb(130, 250, 250)',
        'rgb(250, 250, 100)'

    ]

    const options = {
        responsive: true,
        animation: {
            duration: 0
        },
        plugins: {
            /*
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                },
            },*/

            title: {
                display: true,
                text: 'Charts',
            },
        },

        /*
        scales: {
            y: {
                max:11,
                min:0
            }
        },
*/
    };



    const [data, setData] = useState(null);

    useEffect(() => {

        console.log('o_O chart refresh')

        let datasets=[];

        let yShift=1;
        let local_counter=0

        let tmp_indexes = []

        console.log("dataForCharts.length")
        console.log(dataForCharts.length)
        console.log(dataForCharts)


        if(dataForCharts.length>0)
            dataForCharts.map((item, index)=> {

                let tmp_mas = []
                tmp_indexes=[]

                local_counter=0
                item.data.map((y) => {
                    local_counter++
                    tmp_mas.push(y)
                    tmp_indexes.push(local_counter)
                })


                datasets.push(
                    {
                        label: item.label,
                        data: tmp_mas,
                        borderColor: colors[yShift-1],
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        pointRadius: 1,
                    }
                )


                //console.log(datasets)


            yShift++
        })

        const data = {
            labels: tmp_indexes,
            datasets: datasets,
         };

        setData(data)

    }, [dataForCharts]);//, agrIndexes




    return data ? (
        <Line

            options={options}
            data={data}
        />
    ) : null;

};

export default Chart;