// @flow
import types, { answerTypes, setTypes } from 'react-native-forms/forms/types'
import { SHARED } from 'react-native-forms/forms/constants'
import type { Form } from 'react-native-forms/types/formTypes'
import { LifeCategories } from './content'
import { Platform } from 'react-native'

export const FORM_KEYS = {
  form_30_next_year: 'form_30_next_year',
  form_30_core_work: 'form_30_core_work',
  form_30_special_projects: 'form_30_special_projects',
  form_30_spirituality: 'form_30_spirituality',
  form_30_skills_education: 'form_30_skills_education',
  form_30_basic_needs: 'form_30_basic_needs',
  form_30_personal_life: 'form_30_personal_life',
  form_30_health: 'form_30_health',
}

export const CHILDREN_KEYS = {
  form_30_core_work: {
    hopes: `${FORM_KEYS.form_30_core_work}.hopes`,
    fears: `${FORM_KEYS.form_30_core_work}.fears`,
  },
  form_30_special_projects: {
    hopes: `${FORM_KEYS.form_30_special_projects}.hopes`,
    fears: `${FORM_KEYS.form_30_special_projects}.fears`,
  },
  form_30_spirituality: {
    hopes: `${FORM_KEYS.form_30_spirituality}.hopes`,
    fears: `${FORM_KEYS.form_30_spirituality}.fears`,
  },
  form_30_skills_education: {
    hopes: `${FORM_KEYS.form_30_skills_education}.hopes`,
    fears: `${FORM_KEYS.form_30_skills_education}.fears`,
  },
  form_30_basic_needs: {
    hopes: `${FORM_KEYS.form_30_basic_needs}.hopes`,
    fears: `${FORM_KEYS.form_30_basic_needs}.fears`,
  },
  form_30_personal_life: {
    hopes: `${FORM_KEYS.form_30_personal_life}.hopes`,
    fears: `${FORM_KEYS.form_30_personal_life}.fears`,
  },
  form_30_health: {
    hopes: `${FORM_KEYS.form_30_health}.hopes`,
    fears: `${FORM_KEYS.form_30_health}.fears`,
  },
}

