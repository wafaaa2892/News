import React, { useState } from 'react'
import axios from 'axios';
import star from '../../img/background.jpg';
import { useEffect} from 'react';
import { Await } from 'react-router-dom';
import style from './Health.module.css';



export default function Science() {
    const[newsApi,setNewsApi] = useState([]);
    async function getData(){
        let infoData = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=53d413b09da8406f8c343a1e718cde1c`);
        console.log(infoData.data.articles);
        setNewsApi(infoData.data.articles);
    }
    useEffect(()=>{
        getData();
    },[])
    return <>
    <div className="container">
        <div className="row">
            <h1 className={`${style.head1} text-center`}>US Health News</h1>
            {newsApi.map((element)=>
                <div className="col-md-3 mt-5">
                    <div className={`${style.cards1} text-center`}>
                        {element.urlToImage?<img src={element.urlToImage} className={`${style.cardImg} w-100 shadow-3-strong mb-4 h-100`} alt="Boat on Calm Water"/>:<img src={star} className="card-img w-100 shadow-3-strong mb-4" alt="Boat on Calm Water"/>}
                        <div className={`${style.cardBody} w-100 h-100 text-center pt-5`}>
                            {element.author?<h4 className={`${style.cardTitles}`}>{element.author}</h4>:<h4 className={`${style.cardTitles}`}>Lorem ipsum dolor.</h4>}            
                            {element.description?<p className={`${style.subTitles} mb-5`}>{element.description}</p>:<p className={`${style.subTitles} mb-5`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus illum iure similique atque, maxime voluptatum.</p>}
                        </div>
                    </div>

                </div>
            )}
        </div>
    </div>
    </>
}
