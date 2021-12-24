import React from 'react';
import Example from '.'
import { create, act } from 'react-test-renderer'

let component;

describe('<Example />', () => {
    beforeEach(() => {
        jest.useFakeTimers(); // to use fake timers provided por jest

        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            json: () => Promise.resolve([]),
        }));

        // interface constructor will create localStorage
        window.Storage.prototype.setItem = jest.fn();

        component = create(<Example />);
    });

    it('Should render correctly', () => {
        expect(component).toBeDefined();
        expect(component.root.findByType('h4')).toBeDefined();
    })

    it('Should call api with fetch', async () => {
        expect(window.fetch).not.toHaveBeenCalled();
        await act(() => {
            jest.runAllTimers() // to execute all the timers in the component)
        });
        expect(window.fetch).toHaveBeenCalled();
        expect(window.fetch).toHaveBeenCalledTimes(2);
        expect(component.root.findAllByType('p').length).toEqual(0);

        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            json: () => Promise.resolve([
                { id: 1, name: 'Carlos' },
                { id: 2, name: 'Tyrone' },
            ]),
        }));

        await component.update(<Example />);

        await act(() => {
            jest.runAllTimers() // to execute all the timers in the component)
        });

        expect(component.root.findAllByType('p').length).toEqual(2);
        expect(window.fetch).toHaveBeenCalled();
        expect(window.fetch).toHaveBeenCalledTimes(2);
    })

    it('Should save responsein localStorage', async () => {
        await act(() => {
            jest.runAllTimers() // to execute all the timers in the component)
        });
        expect(localStorage.setItem).toHaveBeenCalled();
        expect(localStorage.setItem).toHaveBeenCalledWith('users', '[]');
    })

    afterAll(() => {
        window.fetch.mockReset();
        window.Storage.prototype.setItem.mockReset()
    })
})