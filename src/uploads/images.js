import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'


const Images = ({ item }) => {
    // console.log("This is item", item)
    // console.log("This is Index", index)
    // console.log("This is Item", item)
    const { assets, getAssets } = useContext(GlobalContext)
    useEffect(() => {
      getAssets()
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
//   const pathToImg = ''
  //images.js:15 This is filePath for each item /uploads/dp-logo-outine.png
    const imgPath = assets.find((asset) => {
           if(item._id === asset._id){
            return JSON.stringify(asset.asset_file.file_name)
           }
    })

    
  return (
    <td>
        { console.log(`"./${imgPath.asset_file.file_name}" path outside IMG`) }
         <img src={require(`./${imgPath.asset_file.file_name}`)} alt="photo" style= { {height : '70px', widht: '70px'} }/>

    </td>
  )
}

export default Images
