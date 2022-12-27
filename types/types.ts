export type RoomObjectType = {
  id: string,
  room_size: number,
  room_type: string,
  floor_type: string,
  num_of_windows: number,
  window_style: string,
  glass_type: string,
  special_request: string,
  kitchen_appliances?: any[]|null,
}

export type ApplianceObjectType = {
  "value": string,
  "label": string
}

export type RoomType = "Bedroom" | "Dining Room" | "Lounge" | "Kitchen" | "Bathroom" | "Office" | "Extra"

export type FloorType = "Wood" | "Tiles" | "Carpet"

export type WindowStyleType = "Bay" | "Flat" | "Full Height"

export type GlassType = "Tempered" | "Triple Glazed" | "Double Glazed"
