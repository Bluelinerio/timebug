export const temporaryUserAdditions = (data) =>  {
  // identify user
  if(!data.facebookId) {
    return data
  }
  return {
    ...data,
    aggregates: {
      ...(data.aggregates || {}),
      completedSteps: {
        1: {
          
        },
        2: {

        },
        3: {

        },
        20: {

        },
        13: {

        },
        16: {

        },
        23: {

        }
      }
    }
  }
}