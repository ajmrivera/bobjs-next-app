import React, { useState } from 'react'
import Input from './input';
import TextArea from './textarea';
import Select from 'react-select'
import { RoomObjectType, RoomType, ApplianceObjectType, FloorType, WindowStyleType, GlassType } from '../types/types';
import uuid from 'react-uuid';

interface FormModalProps {
  setModalOn: (value:boolean) => void
  applianceList: { "value": string, "label": string }[]
  createRoom: (newRoom:RoomObjectType) => void
}

function FormModal({ setModalOn, applianceList, createRoom }:FormModalProps) {
  const [roomSize, setRoomSize] = useState<number>(1);
  const [roomType, setRoomType] = useState<string>("Bedroom");
  const [floorType, setFloorType] = useState<string>("Wood");
  const [numOfWindows, setNumOfWindows] = useState<number>(1);
  const [windowStyle, setWindowStyle] = useState<string>("Bay");
  const [glassType, setGlassType] = useState<string>("Tempered");
  const [specialRequest, setSpecialRequest] = useState<string>("");
  const [kitchenAppliances, setKitchenAppliances] = useState<any[]|null>([]);

  const roomTypes = ["Bedroom", "Dining Room", "Lounge", "Kitchen", "Bathroom", "Office", "Extra"]

  const windowStyles = ["Bay", "Flat", "Full Height"]

  const glassTypes = ["Tempered", "Triple Glazed", "Double Glazed"]

  const floorTypes = ["Wood", "Tiles", "Carpet"]

  const roomSizeChange = (value:number) => {
    setRoomSize(value)
  }

  const numOfWindowsChange = (value:number) => {
    setNumOfWindows(value)
  }

  const createNewRoom = () => {
    const newRoom:RoomObjectType = {
      id: uuid(),
      room_size: roomSize,
      room_type: roomType,
      floor_type: floorType,
      num_of_windows: numOfWindows,
      window_style: windowStyle,
      glass_type: glassType,
      special_request: specialRequest,
      kitchen_appliances: kitchenAppliances,
    }

    createRoom(newRoom);
    setModalOn(false);
  }

  return (
    <div className='h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm fixed inset-0 z-50 flex justify-center items-center' >
      <div className="bg-bob-bg opacity-100 w-6/12 pl-10 py-5">
        <div className='flex justify-center items-center'>
          <p className='text-xl font-bold'>Create Room</p>
        </div>
        <div className="flex mt-5">
          <div className="flex items-center w-1/2">
            <p className="font-semibold text-xl w-48">Room Size</p>
            <Input input_type="number" add_on="right" add_on_data={{ right: "m2"}} onChange={(e) => { roomSizeChange(parseInt(e.target.value)) }} value={roomSize} />
          </div>
          <div className="flex items-center">
            <p className="font-semibold text-xl w-48">Room Type</p>
            <select className="border-2 border-gray-400 focus:border-bob-main h-12 w-48 rounded-md focus:outline-none" onChange={(e) => { setRoomType(e.target.value) } }>
              {
                roomTypes.map((room, index) => {
                  return(
                    <option key={index} onClick={() => { setRoomType(room)}}>{room}</option>
                  )
                })
              }
            </select>
          </div>
        </div>
        
        <div className="flex mt-5">
          <div className="flex items-center w-1/2">
            <p className="font-semibold text-xl w-48">Floor Type</p>
            <select className="border-2 border-gray-400 focus:outline-none focus:border-bob-main h-12 w-56 rounded-md">
              {
                floorTypes.map((floor, index) => {
                  return(
                    <option key={index} onClick={() => { setFloorType(floor) }}>{floor}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="flex items-center">
            <p className="font-semibold text-xl w-48">No. of Windows</p>
            <Input input_type="number" value={numOfWindows} onChange={(e) => { numOfWindowsChange(parseInt(e.target.value)) }} />
          </div>
        </div>

        <div className="flex mt-5">
          <div className="flex items-center w-1/2">
            <p className="font-semibold text-xl w-48">Window Style</p>
            <select className="border-2 border-gray-400 focus:outline-none focus:border-bob-main h-12 w-56 rounded-md" onChange={(e) => { setWindowStyle(e.target.value) } }>
              {
                windowStyles.map((window, index) => {
                  return(
                    <option key={index} onClick={() => { setFloorType(window) }}>{window}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="flex items-center">
            <p className="font-semibold text-xl w-48">Glass Type</p>
            <select className="border-2 border-gray-400 focus:border-bob-main h-12 w-48 rounded-md" onChange={(e) => { setGlassType(e.target.value) } }>
              {
                glassTypes.map((glass, index) => {
                  return(
                    <option key={index} onClick={() => { setFloorType(glass) }}>{glass}</option>
                  )
                })
              }
            </select>
          </div>
        </div>
        {
          (roomType === "Kitchen") &&
              <div className="flex flex-col mt-5">
                <p className="font-semibold text-xl w-48">Kitchen Appliances</p>
                <Select
                  isMulti
                  options={applianceList}
                  className="w-11/12 border-2 border-gray-400 focus:border-bob-main active:border-bob-main active:outline-none focus:outline-none rounded-lg mt-2"
                  onChange={ (choice) => { setKitchenAppliances(choice) }}
                />
              </div>
        }
        <div className="flex flex-col mt-5 w-full">
            <p className="font-semibold text-xl w-48">Special Requests</p>
            <TextArea onChange={(e) => { setSpecialRequest(e.target.value) }} />
        </div>

        <div className="flex items-center justify-center mt-5">
          <button className="border-2 border-bob-accent w-36 h-10 rounded-full drop-shadow-lg hover:bg-black hover:bg-opacity-5 mr-5" onClick={() => { setModalOn(false)}}>
            <div className="flex items-center justify-center">
              <p className="font-bold text-xl">Discard</p>
            </div>
          </button>
          <button className="border-2 border-bob-accent w-36 h-10 rounded-full drop-shadow-lg hover:bg-black hover:bg-opacity-5" onClick={() => { createNewRoom() }}>
            <div className="flex items-center justify-center">
              <p className="font-bold text-xl">Create</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FormModal