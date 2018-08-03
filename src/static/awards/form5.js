export default {
    type: 'list',
    fields: {
        genericField1: {
            type: 'label',
            form: '1',
            options: {
                header: 'Goals',
            }
        },
        genericField2: {
            type: 'checkbox',
            form: '2',
            options: {
                header: 'Completed'
            }
        }
    }
}