export type RoomObjectType = {
  id: string,
  room_size: number,
  room_type: string,
  floor_type: string,
  num_of_windows: number,
  window_style: string,
  glass_type: string,
  special_request: string,
  kitchen_appliances: ObjectType[],
}

export type ObjectType = {
  "value": string,
  "label": string
}

export type HouseType = {
  foundation_type: string|null,
  floor_size: number,
  num_of_floors: number,
  rooms: RoomObjectType[],
  roof_type: string|null,
  roof_style: string|null,
  garden_plants: ObjectType[],
}

export type RoomType = "Bedroom" | "Dining Room" | "Lounge" | "Kitchen" | "Bathroom" | "Office" | "Extra"

export type FloorType = "Wood" | "Tiles" | "Carpet"

export type WindowStyleType = "Bay" | "Flat" | "Full Height"

export type GlassType = "Tempered" | "Triple Glazed" | "Double Glazed"
