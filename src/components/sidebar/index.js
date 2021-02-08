import React from 'react'
import NewFile from './NewFile'
import Sidebaritem from './SidebarItem'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import StorageIcon from '@material-ui/icons/Storage';
import '../../styles/Sidebar.css'
const index = () => {
  return (
    <div className='sideBar'>
      <NewFile/>
       
      <div className='sidebar__itemsContainer'>
        <Sidebaritem arrow icon ={(<InsertDriveFileIcon/>)} label ={'My Drive'}/>
        <Sidebaritem arrow icon ={<ImportantDevicesIcon/>} label ={'Computer'}/>
        <Sidebaritem icon ={(<PeopleAltIcon/>)} label ={'Shared with me'}/>
        <Sidebaritem icon ={(<QueryBuilderIcon/>)} label = {'recent'}/>
        <Sidebaritem icon ={(<StarBorderIcon/>)} label = {'Starred'}/>
        <Sidebaritem icon ={(<DeleteOutlineIcon/>)} label = {'Bin'}/>
        
        <hr/>
        <Sidebaritem icon  ={(<StorageIcon/>)} label={'label'}/>
      </div>
    
    </div>
  )
}

export default index
