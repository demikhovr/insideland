import React from 'react';
import classes from './Professions.module.css';
import Profession from '../Profession/Profession';

const Professions = () => (
  <div className={classes.Professions}>
    {(new Array(100)).fill(null).map((profession, index) => {
      const key = index;

      return (
        <Profession
          key={key}
          dribble="12.8k"
          behance="12.8k"
          img="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w"
          name={`${index + 1}. Beverly Little`}
          title="JAVASCRIPT DEVELOPER"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!"
          twitter="12.8k"
        />
      );
    })}
  </div>
);

export default Professions;
