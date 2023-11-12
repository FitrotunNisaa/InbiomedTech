import video from '../../assets/Video/Video Coming Soon.mp4';
import React from 'react';
import poster from '../../assets/Video/poster.jpg';
import './Video.css';

export default function Video() {
	return (
		<div className='video'>
        	<video  
				src={video} 
				poster={poster}
				height="360" 
				controls="controls" />
		</div>
	)
}