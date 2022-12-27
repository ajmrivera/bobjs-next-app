import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import FormDivider from '../components/formdivider'
import BigButton from '../components/bigbutton';
import Input from '../components/input';
import FormModal from '../components/formmodal';
import { InferGetStaticPropsType, GetStaticProps } from 'next';
import { HouseType, ObjectType, RoomObjectType } from '../types/types';
import RoomCard from '../components/roomcard';
import uuid from 'react-uuid'
import Head from 'next/head'
import { useRouter } from 'next/router';
import Header from '../components/header';

function Form({ applianceList, plantsList }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
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
      kitchen_appliances: [],
    }
  ]);
  const [roofType, setRoofType] = useState<string|null>("Tiled");
  const [roofStyle, setRoofStyle] = useState<string|null>("Dutch");
  const [gardenPlants, setGardenPlants] = useState<ObjectType[]>([]);
  const [modalOn, setModalOn] = useState<boolean>(false);
  const [houseData, setHouseData] = useState<HouseType|null>(null);

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
    {"key": "Straw", "value": "Straw"},
    {"key": "Thatched", "value": "Thatched"},
    {"key": "Tiled", "value": "Tiled"},
    {"key": "Flat", "value": "Flat"},
  ]

  const foundationTypes = [
    {"key": "Brick", "value": "Brick"},
    {"key": "Slab", "value": "Slab"},
    {"key": "Reinforced Concrete", "value": "Reinforced Concrete"},
  ]

  const roofStyles = [
    {"key": "Gable", "value": "Gable"},
    {"key": "Hip", "value": "Hip"},
    {"key": "Dutch", "value": "Dutch"},
    {"key": "Jerkinhead", "value": "Jerkinhead"},
    {"key": "Pyramid", "value": "Pyramid"},
    {"key": "Mansard", "value": "Mansard"},
    {"key": "Bonnet", "value": "Bonnet"},
    {"key": "Gambrel", "value": "Gambrel"},
    {"key": "Skillion", "value": "Skillion"},
    {"key": "Curved", "value": "Curved"},
    {"key": "Flat", "value": "Flat"},
    {"key": "Satlbox", "value": "Satlbox"},
    {"key": "Butterfly", "value": "Butterfly"},
    {"key": "Sawtooth", "value": "Sawtooth"},
    {"key": "Dormer", "value": "Dormer"},
  ]

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

    const newHouse:HouseType = {
      foundation_type: foundationType,
      floor_size: floorSize,
      num_of_floors: numOfFloors,
      rooms: roomsData,
      roof_type: roofType,
      roof_style: roofStyle,
      garden_plants: gardenPlants,
    }

    localStorage.setItem("houseData", JSON.stringify(newHouse))

    setHouseData(newHouse)
    router.push('/house');

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
      <p className='text-2xl lg:text-4xl font-bold bg-bob-bg pt-4 flex justify-center'>House Builder</p>
      <div className='flex flex-col justify-center bg-bob-bg'>
        {/* ################################# BASE ################################### */}
        <div className="mt-5  flex justify-center items-center ">
          <FormDivider title="Base" />
        </div>
        <div className="flex flex-col items-center px-16 mt-8 sm:px-24 md:px-64">
          <p className="font-bold text-lg self-start">Foundation Type</p>
          <div className="hidden lg:flex mt-4">
            <BigButton title="Brick" currentValue={foundationType} value="Brick" onClick={() => { handleFoundationTypeChange("Brick") }} />
            <BigButton title="Slab" currentValue={foundationType} value="Slab" onClick={() => { handleFoundationTypeChange("Slab") }} />
            <BigButton title="Reinforced Concrete" currentValue={foundationType} value="Reinforced Concrete" onClick={() => { handleFoundationTypeChange("Reinforced Concrete") }} />
          </div>
          <div className="lg:hidden mt-4 justify-center">
            <select className="border-2 border-gray-400 focus:outline-none focus:border-bob-main h-12 w-56 rounded-md" value={foundationType || ""} onChange={ (e) => { handleFoundationTypeChange(e.target.value)}}>
              {
                foundationTypes.map((foundation, index) => {
                  return(
                    <option key={index} onClick={() => { handleFoundationTypeChange(foundation.key)}}>{foundation.value}</option>
                  )
                })
              } 
            </select>
          </div>
        </div>

        <div className="px-16 flex flex-col md:flex-row mt-2 lg:mt-5 sm:px-24 md:px-64  ">
          <div className="flex flex-col items-center md:flex-row md:w-7/12">
            <p className="font-bold text-lg lg:w-44">Floor Size</p>
            <Input input_type="number" add_on="right" add_on_data={{ right: "m2"}} value={floorSize} onChange={(e) => { handleFloorSizeChange(parseInt(e.target.value)) }} />
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <p className="mt-2 lg:mt-0 font-bold text-lg lg:w-44">No. of Floors</p>
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
        <div className="flex flex-col lg:flex-row mt-5 sm:px-24 md:px-64">
          <div className="flex flex-col lg:flex-row items-center md:w-7/12">
            <p className="font-bold text-lg lg:w-44 ">Roof Type</p>
            <select className="border-2 border-gray-400 focus:outline-none focus:border-bob-main h-12 w-56 rounded-md" value={roofType || ""} onChange={ (e) => { handleRoofTypeChange(e.target.value)}}>
              {
                roofTypes.map((roof, index) => {
                  return(
                    <option key={index} onClick={() => { setRoofType(roof.key)}}>{roof.value}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            <p className="font-bold text-lg lg:w-44">Roof Style</p>
            <select className="border-2 border-gray-400 focus:outline-none focus:border-bob-main h-12 w-56 rounded-md" value={roofStyle || ""} onChange={ (e) => { handleRoofStyleChange(e.target.value)}}>
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
        {/* ########################################### GARDEN  ######################################  */}
        <div className="mt-10  flex justify-center items-center">
          <FormDivider title="Garden" />
        </div>
        <div className="flex flex-col lg:flex-row mt-5 sm:px-24 md:px-64 items-center">
          <p className="font-bold text-lg lg:w-44">Plants</p>
          <Select
            isMulti
            options={plantsList}
            menuPlacement="top"
            value={[...gardenPlants]}
            className="w-7/12 lg:w-9/12 border-2 border-gray-400 focus:border-bob-main active:border-bob-main active:outline-none focus:outline-none rounded-lg"
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