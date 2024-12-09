'use client'

import { config } from "@/config";
import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
 
// Describe the initial data
const initialData = {};
 
// Save the data to your database
const save = (data) => {
  console.log(JSON.stringify(data));
};

export function Editor() {
  return (
    <Puck
      config={config}
      data={initialData}
      onPublish={save}
    />
  )
}