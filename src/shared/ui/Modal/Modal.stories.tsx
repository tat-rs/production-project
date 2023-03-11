import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import Modal from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = function (args) {
  return <Modal {...args} />;
};

export const Light = Template.bind({});
Light.args = {
  isOpen: true,
  children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque libero aperiam nesciunt, magnam obcaecati quis sunt natus, mollitia soluta veniam, minus dolor pariatur culpa sit numquam ipsum voluptatum aliquid repudiandae in quos? Quae amet repellendus ipsa beatae nostrum in odit deleniti blanditiis eaque harum. Harum dolorum non nostrum saepe alias?',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque libero aperiam nesciunt, magnam obcaecati quis sunt natus, mollitia soluta veniam, minus dolor pariatur culpa sit numquam ipsum voluptatum aliquid repudiandae in quos? Quae amet repellendus ipsa beatae nostrum in odit deleniti blanditiis eaque harum. Harum dolorum non nostrum saepe alias?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
