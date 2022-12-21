import { render, screen, waitFor, within } from '@testing-library/react';
import React from 'react';
import Form from './Form';
import user from '@testing-library/user-event';

describe('Form', () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockClear();
    render(<Form onSubmit={onSubmit} />);
  });

  it('onSubmit is called when all fields pass validation', () => {
    user.type(getName(), 'Kanat');
    user.type(getEmail(), 'kanat.juzbayev@gmail.com');
    user.type(getDate(), '1989-04-26');
    user.type(getPicture(), 'Ava.png');

    const dropdown = screen.getByRole('combobox', {
      name: /favorite music genre :/i,
    });

    user.selectOptions(
      dropdown,
      within(dropdown).getByRole('option', { name: 'Electronic Dance Music' })
    );

    const switcher = screen.getByRole('checkbox', {
      name: /notifications :/i,
    });
    user.click(switcher);

    const checkbox = screen.getByRole('checkbox', {
      name: /consent to data processing/i,
    });
    user.click(checkbox);

    user.click(screen.getByRole('button', { name: /Submit/i }));

    waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });
});

function getName() {
  return screen.getByRole('textbox', {
    name: /name :/i,
  });
}

function getEmail() {
  return screen.getByRole('textbox', {
    name: /email :/i,
  });
}

function getDate() {
  return screen.getByLabelText(/birthday date :/i);
}

function getPicture() {
  return screen.getByText(/profile picture :/i);
}
