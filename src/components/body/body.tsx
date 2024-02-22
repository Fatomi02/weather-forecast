import React from "react";
import "./body.css";
import { Datas } from "../../data/data";
import { HourlyData } from "../../data/data";

function Body() {
    let dayList = Datas.map((data) => {
        return <>
            <div className="border-[1px] border-[#c7c7c7] text-center rounded-3xl mb-3 md:mb-0 w-auto px-6 bg-transparent flex flex-col gap-3 py-6">
                <h4 className="text-xl">{data.day}</h4>
                <h2 className="text-2xl">{data.degree}<sup className="mx-1">o</sup></h2>
                <span className="text-xl">{data.weather}</span>
            </div>
        </>
    })

    let hourList = HourlyData.map((data)=> {
        return <>
            <div className="border-[1px] border-[#c7c7c7] text-center rounded-3xl w-auto px-6 bg-transparent flex flex-col gap-3 py-6">
                <h4 className="text-xl">{data.time}</h4>
                <h2 className="text-2xl">{data.degree}<sup className="mx-1">o</sup></h2>
                <span className="text-xl">{data.weather}</span>
            </div>
        </>
    })

    return <>
        <div className="body w-full h-auto md:rounded-3xl md:flex flex-wrap flex-row">
            <div className="bg-[#f4f4f4] w-full md:w-3/4 rounded-s-3xl flex flex-col pt-8 pb-10 px-4 md:px-20 font-normal text-lg">
                <div className="flex flex-row">
                    <h3 className="md:w-1/2 w-3/4">Horlaite</h3>
                    <span className="md:1/2 1/4 md:text-start">05.02.204</span>
                </div>
                <div className="w-full font-bold flex flex-row justify-center align-baseline mt-8 md:h-60 h-40">
                    <div className="flex flex-col align-baseline justify-end text-9xl">
                        <h1 className="text-9xl md:text-[12rem]">20<sup className="mx-4">o</sup></h1>
                    </div>
                    <div className="flex flex-col align-baseline justify-end">

                        <span className="block text-lg font-normal mb-4">6.1 mph</span>
                        <span className="block text-lg font-normal pb-3">90 %</span>
                    </div>
                </div>
                <div className="w-full text-center text-4xl mt-6">
                    Cloudy
                    <div className="flex flex-row justify-around md:justify-between mt-16 md:w-4/5 flex-wrap mx-auto">
                        {dayList}
                    </div>
                </div>
            </div>
            <div className="bg-[#ededed] text-center md:w-1/4 h-auto rounded-e-3xl flex flex-col pt-5 pb-10 px-1 font-normal text-3xl">
                <h3>Good Morning</h3>

                <span className="mt-5">12:27 PM</span>
                <div className="w-full font-bold flex flex-row justify-center align-baseline mt-12">
                    <div className="flex flex-col align-baseline justify-end">
                        <h2 className="text-5xl">20<sup className="mx-2">o</sup></h2>
                    </div>
                    <div className="flex flex-col justify-end ml-3">
                        <span className="block text-sm font-normal mb-1">6.1 mph</span>
                        <span className="block text-sm font-normal">90 %</span>
                    </div>
                </div>
                <span className="text-sm mt-2">Feels like 19<sup className="ml-1">o</sup></span>
                <span className="text-2xl mt-4">Cloudy</span>

                <span className="text-2xl mt-5">Hourly Forcast</span>

                <div className="flex flex-row justify-between mx-3 md:mx-0 mt-5 md:ml-1 gap-2 flex-wrap">
                    {hourList}
                </div>

            </div>
        </div>
    </>
}

export default Body;