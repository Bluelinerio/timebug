import {
  HOME_SCREEN,
  DONE_SCREEN,
} from './constants'

const sequenceMotivationText = {
  '1': {
    [HOME_SCREEN]: () => `Welcome to the 20/20 Life Vision Challenge! We suggest starting with Step 1: The Rocking Chair.`,
    [DONE_SCREEN]: () => `Welcome to the 20/20 Life Vision Challenge! We suggest starting with Step 1: The Rocking Chair.`
  },
  '2': {
    [HOME_SCREEN]: () => `Next is Step 2, where you will begin to optimize your time based on a typical 168 hour week.`,
    [DONE_SCREEN]: () => `Congratulations, you have completed The Rocking Chair! Now you can begin Step 2, where we’ll help you optimize your ideal 168 hour week.`
  },
  '3': {
    [HOME_SCREEN]: () => `Nice work - you have completed Step 2. Let’s move on to Step 3, where you will engage in constructive self-reflection regarding your strengths and weaknesses and how they have helped or hindered you in pursuit of your goals. `,
    [DONE_SCREEN]: () => `In Step 3, you will engage in constructive self-reflection regarding your strengths and weaknesses and how they have helped or hindered you in pursuit of your goals.`
  },
  '4': {
    [HOME_SCREEN]: () => `Good job, you have completed What are my strengths and weaknesses? In step 4 - you will form your Board of Advisors for the Life Vision Challenge. A strong community is foundational for becoming the best possible you.`,
    [DONE_SCREEN]: () => `In step 4, we’ll ask you to form a Board of Advisors, based on the 7 Pillars of Life. A strong community is foundational for becoming the best possible you.`
  },
  '5': {
    [HOME_SCREEN]: () => `Your Board of Advisors is formed! Their support and communication will aid your journey going forward. The next step is to begin setting and classifying your life goals according to the seven goal types.`,
    [DONE_SCREEN]: () => `Now it’s time for step 5, where you will begin the process ofsetting and classifying your life goals according to the seven goal types.`
  },
  '6': {
    [HOME_SCREEN]: () => `Congratulations on the great work so far.Now that you’ve clearly set goals for yourself, you can begin step 6, where you will meditate on the goals of people in your inner circle, and how you can best support them. In the 20/20 Life Vision Challenge, giving is just as important as receiving.`,
    [DONE_SCREEN]: () => `Now that you’ve clearly set goals for yourself, you can begin step 6, where you will meditate on the goals of people in your inner circle, and how you can best support them. In the 20/20 Life Vision Challenge, giving is just as important as receiving.`
  },
  '7': {
    [HOME_SCREEN]: () => `Setting goals? Piece of cake. Following through? For many of us, this is the hard part. Step 7 will help you analyze what happens after you set your goals, which will be very helpful for achieving them.`,
    [DONE_SCREEN]: () => `For many of us, following through on our goals is a bit harder than setting them. Step 7 will help you analyze what happens after you set your goals, using the 7 Goal Outcomes. This will be very helpful for breaking any bad habits that have prevented us from achieving past goals.`
  },
  '8': {
    [HOME_SCREEN]: () => `You’ve completed step 7 - let’s move on to step 8 - What is my Internal Energy Level? Here, you’ll meditate on how you’re feeling at different times and in different situations. This will help you gain perspective on where you’re doing great and where you can look to improve.`,
    [DONE_SCREEN]: () => `In step 8 ,you’ll turn your gaze inward and look at your internal energy levels. You’ll meditate on how you’re feeling at different times of the day, in different situations. This will help you gain perspective on where you’re doing great and where you can look to improve.`
  },
  '9': {
    [HOME_SCREEN]: () => `Nice work, you’ve completed step 8. Go ahead and jump into step 9, where you will meditate on who your role models are, and when and how they have influenced you according to the 7 Pillars of Life`,
    [DONE_SCREEN]: () => `In step 9, you will meditate on who your role models are, and when and how they have influenced you according to the 7 Pillars of Life`
  },
  '10': {
    [HOME_SCREEN]: () => `You’re doing great - you’re almost done with phase 1 of the 20/20 Life Vision Challenge. It’s time to complete step 10, where you will look within, meditate on the various parts of your internal world, and determine how they have helped or hindered you in your journey thus far.`,
    [DONE_SCREEN]: () => `You’re almost done with phase 1 of the 20/20 Life Vision Challenge. In step 10, you will look within, meditate on the various parts of your internal world, and determine how they have helped or hindered you in your journey thus far.`
  },
  '11': {
    [HOME_SCREEN]: () => `Congratulations! You’ve completed Phase 1: Meditation. Now, we move on to Phase 2: Assessment. Let’s begin with step 11, where you will assess your goals over the last 5 years.`,
    [DONE_SCREEN]: () => `Congratulations! You’ve completed Phase 1: Meditation. Now, we move on to Phase 2: Assessment. Let’s begin with step 11, where you will assess your goals over the last 5 years.`
  },
  '12': {
    [HOME_SCREEN]: () => `Now you’re ready to start step 12: Major Life Events. Picking up where you left off in step 11, you’ll analyze the MLEs of your past 5 years, and what kind of effects they had.`,
    [DONE_SCREEN]: () => `Step 12 deals with your Major Life Events. Picking up where you left off in step 11, you’ll analyze the MLEs of your past 5 years, and what kind of effects they had.`
  },
  '13': {
    [HOME_SCREEN]: () => `You’re doing great. In Step 13, you will be begin the process of self-assessment for each of the 7 Pillars of Life. This step focuses on career.`,
    [DONE_SCREEN]: () => `Now, you will be begin the 7 step process of self-assessment for each of the 7 Pillars of Life.  Step 13 focuses on career.`
  },
  '14': {
    [HOME_SCREEN]: () => `Self assessment is very important in the 20/20 Life Vision Challenge. We know it’s not easy! You’re doing great. The next assessment is Step 14, which focuses on finances.`,
    [DONE_SCREEN]: () => `Honest self-assessment is fundamental to the 20/20 Life Vision Challenge. We know it’s not easy and you’re doing great. In Step 14, we’ll continue the process with a focus on finance.`
  },
  '15': {
    [HOME_SCREEN]: () => `Work/life balance is a fundamental piece of the Timebug philosophy. Now that you’ve assessed career and finances, the next assessment in Step 15 focuses on personal aims and hobbies.`,
    [DONE_SCREEN]: () => `Work/life balance is a central piece of the Timebug philosophy. Now that you’ve assessed your career and finances, Step 15 will shift the focus to your personal aims and hobbies.`
  },
  '16': {
    [HOME_SCREEN]: () => `Step 16’s assessment focuses on health and well-being. At Timebug, health is a holistic concept, so we’ll ask you to examine it from physical, psychological and spiritual perspectives.`,
    [DONE_SCREEN]: () => `The next assessment in step 16 focuses on health and well-being. At Timebug, health is a holistic concept, so we’ll ask you to assess yourself from physical, psychological and spiritual perspectives.`
  },
  '17': {
    [HOME_SCREEN]: () => `Good job, your health and well-being assessment is complete. Four down, three to go! In Step 18, you will turn your focus to the inter-personal and assess all of the relationships in your life.`,
    [DONE_SCREEN]: () => `In Step 17, you will turn your focus to the inter-personal and assess all the relationships in your life.`
  },
  '18': {
    [HOME_SCREEN]: () => `In Step 18, you’ll move your gaze from within, look around yourself and assess your current environment.`,
    [DONE_SCREEN]: () => `In Step 18, you’ll turn your gaze outward, look around yourself and assess your current environment.`
  },
  '19': {
    [HOME_SCREEN]: () => `In step 19, you'll focus on spirituality and it's role in your life`,
    [DONE_SCREEN]: () => `In step 19, you'll focus on spirituality and it's role in your life`
  },
  '20': {
    [HOME_SCREEN]: () => `In step 20, you’ll look back and reflect on your assessments of the last 5 years. We’ll use that as a spring board to the final phase, Vision Creation.`,
    [DONE_SCREEN]: () => `In step 20, you’ll look back and reflect on your assessments of the last 5 years. `
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
    [HOME_SCREEN]: () => `In step 25, we’ll continue our process of Vision Creation, this time focusing on Aims & Hobbies`,
    [DONE_SCREEN]: () => `In step 25, we’ll continue our process of Vision Creation, this time focusing on your Personal Aims & Hobbies.`
  },
  '26': {
    [HOME_SCREEN]: () => `In step 26, you will focus on Vision Creation regarding Health and Wellness.`,
    [DONE_SCREEN]: () => `In step 26, you will focus on Vision Creation regarding Health and Wellness.`
  },
  '27': {
    [HOME_SCREEN]: () => `It’s time to move onto the next phase of your Vision Creation. In step 27, we’ll focus on relationships.`,
    [DONE_SCREEN]: () => `It’s time to move onto the next phase of your Vision Creation. In step 27, we’ll focus on relationships.`
  },
  '28': {
    [HOME_SCREEN]: () => `In step 28, you’ll continue the process of Vision Creation with a focus on your Environment.`,
    [DONE_SCREEN]: () => `In step 28, you’ll continue the process of Vision Creation with a focus on your Environment.`
  },
  '29': {
    [HOME_SCREEN]: () => `Let's move on to step 29, which will focus on the Vision Creation for Pillar of Life:Spirituality`,
    [DONE_SCREEN]: () => `In step 28, you’ll continue the process of Vision Creation with a focus on your Environment.`
  },
  '30': {
    [HOME_SCREEN]: () => `You’ve arrived at the final step of the 20/20 Life Vision Challenge! The last thing you’ll need to do is map out the next year of your life based on all the work you’ve done thus far. This will be a powerful reference and motivational tool going forward. Good luck and remember - this is not an end, but the beginning of the real work - the fun part!`,
    [DONE_SCREEN]: () => `You’ve arrived at the final step of the 20/20 Life Vision Challenge! The last thing you’ll need to do is map out the next year of your life based on all the work you’ve done thus far. This will be a powerful reference and motivational tool going forward.`
  }
}

export default sequenceMotivationText
