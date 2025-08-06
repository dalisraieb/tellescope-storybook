import type { Meta, StoryObj } from '@storybook/react-vite';
import TableSearch from './table-search';
import { useEffect, useState, type ComponentProps } from 'react';


type StoryProps = ComponentProps<typeof TableSearch> & {
    hasValue: boolean;
}

const meta = {
    title: 'ATOMS/TableControlElements/TableSearch',
    component: TableSearch,
    parameters: {
        controls: {
            exclude: ["small", "children", "value", "onChange"],
        },
    },
    argTypes: {
        expanded: {
            control: { type: 'boolean' },
        },
        hasValue: {
            control: { type: 'boolean' },
        },
    },
} satisfies Meta<StoryProps>;

export default meta;
type Story = StoryObj<StoryProps>;

export const Default: Story = {
    args: {
        hasValue: true,
        expanded: false
    },
    render: (args) => {
        const { hasValue, expanded, } = args as StoryProps;
        const [value, setValue] = useState<string>("");

        useEffect(() => {
            if (hasValue) {
                setValue("Organization");
            } else {
                setValue("");
            }
        }, [hasValue]);



        return (
            <TableSearch value={value} expanded={expanded} />
        );
    },
};

