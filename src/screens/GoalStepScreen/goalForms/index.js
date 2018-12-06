import t from '../../../forms/components';

export default {
  1: {
    type: t.struct({
      goalSteps: t.list(
        t.struct({
          step: t.String,
        })
      ),
    }),
    options: {
      label: 'Add a list of 2-10 steps that could help you achieve your goals!',
      fields: {
        goalSteps: {
          config: {
            min: 2,
            max: 10,
            defaults: {
              id: {
                type: 'generated',
              },
              completed: {
                type: 'constant',
                value: false,
              },
            },
          },
          item: {
            auto: 'none',
            fields: {
              step: {
                label: 'A step to complete my goal...',
              },
              id: {
                label: 'id',
                hidden: true,
                generated: true,
                config: {
                  hidden: true,
                  generated: true,
                },
              },
            },
          },
        },
      },
    },
  },
};
