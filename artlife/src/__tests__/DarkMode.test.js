import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { Layout } from '../components/Layout';
import { MemoryRouter } from 'react-router-dom';
import { MuseumContext } from '../context/GlobalState';

describe('Layout component using the dark mode', () => {
  it('Toggles dark mode on the Lamp click in the Header', () => {
    const theme = {
      darkMode: false,
      toggleDarkMode: jest.fn(),
    };

    render(
      <MuseumContext.Provider value={theme}>
        <MemoryRouter>
          <Layout />
        </MemoryRouter>
      </MuseumContext.Provider>,
    );

    const lampElement = screen.getByAltText('Lamp');
    fireEvent.click(lampElement);
    expect(theme.toggleDarkMode).toHaveBeenCalled();
  });
});
