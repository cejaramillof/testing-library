import React from 'react';
import Form from '../../components/Form'
import { create, act } from 'react-test-renderer'

let component;

const props = {
    history: {},
    handleSubmit: jest.fn(),
}

describe('<Form />', () => {
    beforeEach(() => {
        component = create(<Form {...props} />);
    });

    it('Should render correctly', () => {
        expect(component).toBeDefined();
        expect(component.toJSON().type).toEqual('form');
        expect(component.root.findByType('input')).toBeDefined();
        expect(component.root.findByType('button')).toBeDefined();
        expect(component.root.findByType('svg')).toBeDefined();
    })

    it('Should activate the button when the input has not empty value', () => {
        const form = component.root.findByType('form');
        const input = form.findByType('input');
        const button = form.findByType('button');

        expect(button.props.disabled).toBeTruthy();
        expect(button.props.className).toEqual('search-button null');

        act(() => {
            input.props.onChange({ target: { value: 'crow' }})
        })

        expect(button.props.disabled).toBeFalsy();
        expect(button.props.className).toEqual('search-button active');
    })

    it('Should call onSubmit without problems', () => {
        const form = component.root.findByType('form');
        form.props.onSubmit();
        expect(props.handleSubmit).toHaveBeenCalled();
        expect(props.handleSubmit).toHaveBeenCalledTimes(1);
        expect(props.handleSubmit).toHaveBeenCalledWith(undefined, props.history, '');
    })
})