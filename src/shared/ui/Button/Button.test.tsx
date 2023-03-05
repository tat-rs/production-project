import { render, screen } from '@testing-library/react';
import Button, { ButtonSize, ButtonTheme } from './Button';

describe('Button test', () => {
  test('Button with text', () => {
    render(<Button>Text</Button>);
    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  test('Button with theme Clear', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Text</Button>);
    expect(screen.getByText('Text')).toHaveClass('clear');
  });

  test('Button with theme Outline', () => {
    render(<Button theme={ButtonTheme.OUTLINE}>Text</Button>);
    expect(screen.getByText('Text')).toHaveClass('outline');
  });

  test('Button with theme Background', () => {
    render(<Button theme={ButtonTheme.BACKGROUND}>Text</Button>);
    expect(screen.getByText('Text')).toHaveClass('background');
  });

  test('Button with theme Inverted-Background', () => {
    render(<Button theme={ButtonTheme.INVERTED_BACKGROUND}>Text</Button>);
    expect(screen.getByText('Text')).toHaveClass('invertedBackground');
  });

  test('Button square size_m', () => {
    render(<Button square size={ButtonSize.M}>Text</Button>);
    expect(screen.getByText('Text')).toHaveClass('square size_m');
  });

  test('Button square size_l', () => {
    render(<Button square size={ButtonSize.L}>Text</Button>);
    expect(screen.getByText('Text')).toHaveClass('square size_l');
  });

  test('Button square size_xl', () => {
    render(<Button square size={ButtonSize.XL}>Text</Button>);
    expect(screen.getByText('Text')).toHaveClass('square size_xl');
  });
});
