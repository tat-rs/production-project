import { fireEvent, screen } from '@testing-library/react';
import renderWithTranslation from 'shared/lib/tests/renderWithTranslation';
import Sidebar from "./Sidebar"

describe('Sidebar test', () => {
  test('render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  })

  test('collapsed', () => {
    renderWithTranslation(<Sidebar />);
    const btn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(btn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  })
})