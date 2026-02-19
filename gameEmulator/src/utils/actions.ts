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
},);

export const godown = new CustomEvent<actionEvent>("goDown",{
    detail: {
        action: "down"
    },
    bubbles: true,
    cancelable: true,
},);
export const goleft = new CustomEvent<actionEvent>("goLeft",{
    detail: {
        action: "left"
    },
    bubbles: true,
    cancelable: true,
},);
export const goright = new CustomEvent<actionEvent>("goright",{
    detail: {
        action: "right"
    },
    bubbles: true,
    cancelable: true,
},);