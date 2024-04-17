import React from 'react'
import './main.css'

//import images
import img1 from '../../Assests/image (1).jpg'
import img2 from '../../Assests/image (2).jpg'
import img3 from '../../Assests/image (3).jpg'
import img4 from '../../Assests/image (4).jpg'
import img5 from '../../Assests/image (5).jpg'
import img6 from '../../Assests/image (6).jpg'
import img7 from '../../Assests/image (7).jpg'
import img8 from '../../Assests/image (8).jpg'
import img9 from '../../Assests/image (9).jpg'

//import icons
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'

const Data = [
  {
    id:1,
    imgSrc: img1,
    destTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  },
  
  {
    id:3,
    imgSrc: img3,
    destTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  },
  
  {
    id:4,
    imgSrc: img4,
    destTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  },
  
  {
    id:6,
    imgSrc: img6,
    destTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  },
  
  {
    id:7,
    imgSrc: img7,
    destTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  },
  

  {
    id:8,
    imgSrc: img8,
    destTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  },
  
  {
    id:9,
    imgSrc: img9,
    destTitle: 'Bora Bora',
    location: 'New Zeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  }
  
]

const Main = () => {
  return (
    <secion className="main container section">

      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(
            ({id, imgSrc, destTitle, location, grade, fees, description})=>
            {
              return(
                <div key={id} className="singleDestination">
                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className='icon'/>
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                        <div className="grade">
                          <span>{grade}<small>+1</small></span>
                        </div>
                        <div className="price">
                          <h5>{fees}</h5>
                        </div>
                      </div>

                      <div className="desc">
                        <p>{description}</p>
                      </div>

                      <button className='btn flex'>
                        DETAILS <HiOutlineClipboardCheck className='icon'/>
                      </button> 
                  </div>
                </div>
              )
            }
          )
        }
      </div>
    </secion>
  )
}

export default Main