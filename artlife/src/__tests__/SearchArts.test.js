import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { SearchArts } from '../components/SearchArts';

const testQuery = 'photographs';

describe('Search arts input form', () => {
  it('Correctly fills the field with the user input', () => {
    render(<SearchArts />);
    const inputElement = screen.getByPlaceholderText('i.e. paintings');
    expect(inputElement).toHaveValue('');
    fireEvent.change(inputElement, { target: { value: testQuery } });
    expect(inputElement).toHaveValue(testQuery);
  });
});
