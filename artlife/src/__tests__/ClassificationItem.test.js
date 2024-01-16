import { fireEvent, render, screen } from '@testing-library/react';
import { ClassificationItem } from '../components/ClassificationItem';

const testClassification = {
  name: 'Paintings',
};

describe('ClassificationItem', () => {
  it('Displays the name and calls handleClick on click', () => {
    const mockHandleClick = jest.fn();
    render(
      <ClassificationItem
        classification={testClassification}
        handleClick={mockHandleClick}
      />,
    );
    const listItem = screen.getByRole('listitem');
    fireEvent.click(listItem);
    expect(mockHandleClick).toHaveBeenCalledWith(testClassification);
  });
});
