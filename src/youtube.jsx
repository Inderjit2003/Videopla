import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from './CSS/youtube.module.css'
import ReactPlayer from 'react-player';
import Image from './assets/logo.png'
export default function youtube() {
    

    const[video , setvideo] = useState([])
    useEffect(() =>{
        const fetchdata=async()=>{
            try{
                const response = await axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDZsIXENje2lkbScHg2cWcO1NVBVGQwSAQ&part=snippet&type=video&q=music' ,{
                    params: {
                        key: 'YOUR_YOUTUBE_API_KEY',
                        part: 'snippet',
                        type: 'video',
                        q: 'music'
                    }
                    });
                setvideo(response.data.items);
            }
            catch (error) {
                console.error("error" , error)
            }
        };
       fetchdata()
    } , []);



  return (
    <>

        <nav class="navbar ">
          <div class="container-fluid">
              <img src={Image}  />
            <form class="d-flex" role="search">
                <input class="form-control me-3 mt-2"  type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-danger mt-2 me-3" type="submit">Search</button>
            </form>
          </div>
        </nav>
        
        <div className={`container ${style.container}`}>
            <div className="row">
           
            {
                video.map((value) => {
                    return (
                        <>
                         <div className={`col ${style.cardContainer}`}>
                            <div class={`card ${style.card}`} >
                            <ReactPlayer 
                            url={"https://www.youtube.com/watch?v=" + value.id.videoId} 
                             width="100%" height="100%"
                             controls="true"
                             volume="null"
                             />
                              {/* <img src={value.snippet.thumbnails.default.url} class="card-img-top" /> */}
                              <div class={`card-body ${style.cardbody}`}>
                                <h5 class="card-title">{value.snippet.title}</h5>
                              </div>
                            </div>
                            </div>
                    </>
                    );
                })
            }
           
            </div>
        </div>
    </>
  )
}
