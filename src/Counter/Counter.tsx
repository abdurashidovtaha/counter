import * as React from "react";

interface Props {
    text?: string;
}

export const Counter: React.FC<Props> = () => {
    return (
        <button>Create Counter</button>
    )
}