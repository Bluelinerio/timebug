import React from 'react'

const handler = (stuff) => {
    // Dummy handler, required by genericFormConsumer
    return {
        stuff
    }
}

const FormExampleConsumer = (injectedProps) => (Component) => {
    const data = {
        subtitle: "This is a dummy subtitle",
        text: "This is dummy text"
    }
    const Consumer = (props) => (
        <Component handler={handler} data={data} {...injectedProps} {...props} />
    )
    return Consumer
}

export default FormExampleConsumer