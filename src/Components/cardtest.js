import React from 'react';
import './cardtest.css';
import CardItem from './cardtestitem';






function Cardtest() {
  return (
    <div className='cards'>
      <h1> Reasons why you need to learn the stock market </h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_objects'>
            <CardItem
              src='https://smallbusinessify.com/wp-content/uploads/2019/09/Multiple-income-source.jpg'
              text='Diversify your wealth with multiple streams of income'
              label='Diverse'
              path='/Stock'
            />
            <CardItem
              src='https://lodgingmagazine.com/wp-content/uploads/2018/11/money-profit-increase-growth-iStock-896259360.jpg'
              text='With a positive return on your investments, profit will almost be guaranteed '
              label='Luxury'
              path='/Stock'
            />
          </ul>
          <ul className='cards_objects'>
            <CardItem
              src='https://cdn.mises.org/styles/slideshow/s3/deflate_0.JPG?itok=LTr0YgLq'
              text='Protect your money against inflation'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='https://i1.wp.com/thecontextofthings.com/wp-content/uploads/2017/02/easy-work.png?fit=785%2C391'
              text='Learning the stock market is not difficult'
              label='Knowledge'
              path='/products'
            />
            <CardItem
              src='https://www.glcdenison.org/wp-content/uploads/2018/02/slow.png'
              text='There is no rush in investing'
              label='No need to panic'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cardtest;