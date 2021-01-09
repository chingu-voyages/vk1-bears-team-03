import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Images = ({ item }) => {
    const { assets, getAssets } = useContext(GlobalContext)
    useEffect(() => {
      getAssets()
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
//   const pathToImg = ''
  //images.js:15 This is filePath for each item /uploads/dp-logo-outine.png


  const asset = assets.find((asset) => asset._id === item._id)
  return (
    <td>
         <img src={require(`./${asset.asset_file.file_name}`)} alt="Asset" style= { {height : '70px', widht: '70px'} }/>

    </td>
  )
}

export default Images
