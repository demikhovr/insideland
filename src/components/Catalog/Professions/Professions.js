import React from 'react';
import classes from './Professions.module.css';
import Profession from '../Profession/Profession';

const state = {
  img: 'https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w',
  name: 'Beverly Little',
  title: 'JAVASCRIPT DEVELOPER',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!',
  test: {
    available: 25,
    passed: 5,
    all: 30,
  },
  social: {
    dribble: '12.8k',
    behance: '12.8k',
    twitter: '12.8k',
  },
};

const Professions = () => (
  <div className={classes.Professions}>
    {(new Array(10)).fill(null).map((profession, index) => {
      const key = index;

      return (
        <Profession
          key={key}
          dribble={state.social.dribble}
          behance={state.social.behance}
          img={state.img}
          name={`${index + 1}. ${state.name}`}
          title={state.title}
          description={state.description}
          twitter={state.social.twitter}
        />
      );
    })}
  </div>
);

export default Professions;
