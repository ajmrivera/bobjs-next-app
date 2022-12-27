import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import Header from '../components/header'
import FormDivider from '../components/formdivider'
import BigButton from '../components/bigbutton';
import Input from '../components/input';
import FormModal from '../components/formmodal';
import { InferGetStaticPropsType, GetStaticProps } from 'next';
import { RoomObjectType } from '../types/types';
import RoomCard from '../components/roomcard';
import uuid from 'react-uuid'
import Head from 'next/head'

const initialRoom = {
  id: uuid(),
  room_size: 10,
  room_type: "lounge",
  floor_type: "wood",
  num_of_windows: 2,
  window_style: "flat",
  glass_type: "tempered",
  special_request: "",
}

function Form({ applianceList, plantsList }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [foundationType, setFoundationType] = useState<string|null>(null);
  const [floorSize, setFloorSize] = useState<number>(1);
  const [numOfFloors, setNumOfFloors] = useState<number>(1);
  const [roomsData, setRoomsData] = useState<RoomObjectType[]>([
    {
      id: uuid(),
      room_size: 10,
      room_type: "Lounge",
      floor_type: "Wood",
      num_of_windows: 2,
      window_style: "Flat",
      glass_type: "Tempered",
      special_request: "",
    }
  ]);
  const [roofType, setRoofType] = useState<string|null>(null);
  const [roofStyle, setRoofStyle] = useState<string|null>(null);
  const [gardenPlants, setGardenPlants] = useState<string[]>([]);
  const [modalOn, setModalOn] = useState<boolean>(false);

  useEffect(() => {
    const foundTypeLocal = localStorage.getItem("foundationType")
    const floorSizeLocal = localStorage.getItem("floorSize")
    const numOfFloorsLocal = localStorage.getItem("numOfFloors")
    const roomsDataLocal = localStorage.getItem("roomsData")
    const roofTypeLocal = localStorage.getItem("roofType")
    const roofStyleLocal = localStorage.getItem("roofStyle")
    const gardenPlantsLocal = localStorage.getItem("gardenPlants")

    if(foundTypeLocal !== null) setFoundationType(foundTypeLocal)
    if(floorSizeLocal !== null) setFloorSize(parseInt(floorSizeLocal))
    if(numOfFloorsLocal !== null) setNumOfFloors(parseInt(numOfFloorsLocal))
    if(roomsDataLocal !== null) setRoomsData(JSON.parse(roomsDataLocal))
    if(roofTypeLocal !== null) setRoofType(roofTypeLocal)
    if(roofStyleLocal !== null) setRoofStyle(roofStyleLocal)
    if(gardenPlantsLocal !== null) setGardenPlants(JSON.parse(gardenPlantsLocal))
  }, []);

  const roofTypes = [
    {"key": "straw", "value": "Straw"},
    {"key": "thatched", "value": "Thatched"},
    {"key": "tiled", "value": "Tiled"},
    {"key": "flat", "value": "Flat"},
  ]

  const roofStyles = [
    {"key": "gable", "value": "Gable"},
    {"key": "hip", "value": "Hip"},
    {"key": "dutch", "value": "Dutch"},
    {"key": "jerkinhead", "value": "Jerkinhead"},
    {"key": "pyramid", "value": "Pyramid"},
    {"key": "mansard", "value": "Mansard"},
    {"key": "bonnet", "value": "Bonnet"},
    {"key": "gambrel", "value": "Gambrel"},
    {"key": "skillion", "value": "Skillion"},
    {"key": "curved", "value": "Curved"},
    {"key": "flat", "value": "Flat"},
    {"key": "satlbox", "value": "Satlbox"},
    {"key": "butterfly", "value": "Butterfly"},
    {"key": "sawtooth", "value": "Sawtooth"},
    {"key": "dormer", "value": "Dormer"},
  ]
  console.log(gardenPlants)
  const createRoom = (newRoom:RoomObjectType) => {
    const newArray = roomsData
    newArray.push(newRoom)

    handleRoomsChange(newArray)
  }

  const deleteRoom = (roomId:string) => {
    const found = roomsData.filter((room) => { return room.id !== roomId})

    handleRoomsChange(found)
  }

  const submitHouse = (e:any) => {
    e.preventDefault();

    const newHouse = {
      foundation_type: foundationType,
      floor_size: floorSize,
      num_of_floors: numOfFloors,
      rooms: roomsData,
      roof_type: roofType,
      roof_style: roofStyle,
      garden_plants: gardenPlants,
    }

    console.log(newHouse);
  }

  const handleFoundationTypeChange = (value:string) => {
    setFoundationType(value);
    localStorage.setItem("foundationType", value);
  }

  const handleFloorSizeChange = (value:number) => {
    setFloorSize(value);
    localStorage.setItem("floorSize", value.toString());
  }

  const handleNumOfFloorsChange = (value:number) => {
    setNumOfFloors(value);
    localStorage.setItem("numOfFloors", value.toString());
  }

  const handleRoomsChange = (value:any) => {
    setRoomsData(value);
    localStorage.setItem("roomsData", JSON.stringify(value));
  }

  const handleRoofTypeChange = (value:string) => {
    setRoofType(value);
    localStorage.setItem("roofType", value);
  }
  const handleRoofStyleChange = (value:string) => {
    setRoofStyle(value);
    localStorage.setItem("roofStyle", value)
  }

  const handleGardenPlantsChange = (value:any) => {
    setGardenPlants(value);
    localStorage.setItem("gardenPlants", JSON.stringify(value))
  }

  return (
    <div>
      <Head>
        <title>BOBjs</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <div className='flex flex-col justify-center bg-bob-bg'>
        {/* ################################# BASE ################################### */}
        <div className="mt-10  flex justify-center items-center ">
          <FormDivider title="Base" />
        </div>
        <div className="mt-8 sm:px-24 md:px-64 ">
          <p className="font-bold text-lg">Foundation Type</p>
          <div className="hidden lg:flex justify-evenly mt-4">
            <BigButton title="Brick" currentValue={foundationType} value="brick" onClick={() => { handleFoundationTypeChange("brick") }} />
            <BigButton title="Slab" currentValue={foundationType} value="slab" onClick={() => { handleFoundationTypeChange("slab") }} />
            <BigButton title="Reinforced Concrete" currentValue={foundationType} value="reinforced_concrete" onClick={() => { handleFoundationTypeChange("reinforced_concrete") }} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-5 sm:px-24 md:px-64  ">
          <div className="flex flex-col items-center md:flex-row w-1/2">
            <p className="font-bold text-lg w-44">Floor Size</p>
            <Input input_type="number" add_on="right" add_on_data={{ right: "m2"}} value={floorSize} onChange={(e) => { handleFloorSizeChange(parseInt(e.target.value)) }} />
          </div>
          <div className="flex items-center">
            <p className="font-bold text-lg w-44">No. of Floors</p>
            <Input input_type="number" value={numOfFloors} onChange={(e) => { handleNumOfFloorsChange(parseInt(e.target.value)) }} />
          </div>
        </div>

        {/* ############################ FLOOR ####################################### */}
        <div className="mt-10  flex justify-center items-center">
          <FormDivider title="Floor" />
        </div>

        <div className="flex flex-wrap items-center justify-center mt-3 px-6">
          {(roomsData.length) >= 1 &&
            roomsData?.map((room) => {
              return(
                <RoomCard room={room} key={room.id} id={room.id} deleteRoom={deleteRoom} />
              )
            })
          }
        </div>


        <div className="flex items-center justify-center mt-3 ">
          <button className="border-2 border-bob-accent w-36 h-12 rounded-full drop-shadow-lg hover:bg-black hover:bg-opacity-5" onClick={ () => { setModalOn(true) }}>
            <div className="flex items-center justify-center">
              <p className="font-bold text-lg text-bob-accent">Add Room</p>
            </div>
          </button>
        </div>

        { modalOn &&
          <FormModal setModalOn={setModalOn} applianceList={applianceList} createRoom={createRoom} />
        }

        {/* ######################################## ROOF #################################### */}
        <div className="mt-10  flex justify-center items-center">
          <FormDivider title="Roof" />
        </div>
        <div>
          <div className="flex mt-5 sm:px-24 md:px-64">
            <div className="flex items-center w-1/2">
              <div className="flex items-center">
                <p className="font-bold text-lg w-44">Roof Type</p>
                <select className="border-2 border-gray-400 focus:outline-none focus:border-bob-main h-12 w-56 rounded-md" onChange={ (e) => { handleRoofTypeChange(e.target.value)}}>
                  {
                    roofTypes.map((roof, index) => {
                      return(
                        <option key={index} onClick={() => { setRoofType(roof.key)}}>{roof.value}</option>
                      )
                    })
                  }
                </select>
              </div>
            </div>
            <div className="flex items-center">
              <p className="font-bold text-lg w-44">Roof Style</p>
              <select className="border-2 border-gray-400 focus:outline-none focus:border-bob-main h-12 w-56 rounded-md" onChange={ (e) => { handleRoofStyleChange(e.target.value)}}>
                {
                  roofStyles.map((roof, index) => {
                    return(
                      <option key={index} onClick={() => { setRoofStyle(roof.key)}}>{roof.value}</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
        </div>
        {/* ########################################### GARDEN  ######################################  */}
        <div className="mt-10  flex justify-center items-center">
          <FormDivider title="Garden" />
        </div>
        <div className="flex mt-5 sm:px-24 md:px-64 items-center">
          <p className="font-bold text-lg w-44">Plants</p>
          <Select
            isMulti
            options={plantsList}
            menuPlacement="top"
            value={[...gardenPlants]}
            className="w-11/12 border-2 border-gray-400 focus:border-bob-main active:border-bob-main active:outline-none focus:outline-none rounded-lg"
            onChange={ (choice) => { handleGardenPlantsChange(choice) }}
          />
        </div>

        {/* ############################################## SUBMIT BUTTON ################################### */}
        <div className="my-10  flex justify-center items-center">
          <button className="rounded-md bg-bob-main w-48 h-12" onClick={ (e) => { submitHouse(e) }}><p className="font-bold text-lg text-bob-bg">SUBMIT</p></button>
        </div>
      </div>
    </div>
  )
}

export default Form

export async function getStaticProps() {
  const applianceList = [
    { "value": "Refrigerator", "label": "Refrigerator" },
    { "value": "Microwave Oven", "label": "Microwave Oven" },
    { "value": "Oven", "label": "Oven" },
    { "value": "Stove", "label": "Stove" },
    { "value": "Gas Range", "label": "Gas Range" },
    { "value": "Water Heater", "label": "Water Heater" },
    { "value": "Hood Exhaust", "label": "Hood Exhaust" },
    { "value": "Air Fryer", "label": "Air Fryer" },
  ]

  const plantsList = [
    { "value": "Orchid", "label": "Orchid" },
    { "value": "Roses", "label": "Roses" },
    { "value": "Daisies", "label": "Daisies" },
    { "value": "Grass", "label": "Grass" },
    { "value": "Tomatos", "label": "Tomatos" },
  ]

  return {
    props: {
      applianceList,
      plantsList
    }
  }
}