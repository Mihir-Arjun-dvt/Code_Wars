type Action = 'up' | 'down' | 'left' | 'right';

interface actionEvent {
    action: Action
}

export const goUp = new CustomEvent<actionEvent>("goUp",{
    detail: {
        action: "up"
    },
    bubbles: true,
    cancelable: true,
},)

export const godown = new CustomEvent<actionEvent>("goUp",{
    detail: {
        action: "up"
    },
    bubbles: true,
    cancelable: true,
},)
export const goleft = new CustomEvent<actionEvent>("goUp",{
    detail: {
        action: "up"
    },
    bubbles: true,
    cancelable: true,
},)
export const goright = new CustomEvent<actionEvent>("goUp",{
    detail: {
        action: "up"
    },
    bubbles: true,
    cancelable: true,
},)