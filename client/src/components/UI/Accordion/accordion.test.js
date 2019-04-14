import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Accordion from './accordion'

configure({ adapter: new Adapter()});

let d= [{
        title: 'some-title',
        content: 'some-content',
        open: true
    },
    {
        title: 'some-title2',
        content: 'some-content2',
        open: false
    }];

describe('Accordion', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Accordion data={[]}  />);
        wrapper.setState({ accordionItems: d});
    });
    
    it('Have the opened accordion tab with class name content-open..', () => {
        expect(wrapper.find('div.content.content-open')).toHaveLength(1);
    });

    it('Have rotated arrow when opened', () => {
        expect(wrapper.find('.fa.fa-angle-down.fa-rotate-180')).toHaveLength(1)
    });

    
    it('Have rotated arrow when opened', () => {
        wrapper.find('div.content').forEach(node => {
            expect(node.hasClass('content')).toEqual(true)
        });
    })
    it('Opened accordion tab should have "content-open" class', () => {
        wrapper.state().accordionItems.forEach((node) => {
            if(node.open == true){
              expect(wrapper.find('div.content.content-open')).toHaveLength(1)
            }
          });
    })
})