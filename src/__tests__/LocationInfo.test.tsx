import React from 'react';
import { render, screen } from '@testing-library/react';

import { LocationInfo } from '../components/LocationInfo';

describe('Location Info Component', () => {
  it('Renders the given props', () => {
    render(<LocationInfo longitude={123.434} />);

    const longitudeValueElement = screen.getByText(/123.434/i);

    expect(longitudeValueElement).toBeInTheDocument();
  });

  it('Renders the flag icon', () => {
    const { queryByTestId } = render(<LocationInfo />);

    expect(queryByTestId(/flag-icon/i)).toBeTruthy();
  });

  it('The slot for prop is empty when not sent', () => {
    const { queryByTestId } = render(<LocationInfo />);

    const element = queryByTestId(/longitude-value/i);

    expect(element).toBeEmptyDOMElement();
  });
});
