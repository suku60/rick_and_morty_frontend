import React, {useEffect, useState} from 'react';

import BadgesBoard from '../Components/BadgesBoard/BadgesBoard';

import './BasicView.css';

const BasicView = () => {

  return (
         <div className='full_container box_basic_view'>
           <BadgesBoard/>
         </div>
         )
}
export default BasicView;