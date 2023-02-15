import React,{useState, useEffect} from 'react';
import {Box , Typography} from '@mui/material';
import { Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  
  const [videos,setVideos]= useState(null);
  const [searchTerm]= useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setVideos(data.items))
  }, [searchTerm]);




  return (
    <Box p={2} minHeight='95vh'>
    <Typography variant="h4" fontWeight={900} mb={3} color='white' ml={{sm:'100px'}}>
    Search Results For<span 
    style={{
      color:'#F31503'
    }}>
        {searchTerm}  
    </span> videos
    </Typography>
    <Box display='flex'>
    <Box sx={{mr:{sm:'100'}}}/>
    <Videos videos={videos}/>
    </Box>
    </Box>
  );
};

export default SearchFeed;