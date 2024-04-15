import React from 'react';
import styled from 'styled-components';
import {IoLibrary} from 'react-icons/io5';
import {MdHomeFilled, MdSearch} from 'react-icons/md';
export default function Sidebar() {
  return  (<Container>Sidebar
    <div className="top__links">
        <div className="logo">
            <img 
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            alt="remu"
            />
        </div>
    </div>
    <div>   
        <ul>
            <li>
                <MdHomeFilled/>
                <span>Home</span>
            </li>
            <li>
                <MdSearch/>
                <span>Search</span>    
            </li>
            <li>
                <IoLibrary/>
                <span>Your Library</span>
            </li>
        </ul>
    </div>
</Container>);
}

const Container = styled.div`
    background-color: black;

`;

