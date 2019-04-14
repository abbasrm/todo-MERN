import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import accordion from './accordion'

configure({ adapter: new Adapter() });

const initState = {
    date: 'some-val',
    open: false
  }

describe('Accordion reducer', () => {
    it('shoud return initial state if acction type not matched', () => {
        expect(accordion(initState, {type: 'asd'})).toEqual({
            date: 'some-val',
            open: false
          })
    });

    it('shoud open accordion', () => {
        expect(accordion(initState, {type: 'OPEN_ACCORDION', date: 'some-val2'})).toEqual({
            date: 'some-val2',
            open: true
          })
    });
})