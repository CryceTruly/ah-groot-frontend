import React from 'react';
import SignupForm from '../../src/components/signup/SignupForm';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import store from '../../src/Store';
import {shallow} from 'enzyme';


describe('SignupForm Component', () => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);

   const div = document.createElement('div');
});


describe('SignupForm Component', () => {
  const props = {
    redirectToLogIn: jest.fn()
  }
  it('it matches the snapshot', () => {
    const tree = renderer.create(<Provider store={store}><SignupForm /></Provider>).toJSON();
    expect(tree).toMatchSnapshot("register");
  });

  it('clicks link', ()=> {
    const wrapper = shallow(<SignupForm {...props}/>);
    wrapper.find('#redirectLink').simulate('click');
  });
});
