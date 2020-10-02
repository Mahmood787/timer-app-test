import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Timer from '../Timer/Timer'

describe('App', ()=>{
  let container
  beforeEach(()=>( container = shallow(<App/>)))
 
  it('should contain 1 div',()=>{
    expect(container.find("div").length).toEqual(1)
  })
  it('should render Timer component',()=>{
    expect(container.containsMatchingElement(<Timer />)).toEqual(true)
  })
})