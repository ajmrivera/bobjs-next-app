import React from 'react'

interface RoomCardProps {
  room: any
  id: string
  deleteRoom: (roomId:string) => void
}

function RoomCard({ room, id, deleteRoom }:RoomCardProps) {
  return (
    <div className="lg:w-5/12 p-4 lg:p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex items-center m-2">
      <div className="flex flex-col lg:w-11/12">
        <div className='flex flex-col lg:flex-row'>
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
          {(room?.kitchen_appliances?.length > 0 && room.room_type === "Kitchen") &&
            <div className='flex'>
              <p className="font-bold text-md mr-2">Kitchen Appliances:</p><p className="font-regular text-md">Yes</p>
            </div>
          }
        </div>
      </div>
      <button className="border-2 w-16 h-12 rounded-md border-red-600"><p className="text-red-600 font-semibold" onClick={() => { deleteRoom(id)}}>Delete</p></button>
    </div>
  )
}

export default RoomCard