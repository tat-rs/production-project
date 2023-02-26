import { render, screen } from '@testing-library/react';
import Button, { ThemeButton } from './Button';

describe('Button test', () => {
  test('Button with text', () => {
    render(<Button>Text</Button>);
    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  test('Button with theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>Text</Button>);
    expect(screen.getByText('Text')).toHaveClass('clear');
  });
});
