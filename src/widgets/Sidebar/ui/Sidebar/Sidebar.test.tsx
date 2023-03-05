import { fireEvent, screen } from '@testing-library/react';
import componentRender from 'shared/lib/tests/componentRender';
import Sidebar from './Sidebar';

describe('Sidebar test', () => {
  test('render', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('collapsed', () => {
    componentRender(<Sidebar />);
    const btn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(btn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
