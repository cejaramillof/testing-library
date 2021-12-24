import React from 'react';
import Container from '../../components/Container'
import Gallery from '../../components/Gallery'
import PhotoContextProvider from '../../context/PhotoContext'
import { create, act } from 'react-test-renderer'
import axios from 'axios';

// Mock this library locally
// jest.mock('axios');

let component;

describe('<Container />', () => {
    beforeEach(() => {
        act(() => {
            component =  create(
                <PhotoContextProvider>
                    <Container searchTerm="" />
                </PhotoContextProvider>
            );
        })
    });

    it('Should render correctly', () => {
        expect(component.root).toBeDefined();
        expect(component.root.findByType(Container)).toBeDefined();
        expect(component.root.findByType(Gallery)).toBeDefined();
        expect(component.root.findAllByType(Gallery).length).toEqual(1);
    })

    it('Should call onSubmit without problems', async () => {
        const customData = {
            data: {
                photos: {
                    photo: {
                        farm: 'farmTest01',
                        server: 'serverTest',
                        id: 'testId01',
                        secret: 'asdadgsfad',
                        title: 'titleTest01'
                    }
                }
            }
        };
        axios.get.mockImplementation(() => Promise.resolve(customData));
        await act(() => {
            component.update(
                <PhotoContextProvider>
                    <Container searchTerm="text" />
                </PhotoContextProvider>
            );
        })

        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledTimes(3);
        expect(axios.post).not.toHaveBeenCalled();

        expect(component.root.findByType(Gallery).props.data).toEqual(customData.data.photos.photo);
    })
})