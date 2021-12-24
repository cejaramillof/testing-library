import React from 'react';
import Gallery from '../../components/Gallery'
import Image from '../../components/Image'
import NoImages from '../../components/NoImages'
import { create, act } from 'react-test-renderer'

let component;

const props = {
    data: [],
}

describe('<Gallery />', () => {
    beforeEach(() => {
        component = create(<Gallery {...props} />);
    });

    it('Should render correctly', () => {
        expect(component).toBeDefined();
        expect(component.root.findByType('div')).toBeDefined();
        expect(component.root.findByType('ul')).toBeDefined();
    })

    it('Should render NoImages if data is empty', () => {
        expect(component.root.findByType(NoImages)).toBeDefined();
    })

    it('Should render Images if data exists or be changed', () => {
        const data = [
            { farm: 'farmTest01', server: 'serverTest', id: 'testId01', secret: 'asdadgsfad', title: 'titleTest01' },
            { farm: 'farmTest02', server: 'serverTest', id: 'testId02', secret: 'qeqwewrt', title: 'titleTest02' },
            { farm: 'farmTest03', server: 'serverTest', id: 'testId03', secret: 'asdfsadff', title: 'titleTest03' },
            { farm: 'farmTest04', server: 'serverTest', id: 'testId04', secret: 'ñlkkjhhñl', title: 'titleTest04' }
        ];

        // act(() => {
            component.update(<Gallery data={data} />);
        //  })

        // console.log('props', component.root.findAllByType(Image)[0].props)

        expect(component.root.findAllByType(NoImages).length).toEqual(0);
        expect(component.root.findAllByType(Image).length).toEqual(data.length);
        expect(component.root.findAllByType(Image)[0].props.alt).toEqual(data[0].title);
        expect(component.root.findAllByType(Image)[0].props.alt).toEqual(data[0].title);
    })

})