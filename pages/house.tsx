import React, { useState, useEffect } from 'react'
import HeaderNav from '../components/headernav'
import { HouseType } from '../types/types';

function House() {
  const [houseData, setHouseData] = useState<HouseType|null>(null);
  useEffect(() => {
    const newHouse = localStorage.getItem("houseData");

    if(newHouse !== null) setHouseData(JSON.parse(newHouse))
  }, [])

  if(houseData === null) return null

  return (
    <div>
      <HeaderNav />
      <div className='flex flex-col justify-center'>
        <div className="flex justify-start items-center mt-5 ml-5">
          <p className="text-xl font-bold">Base</p>
        </div>
        <div className="flex ml-5 lg:ml-9">
          <div className='flex w-48'>
            <p className="font-bold text-md mr-2">Floor Size:</p><p className="font-regular text-md">{houseData.floor_size}</p>
          </div>
          <div className='flex w-56'>
            <p className="font-bold text-md mr-2">No. of Floors:</p><p className="font-regular text-md">{houseData.num_of_floors}</p>
          </div>
        </div>
        <div className="flex justify-start items-center mt-2 lg:mt-5 ml-5">
          <p className="text-xl font-bold">{(houseData?.rooms.length > 1)? "Rooms" : "Room"}</p>
        </div>
        <div className="flex flex-col justify-center mx-5 py-2 lg:ml-9">
          {
            houseData?.rooms.map( (room) => {
              return(
                <div key={room.id} className="flex flex-col border-2 border-bob-accent rounded-md p-2 lg:p-4 mt-2 lg:w-4/12">
                  <div className="flex flex-col lg:flex-row">
                    <div className='flex w-48'>
                      <p className="font-bold text-md mr-2">Room Size:</p><p className="font-regular text-md">{room.room_size}</p>
                    </div>
                    <div className='flex w-56'>
                      <p className="font-bold text-md mr-2">Room Type:</p><p className="font-regular text-md">{room.room_type}</p>
                    </div>
                    <div className='flex'>
                      <p className="font-bold text-md mr-2">Floor Type:</p><p className="font-regular text-md">{room.floor_type}</p>
                    </div>
                  </div>
                  <div className='flex flex-col lg:flex-row'>
                    <div className='flex w-48'>
                      <p className="font-bold text-md mr-2">No. of Windows:</p><p className="font-regular text-md">{room.num_of_windows}</p>
                    </div>
                    <div className='flex w-56'>
                      <p className="font-bold text-md mr-2">Window Style:</p><p className="font-regular text-md">{room.window_style}</p>
                    </div>
                    <div className='flex'>
                      <p className="font-bold text-md mr-2">Glass Type:</p><p className="font-regular text-md">{room.glass_type}</p>
                    </div>
                  </div>
                  <div className='flex flex-col lg:flex-row'>
                    <div className='flex w-48'>
                      <p className="font-bold text-md mr-2">Special Requests:</p><p className="font-regular text-md">{(room.special_request === "")? "No":"Yes"}</p>
                    </div>
                    {(room.kitchen_appliances?.length > 0 && room.room_type === "Kitchen") &&
                      <div className='flex'>
                        <p className="font-bold text-md mr-2">Kitchen Appliances:</p><p className="font-regular text-md">Yes</p>
                      </div>
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
        
        <div className="flex justify-start items-center mt-2 lg:mt-5 ml-5">
          <p className="text-xl font-bold">Roof</p>
        </div>
        <div className="flex ml-5 lg:ml-9">
          <div className='flex w-48'>
            <p className="font-bold text-md mr-2">Roof Type:</p><p className="font-regular text-md">{houseData.roof_type}</p>
          </div>
          <div className='flex w-56'>
            <p className="font-bold text-md mr-2">Roof Style:</p><p className="font-regular text-md">{houseData.roof_style}</p>
          </div>
        </div>
        
        {houseData?.garden_plants.length > 0 &&
          <div className="mb-5">
            <div className="flex justify-start items-center mt-5 ml-5">
              <p className="text-xl font-bold">Garden</p>
            </div>
            <div className='ml-9'>
              {houseData.garden_plants.map( (plant) => {
                return(
                  <div className='flex w-56'>
                    <p className="font-regular text-md">{plant.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default House