import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { App } from './App';
import Tasks from './components/Tasks/Tasks'

configure({ adapter: new Adapter() })

describe('<App />', () => {
    it('Should have Task comp child', () => {
        const wrapper = shallow(<App onTasksInit={() => true} onOpenAcco={() => true}/>);
        expect(wrapper.find(Tasks)).toHaveLength(1)
    })
})