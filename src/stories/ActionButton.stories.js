import ActionButton from "../components/ActionButton";

export default {
    title: "Action Button",
    component: ActionButton,
    argTypes: {
        handleClick: {
            action: "handleClick"
        },
        type: {
            control: {
                type: 'select',
                options: ['Default', 'Neutral', 'Reverse']
            }
        },
        status: {
            control: {
                type: 'select',
                options: ['Default', 'Hover', 'Disabled']
            }
        },
        size: {
            control: {
                type: 'select',
                options: ['Default', 'Small', 'X-Small']
            }
        },
        swapIcon: {
            control: {
                type: 'select',
                options: ['Default', 'Edit', 'Delete']
            }
        }
    }
}

const Template = args => <ActionButton {...args} />

export const Overview = Template.bind({})
Overview.args = {
    type: "Default",
    status: "Default",
    size: "Default",
    iconOnly: "No",
    icon: true,
    text: true,
    swapIcon: "Default",
    editText: "Action"
}

export const Default = () =>
    <div style={{ display: "flex",gap: "5px" }}>
        <ActionButton type="Default" />
        <ActionButton type="Neutral" />
        <ActionButton type="Reverse" />
    </div>

export const Hover = () =>
    <div style={{ display: "flex",gap: "5px" }}>
        <ActionButton type="Default" status="Hover" />
        <ActionButton type="Neutral" status="Hover" />
        <ActionButton type="Reverse" status="Hover" />
    </div>

export const Disabled = () =>
    <div style={{ display: "flex",gap: "5px" }}>
        <ActionButton type="Default" status="Disabled" />
        <ActionButton type="Neutral" status="Disabled" />
        <ActionButton type="Reverse" status="Disabled" />
    </div>

export const Size = () =>
    <div>
        <div style={{ display: "flex",gap: "5px" }}>
            <ActionButton type="Default" size="Default" />
            <ActionButton type="Default" size="Small" />
            <ActionButton type="Default" size="X-Small" />
        </div>
        <div style={{ display: "flex",gap: "5px" }}>
            <ActionButton type="Neutral" size="Default" />
            <ActionButton type="Neutral" size="Small" />
            <ActionButton type="Neutral" size="X-Small" />
        </div>
        <div style={{ display: "flex",gap: "5px" }}>
            <ActionButton type="Reverse" size="Default" />
            <ActionButton type="Reverse" size="Small" />
            <ActionButton type="Reverse" size="X-Small" />
        </div>
    </div>

export const Icons = () =>
    <div style={{ display: "flex",gap: "5px" }}>
        <ActionButton type="Default" swapIcon="Default" />
        <ActionButton type="Neutral" swapIcon="Edit" />
        <ActionButton type="Neutral" swapIcon="Delete" />
    </div>

export const Type = () =>
    <div style={{ display: "flex",gap: "10px" }}>
        <ActionButton type="Default" icon={false}/>
        <ActionButton type="Default" />
        <ActionButton type="Default" iconOnly="Yes"/>
    </div>
