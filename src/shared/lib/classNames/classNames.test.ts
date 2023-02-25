import { classNames } from './classNames';

describe('classNames test', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional', () => {
    expect(classNames('someClass', {}, ['class1', 'class2']))
      .toBe('someClass class1 class2');
  });

  test('with mods', () => {
    expect(classNames(
      'someClass',
      { checked: true, hovered: true },
      ['class1', 'class2'],
    ))
      .toBe('someClass class1 class2 checked hovered');
  });

  test('with mods false', () => {
    expect(classNames(
      'someClass',
      { checked: true, hovered: false },
      ['class1', 'class2'],
    ))
      .toBe('someClass class1 class2 checked');
  });

  test('with mods undefined', () => {
    expect(classNames(
      'someClass',
      { checked: true, hovered: undefined },
      ['class1', 'class2'],
    ))
      .toBe('someClass class1 class2 checked');
  });
});
