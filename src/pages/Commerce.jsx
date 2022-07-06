import React from 'react';
import Header from '../components/Header';
import ProfileHeader from '../components/ProfileHeader';
import Map from '../components/Map';
import PublicationSection from '../components/PublicationSection';
import CommentSection from '../components/CommentSection';
import Gallery from './../components/Gallery'

export default function Commerce(){
    return(
         <main>
            <Header/>
            <ProfileHeader/>
            <Map/>
            <PublicationSection/>
            <Gallery/>
            <CommentSection/>
        </main>
    );
}

