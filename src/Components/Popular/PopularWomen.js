import React from 'react'
import './Popular.css'
function PopularWomen() {
    const cloths = [
        {
            id: 1,
            Image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSRpXkCcnRyYBqI6TV59LI-VMxaMCBRCOz7_QfBh1BRq5W4yPIqOl0Yg0zoXBOSEwWhOapw5yHHn-RW9Ibp3h3-IZKhYO_FTVhFZpWCOmkARjK4N6rTk_e62A",
            price: 999,
            rating: 4.5
        },
        {
            id: 2,
            Image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ9xvkAyumuE-riwvjfff8BACMOmDGsjUrUi2iQGzGCemGXb15ujYjwn6PLTdW-6EnBJoNk0yuPWFVgDG2NmCt6pNqINO2j1U-WkEBuRsCi4PsWFNSy0WVQ",
            price: 1799,
            rating: 4.0
        },
        {
            id: 3,
            Image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSMpHi0RBK8VPxQkZdMlyJsXhAa67jLyJ1dr4QfRyz_ou7Qr_epkvALlssLPanQ0SNFB2u4LW9KAtuw_cxcVu0xLs25H8hqnNE083dFWVc",
            price: 1599,
            rating: 4.2
        },
        {
            id: 4,
            Image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSUg_H2uc2FvzFRfI6CWLbdF5pAiMCwv0xgCWQDtVC6KZM-wMzI6e3Jb4A5--8ETssxPiRl5etzSslnnlvMuNpuDw2Rtf9iBl7oq1dF77hBDA9Hlc60rx6CpQ",
            price: 1499,
            rating: 4.8
        },
        {
            id: 5,
            Image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR30U2Wdgh0cMvovcc94IwoPqK1X1H1KvlHwzep05EAq5-usxUXkNMtkCK5LqqbOV_PyyqN7CesyyoKu8W0Lr8vjrjdzNQkqIT7AV2VKgE2",
            price: 2999,
            rating: 4.6
        }
    ];
    
    return (
        <div>
            <h1 style={{textAlign:'center'}}>"Latest Trends in Women's Wear"</h1>
        <div className='popular-women'>
           
            {cloths.map((item) => (
                <div key={item.id} className='clothing-item'>
                    <img src={item.Image} alt={`Clothing item ${item.id}`} className='clothing-image'/>
                    <div className='clothing-details'>
                        <p className='clothing-price'>${item.price}</p>
                        <p className='clothing-rating'>Rating: {item.rating} / 5</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}

export default PopularWomen;