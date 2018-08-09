import {
  HOME_SCREEN,
  DONE_SCREEN,
} from './constants'

/**
 * About -1: Temporary solution, it prevents some errors, due to __DEV__ flag.
 * at the very first step there are NO steps, so it crashes because nextStep is undefined.
 * This solution is just meant to subside the error for the sake of completing issue 185
 */
const sequenceMotivationText = {  
  '-1': {
    [HOME_SCREEN]: () => `Placeholder`,
    [DONE_SCREEN]: () => `Placeholder`
  },
  '1': {
    [HOME_SCREEN]: () => `Welcome to the 20/20 Life Vision Challenge! We suggest starting with Step 1: The Rocking Chair.`,
    [DONE_SCREEN]: () => `Welcome to the 20/20 Life Vision Challenge! We suggest starting with Step 1: The Rocking Chair.`
  },
  '2': {
    [HOME_SCREEN]: () => 'Next is Step 2, where you will begin to optimize your time based on a typical 168 hour week.',
    [DONE_SCREEN]: () => 'Now you can begin Step 2, where we’ll help you optimize your ideal 168 hour week.'
  },
  '3': {
    [HOME_SCREEN]: () => `Let’s move on to Step 3, where you will engage in constructive self-reflection regarding your strengths and weaknesses and how they have helped or hindered you in pursuit of your goals. `,
    [DONE_SCREEN]: () => `In Step 3, you will engage in constructive self-reflection regarding your strengths and weaknesses and how they have helped or hindered you in pursuit of your goals.`
  },
  '4': {
    [HOME_SCREEN]: () => `In step 4 - you will form your Board of Advisors for the Life Vision Challenge. A strong community is foundational for becoming the best possible you.`,
    [DONE_SCREEN]: () => `In step 4, we’ll ask you to form a Board of Advisors, based on the 7 Pillars of Life. A strong community is foundational for becoming the best possible you.`
  },
  '5': {
    [HOME_SCREEN]: () => `The next step is to begin setting and classifying your life goals according to the seven goal types.`,
    [DONE_SCREEN]: () => `Now it’s time for step 5, where you will begin the process ofsetting and classifying your life goals according to the seven goal types.`
  },
  '6': {
    [HOME_SCREEN]: () => `Based on your activity so far, we suggest you move on to step 6, where you will meditate on the goals of people in your inner circle, and how you can best support them. In the 20/20 Life Vision Challenge, giving is just as important as receiving.`,
    [DONE_SCREEN]: () => `Let's move on to step 6, where you will meditate on the goals of people in your inner circle, and how you can best support them. In the 20/20 Life Vision Challenge, giving is just as important as receiving.`
  },
  '7': {
    [HOME_SCREEN]: () => `For many of us, following through on our goals is a bit harder than setting them. Step 7 will help you analyze what happens after you set your goals, using the 7 Goal Outcomes. This will be very helpful for breaking any bad habits that have prevented us from achieving past goals.`,
    [DONE_SCREEN]: () => `Setting goals? Piece of cake. Following through? For many of us, this is the hard part. Step 7 will help you analyze what happens after you set your goals, which will be very helpful for achieving them.`
  },
  '8': {
    [HOME_SCREEN]: () => `In step 8 - What is my Internal Energy Level? - you’ll meditate on how you’re feeling at different times and in different situations. This will help you gain perspective on where you’re doing great and where you can look to improve.`,
    [DONE_SCREEN]: () => `Let's move on to step 8 , whereyou’ll turn your gaze inward and look at your internal energy levels. You’ll meditate on how you’re feeling at different times of the day, in different situations. This will help you gain perspective on where you’re doing great and where you can look to improve.`
  },
  '9': {
    [HOME_SCREEN]: () => `Go ahead and jump into step 9, where you will meditate on who your role models are, and when and how they have influenced you according to the 7 Pillars of Life.`,
    [DONE_SCREEN]: () => `In step 9, you will meditate on who your role models are, and when and how they have influenced you according to the 7 Pillars of Life.`
  },
  '10': {
    [HOME_SCREEN]: () => `It’s time to complete step 10, where you will look within, meditate on the various parts of your internal world, and determine how they have helped or hindered you in your journey thus far.`,
    [DONE_SCREEN]: () => `In step 10, you will look within, meditate on the various parts of your internal world, and determine how they have helped or hindered you in your journey thus far.`
  },
  '11': {
    [HOME_SCREEN]: () => `Let’s go to step 11, where you will assess your goals over the last 5 years.`,
    [DONE_SCREEN]: () => `Now, we move on to step 11, where you will assess your goals over the last 5 years.`
  },
  '12': {
    [HOME_SCREEN]: () => `Now you’re ready to start step 12: Major Life Events. You’ll analyze the MLEs of your past 5 years, and what kind of effects they had.`,
    [DONE_SCREEN]: () => `Step 12 deals with your Major Life Events. You’ll analyze the MLEs of your past 5 years, and what kind of effects they had.`
  },
  '13': {
    [HOME_SCREEN]: () => `The assessment phase of the 20/20 Life Vision Challenge will ask you to assess yourself from the perspective of our 7 Pillars of Life. Step 13 focuses on Career.`,
    [DONE_SCREEN]: () => `You’re doing great. The Assessment phase of the 20/20 Life Vision Challenge will ask you to assess yourself from the perspective of our 7 Pillars of Life. Step 13 focuses on Career.`
  },
  '14': {
    [HOME_SCREEN]: () => `Self assessment is very important in the 20/20 Life Vision Challenge. We know it’s not easy! You’re doing great. The next assessment is Step 14, which focuses on finances.`,
    [DONE_SCREEN]: () => `Honest self-assessment is fundamental to the 20/20 Life Vision Challenge. We know it’s not easy and you’re doing great. In Step 14, we’ll continue the process with a focus on finance.`
  },
  '15': {
    [HOME_SCREEN]: () => `Work/life balance is a fundamental piece of the Timebug philosophy. The next assessment in Step 15 focuses on your personal aims and hobbies.`,
    [DONE_SCREEN]: () => `Work/life balance is a central piece of the Timebug philosophy. Step 15 will shift the focus to your personal aims and hobbies.`
  },
  '16': {
    [HOME_SCREEN]: () => `Step 16’s assessment focuses on health and well-being. At Timebug, health is a holistic concept, so we’ll ask you to examine it from physical, psychological and spiritual perspectives.`,
    [DONE_SCREEN]: () => `The next assessment in step 16 focuses on health and well-being. At Timebug, health is a holistic concept, so we’ll ask you to assess yourself from physical, psychological and spiritual perspectives.`
  },
  '17': {
    [HOME_SCREEN]: () => ` In Step 17, you will turn your focus to the inter-personal and assess all of the relationships in your life.`,
    [DONE_SCREEN]: () => `In Step 17, you will turn your focus to the inter-personal and assess all the relationships in your life.`
  },
  '18': {
    [HOME_SCREEN]: () => `We suggest you try Step 18, where you’ll turn your gaze outward, look around yourself and assess your current environment.`,
    [DONE_SCREEN]: () => `In Step 18, you’ll turn your gaze outward, look around yourself and assess your current environment.`
  },
  '19': {
    [HOME_SCREEN]: () => `In step 19, you'll focus on spirituality and it's role in your life.`,
    [DONE_SCREEN]: () => `In step 19, you'll focus on spirituality and it's role in your life.`
  },
  '20': {
    [HOME_SCREEN]: () => `In step 20, you’ll look back and reflect on your assessments of the last 5 years. We’ll use that as a spring board to the final phase, Vision Creation.`,
    [DONE_SCREEN]: () => `In step 20, you’ll look back and reflect on your assessments of the last 5 years.`
  },
  '21': {
    [HOME_SCREEN]: () => `We suggest you continue with Step 21, where you will visualize planting seeds in your Life Garden to begin manifesting your goals.`,
    [DONE_SCREEN]: () => `We suggest you continue with Step 21, where you will visualize planting seeds in your Life Garden to begin manifesting your goals.`
  },
  '22': {
    [HOME_SCREEN]: () => `Our (literal) dreams are one of the greatest revealers of our sub conscious -  among other things. With this in mind, let’s jump into step 22, where you’ll write down and analyze your dreams.`,
    [DONE_SCREEN]: () => `Our (literal) dreams are one of the greatest revealers of our sub conscious. With this in mind, let’s jump into step 22, where you’ll write down and analyze your dreams.`
  },
  '23': {
    [HOME_SCREEN]: () => `In phase 3 you will do an exercise in Vision Creation for all 7 pillars. Step 23 focuses on career.`,
    [DONE_SCREEN]: () => `In phase 3 you will do an exercise in Vision Creation for all 7 pillars. Step 23 starts with a focus on career.`
  },
  '24': {
    [HOME_SCREEN]: () => `Finances and Career are different pillars, but they are certainly closely related. With that in mind, let’s jump into step 24 and begin the process of Vision Creation for your finances.`,
    [DONE_SCREEN]: () => `Finances and Career are different pillars, but they are certainly closely related. With that in mind, let’s jump into step 24 and begin the process of Vision Creation for your finances.`
  },
  '25': {
    [HOME_SCREEN]: () => `We suggest you move on to step 25, where you will focus on Vision Creation for your Aims & Hobbies.`,
    [DONE_SCREEN]: () => `In step 25, where you will focus on Vision Creation for your Aims & Hobbies.`
  },
  '26': {
    [HOME_SCREEN]: () => `We suggest you move on to step 26, where you will focus on Vision Creation for your Health and Wellness.`,
    [DONE_SCREEN]: () => `In step 26, you will focus on Vision Creation for your Health and Wellness.`
  },
  '27': {
    [HOME_SCREEN]: () => `We suggest you move on to step 27, where you will focus on Vision Creation for your Relationships.`,
    [DONE_SCREEN]: () => `In step 27, you will focus on Vision Creation for your Relationships.`
  },
  '28': {
    [HOME_SCREEN]: () => `In step 28, you’ll continue the process of Vision Creation with a focus on your Environment.`,
    [DONE_SCREEN]: () => `In step 28, you’ll continue the process of Vision Creation with a focus on your Environment.`
  },
  '29': {
    [HOME_SCREEN]: () => `Let's move on to step 29, which will focus on Vision Creation for Spirituality.`,
    [DONE_SCREEN]: () => `In step 29, you’ll continue the process of Vision Creation with a focus on your Spirituality.`
  },
  '30': {
    [HOME_SCREEN]: () => `In step 30, you’ll map out the next year of your life based on all the work you’ve done thus far. This will be a powerful reference and motivational tool going forward.`,
    [DONE_SCREEN]: () => `In step 30, you’ll map out the next year of your life based on all the work you’ve done thus far. This will be a powerful reference and motivational tool going forward.`
  }
}

export default sequenceMotivationText
