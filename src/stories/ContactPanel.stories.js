import { Component } from "react";
import { configure, addDecorator} from '@storybook/react';
import { Provider } from 'react-redux';
import store from "../redux/store";
import {within, userEvent} from '@storybook/testing-library';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

import ContactPanel from "../components/ContactPanel";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

export default {
    title: "ContactPanel",
    Component: ContactPanel,
    decorators: [
        (Story) => ( <Provider store={store}> <Story/> </Provider> )
    ],
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS
        },
    }
}

export const ContactPanelTest = () => <ContactPanel/>

/*
toggleMobileMenu.parameters= {
    viewport: {
        defaultViewport: 'iphone12'
    }
}
toggleMobileMenu.play = async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const menuButton = await canvas.getByTestId('menuButton')
    
    await sleep(500)
    await userEvent.click(menuButton)
    await sleep(500)
    await userEvent.click(menuButton)
}*/