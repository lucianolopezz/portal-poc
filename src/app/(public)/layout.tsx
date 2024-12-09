
import { Render } from '@measured/puck'
import '../globals.css'
import { config } from '@/config'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const data = {
    "root":{
       "props":{
          
       }
    },
    "content":[
       {
          "type":"Header",
          "props":{
             "title":"Titulo da noticia aqui",
             "id":"Header-64d9848e-333b-44f0-aa05-dac3aa63c2f0"
          }
       },
       {
          "type":"Columns",
          "props":{
             "distribution":"auto",
             "columns":[
                {
                   "id":"12ee2f10-518b-4a11-80e8-da35fc8d3a18"
                },
                {
                   "id":"09c05cb8-aa5b-468c-bfee-4dbff087a765"
                }
             ],
             "id":"Columns-db099ad8-55da-4ee6-a390-c7efc4134cc8"
          }
       },
       {
          "type":"Footer",
          "props":{
             "id":"Footer-f5855df4-9771-4e63-be0a-eca4bc3716c5"
          }
       }
    ],
    "zones":{

    }
 }

  return (
    <html lang="en">
      <body>
        <Render data={data} config={config} />
        {children}
        <Render data={data} config={config} />
      </body>
    </html>
  )
}
