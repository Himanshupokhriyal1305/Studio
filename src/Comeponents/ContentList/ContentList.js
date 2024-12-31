import React from 'react';
import { images } from '../Image/Allimages';

const ContentList = () => {
  const data = [
    {
      id: 1,
      list: 1,
      thumbnail: (
        <img
          className=""
          src={images.boy}
          alt="fallback image"
          style={{ width: '100%', height: '60px', borderRadius: '5px' }}
        />
      ),
      title: 'क्या Complan आपकी 🧑‍💼Height सच में Badhata है? #shorts',
      date: '7 May 2023',
      duration: '0:28 (53.4%)',
      views: 30,
    },
    {
      id: 2,
      list: 2,
      thumbnail: (
        <img
          className="childs"
          src={images.boyes}

          alt="fallback image"
          style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
        />
      ),
      title: 'Khatarnaak घटना जो😱 Camera में Record हो Gayi (Part 1) #shorts',
      date: '16 Jun 2023',
      duration: '0:47 (84.3%)',
      views: 4,
    }, {
        id: 2,
        list: 2,
        thumbnail: (
          <img
            className="childs"
            src={images.boyes}

            alt="fallback image"
            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
          />
        ),
        title: 'Khatarnaak घटना जो😱 Camera में Record हो Gayi (Part 1) #shorts',
        date: '16 Jun 2023',
        duration: '0:47 (84.3%)',
        views: 4,
      },
      {
        id: 2,
        list: 2,
        thumbnail: (
          <img
            className="childs"
            src={images.boy}

            alt="fallback image"
            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
          />
        ),
        title: 'Khatarnaak घटना जो😱 Camera में Record हो Gayi (Part 1) #shorts',
        date: '16 Jun 2023',
        duration: '0:47 (84.3%)',
        views: 4,
      }, 
      {
        id: 2,
        list: 2,
        thumbnail: (
          <img
            className="childs"
            src={images.boyes}

            alt="fallback image"
            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
          />
        ),
        title: 'Khatarnaak घटना जो😱 Camera में Record हो Gayi (Part 1) #shorts',
        date: '16 Jun 2023',
        duration: '0:47 (84.3%)',
        views: 4,
      },
      {
        id: 2,
        list: 2,
        thumbnail: (
          <img
            className="childs"
            src={images.boy}

            alt="fallback image"
            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
          />
        ),
        title: 'Khatarnaak घटना जो😱 Camera में Record हो Gayi (Part 1) #shorts',
        date: '16 Jun 2023',
        duration: '0:47 (84.3%)',
        views: 4,
      },
      {
        id: 2,
        list: 2,
        thumbnail: (
          <img
            className="childs"
            alt="fallback image"
            src={images.boyes}

            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
          />
        ),
        title: 'Khatarnaak घटना जो😱 Camera में Record हो Gayi (Part 1) #shorts',
        date: '16 Jun 2023',
        duration: '0:47 (84.3%)',
        views: 4,
      },
      {
        id: 2,
        list: 2,
        thumbnail: (
          <img
            className=""
            src={images.boy}

            alt="fallback image"
            style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
          />
        ),
        title: 'Khatarnaak घटना जो😱 Camera में Record हो Gayi (Part 1) #shorts',
        date: '16 Jun 2023',
        duration: '0:47 (84.3%)',
        views: 4,
      },
    // Remaining items...
  ];

  return (
    <div className="container bg-white ">
    <div className='justify-content-center d-flex'>
      <hr className='' style={{width:"70px"}}/>
    </div>
    <h5 className="text-center my-4">𝗬𝗼𝘂𝗿 𝘁𝗼𝗽 𝗰𝗼𝗻𝘁𝗲𝗻𝘁 𝗶𝗻 𝘁𝗵𝗶𝘀 𝗽𝗲𝗿𝗶𝗼𝗱</h5>
    {/* Header */}
    <div className="row border-bottom pb-2 mb-3 mt-3">
      <div className="col-8"style={{fontSize:"11px" }}>Content</div>
      <div className="col-2 text-end  "style={{fontSize:"11px", paddingRight:"0px" }}>Average view duration</div>
      <div className="col-2 text-end "style={{fontSize:"11px" }}>Views</div>
    </div>
    {/* Data Rows */}
    {data.map((item, index) => (
      <div
        key={item.id}
        className="row align-items-center border-bottom py-2"
      >
        <div className="col-9 d-flex align-items-center">
          <span className=" me-2"style={{fontSize:"11px",fontWeight : "600" }} >{index + 1}</span>     
          <div className="me-3" style={{ width: "100px" }}>
            {item.thumbnail}
          </div>
          <div  className='w-100'>
            <div className="w-100" style={{fontSize:"11px",fontWeight:"500" }}>{item.title}</div>
            <div className="text-muted small" style={{fontSize:"11px"}}>{item.date}</div>
          </div>
        </div>
        <div className="col-2 text-start" style={{
    
    fontSize: '11px',
  }} >{item.duration}</div>
        <div className="col-1 text-end"style={{
    
    fontSize: '11px',
  }}>{item.views}</div>
      </div>
    ))}
  </div>
  );
};

export default ContentList;
