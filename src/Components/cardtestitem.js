import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='card_object'>
        <Link className='card_object_link' to={props.path}>
          <figure className='card_object_pic' data-category={props.label}>
            <img
              className='card_object_img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='card_object_info'>
            <h5 className='card_object_text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;