const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
      type: types.set,
      key: FORM_KEYS.form_30_next_year,
      content: {
        text:
          'Map out the next year of your life - 8,760 hrs (365 days x 24 hrs) according to your Life Categories. To get you started, the form below contains the yearly value for each life category based on your answers in step 2.',
        smallKey: 'Next year',
      },
      options: {
        default: {},
        style: {
          totalContainerStyle: {
            paddingHorizontal: 4,
          },
        },
        subtype: {
          type: setTypes.slider,
        },
        subtypeOptions: {
          min: 0,
          max: 8760,
          data: SHARED,
          step: 52,
          suffixOfValue: 'hrs',
        },
        children: Object.keys(LifeCategories).reduce(
          (children, contentKey, index) => {
            const category = LifeCategories[contentKey]
            return {
              ...children,
              [index]: {
                contentKey,
                key: `form_30_next_year.${contentKey}`,
                content: {
                  text: category.title,
                  subtitle: category.subtitle,
                },
                options: {
                  max: 3640,
                },
              },
            }
          },
          {}
        ),
      },
    },
    1: {
      type: types.formElements,
      key: `${FORM_KEYS.form_30_core_work}`,
      content: {
        text: 'Life Category: Core Work',
        smallKey: 'Core Work',
      },
      options: {
        required: true,
        childTypes: {
          0: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_30_core_work.hopes}`,
            content: {
              smallKey: 'Core Work Hopes',
            },
            options: {
              label:
                'What are your biggest hopes for this life category over the coming year, in terms of what you can get done?',
              placeHolder:
                "I'm optimistic that paying greater attention to my physical health will leave me feeling better throughout the day, thus working much more efficiently...",
              default: '',
              multiline: true,
              required: true,
              numberOfLines: 4,
              style: {
                textInputContainerStyle: Platform.select({
                  android: {},
                  ios: {}, //Fill with what's needed
                }),
                textInputStyle: Platform.select({
                  android: {},
                  ios: {
                    minHeight: 80,
                  }, //Fill with what's needed
                }),
              },
            },
          },
          1: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_30_core_work.fears}`,
            content: {
              smallKey: 'Core Work Fears',
            },
            options: {
              label: 'What are your greatest fears?',
              placeHolder:
                'I am worried I will not overcome my social anxiety which holds me back in the workplace',
              default: '',
              multiline: true,
              numberOfLines: 4,
              style: {
                textInputContainerStyle: Platform.select({
                  android: {},
                  ios: {}, //Fill with what's needed
                }),
                textInputStyle: Platform.select({
                  android: {},
                  ios: {
                    minHeight: 80,
                  }, //Fill with what's needed
                }),
              },
            },
          },
        },
      },
    },
    2: {
      type: types.formElements,
      key: `${FORM_KEYS.form_30_special_projects}`,
      content: {
        text: 'Life Category: Special Projects',
        smallKey: 'Special Projects',
      },
      options: {
        required: true,
        childTypes: {
          0: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_30_special_projects.hopes}`,
            content: {
              smallKey: 'Special Projects Hopes',
            },
            options: {
              label:
                'What are your biggest hopes for this life category over the coming year, in terms of what you can get done?',
              placeHolder:
                'I would like to finally get that online store up and running...',
              default: '',
              multiline: true,
              required: true,
              numberOfLines: 4,
              style: {
                textInputContainerStyle: Platform.select({
                  android: {},
                  ios: {}, //Fill with what's needed
                }),
                textInputStyle: Platform.select({
                  android: {},
                  ios: {
                    minHeight: 80,
                  }, //Fill with what's needed
                }),
              },
            },
          },
          1: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_30_special_projects.fears}`,
            content: {
              smallKey: 'Special Projects Fears',
            },
            options: {
              label: 'What are your greatest fears?',
              placeHolder:
                'Outside of work and family, there is hardly any time and I am usually very tired...',
              default: '',
              multiline: true,
              numberOfLines: 4,
              style: {
                textInputContainerStyle: Platform.select({
                  android: {},
                  ios: {}, //Fill with what's needed
                }),
                textInputStyle: Platform.select({
                  android: {},
                  ios: {
                    minHeight: 80,
                  }, //Fill with what's needed
                }),
              },
            },
          },
        },
      },
    },
    3: {
      type: types.formElements,
      key: `${FORM_KEYS.form_30_spirituality}`,
      content: {
        text: 'Life Category: Spirituality',
        smallKey: 'Spirituality',
      },
      options: {
        required: true,
        childTypes: {
          0: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_30_spirituality.hopes}`,
            content: {
              smallKey: 'Spirituality Hopes',
            },
            options: {
              label:
                'What are your biggest hopes for this life category over the coming year, in terms of what you can get done?',
              placeHolder:
                'I will finally commit to meditating 30 minutes every morning, no matter what...',
              default: '',
              multiline: true,
              required: true,
              numberOfLines: 4,
              style: {
                textInputContainerStyle: Platform.select({
                  android: {},
                  ios: {}, //Fill with what's needed
                }),
                textInputStyle: Platform.select({
                  android: {},
                  ios: {
                    minHeight: 80,
                  }, //Fill with what's needed
                }),
              },
            },
          },
          1: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_30_core_work.fears}`,
            content: {
              smallKey: 'Core Work Fears',
            },
            options: {
              label: 'What are your greatest fears?',
              placeHolder:
                'I worry about what some of my family members will think of my new spiritual practice...',
              default: '',
              multiline: true,
              numberOfLines: 4,
              style: {
                textInputContainerStyle: Platform.select({
                  android: {},
                  ios: {}, //Fill with what's needed
                }),
                textInputStyle: Platform.select({
                  android: {},
                  ios: {
                    minHeight: 80,
                  }, //Fill with what's needed
                }),
              },
            },
          },
        },
      },
    },
    4: {
      type: types.formElements,
      key: `${FORM_KEYS.form_30_skills_education}`,
      content: {
        text: 'Life Category: Skills and Education',
        smallKey: 'Skills and Education',
      },
      options: {
        required: true,
        childTypes: {
          0: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_30_skills_education.hopes}`,
            content: {
              smallKey: 'Skills and Education Hopes',
            },
            options: {
              label:
                'What are your biggest hopes for this life category over the coming year, in terms of what you can get done?',
              placeHolder:
                'Now is the time for me to research and apply to the best Masters program in my field...',
              default: '',
              multiline: true,
              required: true,
              numberOfLines: 4,
              style: {
                textInputContainerStyle: Platform.select({
                  android: {},
                  ios: {}, //Fill with what's needed
                }),
                textInputStyle: Platform.select({
                  android: {},
                  ios: {
                    minHeight: 80,
                  }, //Fill with what's needed
                }),
              },
            },
          },
          1: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_30_skills_education.fears}`,
            content: {
              smallKey: 'Skills and Education Fears',
            },
            options: {
              label: 'What are your greatest fears?',
              placeHolder:
                'I often feel that I am too old to be learning anything new...',
              default: '',
              multiline: true,
              numberOfLines: 4,
              style: {
                textInputContainerStyle: Platform.select({
                  android: {},
                  ios: {}, //Fill with what's needed
                }),
                textInputStyle: Platform.select({
                  android: {},
                  ios: {
                    minHeight: 80,
                  }, //Fill with what's needed
                }),
              },
            },
          },
        },
      },
    },
    5: {
      type: types.formElements,
      key: `${FORM_KEYS.form_30_basic_needs}`,
      content: {
        text: 'Life Category: Basic Needs',
        smallKey: 'Basic Needs',
      },
      options: {
        required: true,
        childTypes: {
          0: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_30_basic_needs.hopes}`,
            content: {
              smallKey: 'Basic Needs Hopes',
            },
            options: {
              label:
                'What are your biggest hopes for this life category over the coming year, in terms of what you can get done?',
              placeHolder:
                'I will prioritize getting 7-8 hours of sleep every night which will in turn effect all my other Life Categories positively',
              default: '',
              multiline: true,
              required: true,
              numberOfLines: 4,
              style: {
                textInputContainerStyle: Platform.select({
                  android: {},
                  ios: {}, //Fill with what's needed
                }),
                textInputStyle: Platform.select({
                  android: {},
                  ios: {
                    minHeight: 80,
                  }, //Fill with what's needed
                }),
              },
            },
          },
          1: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_30_basic_needs.fears}`,
            content: {
              smallKey: 'Basic Needs Fears',
            },
            options: {
              label: 'What are your greatest fears?',
              placeHolder:
                'I like to stay up late and have time for myself at the end of the day, but it effects my sleep, makes me skip breakfast, etc...',
              default: '',
              multiline: true,
              numberOfLines: 4,
              style: {
                textInputContainerStyle: Platform.select({
                  android: {},
                  ios: {}, //Fill with what's needed
                }),
                textInputStyle: Platform.select({
                  android: {},
                  ios: {
                    minHeight: 80,
                  }, //Fill with what's needed
                }),
              },
            },
          },
        },
      },
    },
    6: {
      type: types.formElements,
      key: `${FORM_KEYS.form_30_personal_life}`,
      content: {
        text: 'Life Category: Personal Life',
        smallKey: 'Personal Life',
      },
      options: {
        required: true,
        childTypes: {
          0: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_30_personal_life.hopes}`,
            content: {
              smallKey: 'Personal Life Hopes',
            },
            options: {
              label:
                'What are your biggest hopes for this life category over the coming year, in terms of what you can get done?',
              placeHolder:
                'I will devote one day of every weekend completely to spending time with family',
              default: '',
              multiline: true,
              required: true,
              numberOfLines: 4,
              style: {
                textInputContainerStyle: Platform.select({
                  android: {},
                  ios: {}, //Fill with what's needed
                }),
                textInputStyle: Platform.select({
                  android: {},
                  ios: {
                    minHeight: 80,
                  }, //Fill with what's needed
                }),
              },
            },
          },
          1: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_30_personal_life.fears}`,
            content: {
              smallKey: 'Personal Life Fears',
            },
            options: {
              label: 'What are your greatest fears?',
              placeHolder:
                'I worry I have alienated some close friends over the last few years due to being hyper focused on my work...',
              default: '',
              multiline: true,
              numberOfLines: 4,
              style: {
                textInputContainerStyle: Platform.select({
                  android: {},
                  ios: {}, //Fill with what's needed
                }),
                textInputStyle: Platform.select({
                  android: {},
                  ios: {
                    minHeight: 80,
                  }, //Fill with what's needed
                }),
              },
            },
          },
        },
      },
    },
    7: {
      type: types.formElements,
      key: `${FORM_KEYS.form_30_health}`,
      content: {
        text: 'Life Category: Health',
        smallKey: 'Health',
      },
      options: {
        required: true,
        childTypes: {
          0: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_30_health.hopes}`,
            content: {
              smallKey: 'Health Hopes',
            },
            options: {
              label:
                'What are your biggest hopes for this life category over the coming year, in terms of what you can get done?',
              placeHolder:
                'I know that I can loose 30 pounds with some simple diet changes and regular exercise...',
              default: '',
              multiline: true,
              required: true,
              numberOfLines: 4,
              style: {
                textInputContainerStyle: Platform.select({
                  android: {},
                  ios: {}, //Fill with what's needed
                }),
                textInputStyle: Platform.select({
                  android: {},
                  ios: {
                    minHeight: 80,
                  }, //Fill with what's needed
                }),
              },
            },
          },
          1: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_30_health.fears}`,
            content: {
              smallKey: 'Health Fears',
            },
            options: {
              label: 'What are your greatest fears?',
              placeHolder:
                'Of all the things I love in life, carbs may be the hardest to give up...',
              default: '',
              multiline: true,
              numberOfLines: 4,
              style: {
                textInputContainerStyle: Platform.select({
                  android: {},
                  ios: {}, //Fill with what's needed
                }),
                textInputStyle: Platform.select({
                  android: {},
                  ios: {
                    minHeight: 80,
                  }, //Fill with what's needed
                }),
              },
            },
          },
        },
      },
    },
  },
}

export default form
