import React from 'react';
import { render } from '@testing-library/react';
import FormCard from './FormCard';

const dataList = {
  name: 'Kanat',
  email: 'kanat.juzbayev@gmail.com',
  birthday: '1989-04-26',
  image: '04.jpg',
  genre: 'Pop Music',
  notifications: true,
  id: 1665506650988,
};

describe('Check FormCard component', () => {
  test('name is correct', () => {
    render(<FormCard dataList={dataList} />);
    const name = dataList.name;
    const testName = document.querySelector('.form-card_name') as HTMLImageElement;
    expect(testName.innerHTML).toContain(name);
  });
  test('email is correct', () => {
    render(<FormCard dataList={dataList} />);
    const email = dataList.email;
    const testEmail = document.querySelector('.form-card_email') as HTMLImageElement;
    expect(testEmail.innerHTML).toContain(email);
  });
  test('date is correct', () => {
    render(<FormCard dataList={dataList} />);
    const date = dataList.birthday;
    const testDate = document.querySelector('.form-card_date') as HTMLImageElement;
    expect(testDate.innerHTML).toContain(date);
  });
  test('image is correct', () => {
    render(<FormCard dataList={dataList} />);
    const image = dataList.image;
    const testImage = document.querySelector('.form-card_image') as HTMLImageElement;
    expect(testImage.innerHTML).toContain(image);
  });
  test('genre is correct', () => {
    render(<FormCard dataList={dataList} />);
    const genre = dataList.genre;
    const testGenre = document.querySelector('.form-card_genre') as HTMLImageElement;
    expect(testGenre.innerHTML).toContain(genre);
  });
  test('notifications is correct', () => {
    render(<FormCard dataList={dataList} />);
    const notifications = dataList.notifications ? 'off' : 'on';
    const testNotifications = document.querySelector(
      '.form-card_notifications'
    ) as HTMLImageElement;
    expect(testNotifications.innerHTML).toContain(notifications);
  });
  test('id is correct', () => {
    render(<FormCard dataList={dataList} />);
    const id = dataList.id;
    const testId = document.querySelector('.form-card_id') as HTMLImageElement;
    expect(testId.innerHTML).toContain(id.toString());
  });
});
