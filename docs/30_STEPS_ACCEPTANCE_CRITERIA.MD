#2020 30 Steps Acceptance Criteria

This is a guide/acceptance criteria for developing each of the 30 Steps included in this application. It can be used as a check list when developing data entry components and/or forms.
See docs/COMPONENT_UX_GUIDE.MD for further reference/details on individual __components__

#General UX Rules
* All fields required unless otherwise noted

## Step 4
  * 1) List 3-15 potential Board members who can positively impact different areas of your life.
    * Each Board Member is a __list entry__ of __group entries__. Group struct consists of a Board Member(__short text__), Life Category(__dropdown__ of enums _LifeCategory_), and Interaction Frequency (__dropdown__ of enums _InteractionFrequency_).
    * Min items 3, Max items 15. 
    * All fields in group entry required.
    * List items should contain data in a pop-up, otherwise collapse to a title(clickable to trigger pop up with all data for list item).
 
  * 2) Make a list (up to 10) of any current or potential support groups and meetups, formal or informal,  that are a source of positive energy for you, in one or more domains of life.
    * Each Support Group is a __list entry__ of __group entries__. Group struct consists of a Support Group(__short text__) and Life Category(__dropdown__ of enums _LifeCategory_).
    * Min items 1, Max items 10. 
    * All fields in group entry required.
    * List items should contain data in a pop-up, otherwise collapse to a title(clickable to trigger pop up with all data for list item).

## Step 5
  * 1) Make a list of 10 recent goals and classify them according to the 7 Goal Types.
    * Each Goal is a __list entry__ of __group entries__. Group struct consists of a Goal(__short text__) and Goal Type(__dropdown__ of enums _goalTypes_).
    * Required Items:10
    * All fields in group entry required.
    * After entry, list items should display on screen as GOAL with goal type Nested(slight smaller text, below).

## Step 6
  * 1) Choose 3-5 people who you really care about and write down 3-5 of their goals. Determine how you can support them and how much time you estimate it will require.
    * __list entry__ of Significant Others(__short text__). Each Significant other contains a __sub list__ of __group entries__ consisting of Goal(__short text__), Support Plan(__long text__) and Time Required(__short text__).
    * Significant others: min items:3 , max items:5
    * All fields in sub list required.
    * Significant Other should contain data in a pop-up, otherwise collapse to a title(clickable to trigger pop up with all data for list item).

## Step 7
  * 1) Using the same Day 5 goals, make a list of 10-15 goals and classify them according to the 7 Outcomes.
    * Each Goal is a __list entry__ of __group entries__. Group struct consists of a Goal(__short text__) and Common Goal Outcomes(__dropdown__ of enums _CommonGoalOutcomes_).
    * Min items:10, Max items:15
    * All fields in group entry required.
    * After entry, list items should display on screen as GOAL with goal outcome nested (slighty smaller text, below).
  * 2) Write down a few observations about any patterns that emerge, and what you believe is behind them.
    * Observations is a __long text__.
    * Field is required.

## Step 8
  * 1) On a 1-10 scale, write down your Physical, Mental and Emotional energy levels during different times ofthe day (Morning, Afternoon, Evening) on a typical day.

...WIP

## Step 15
* 1) Gather all of your previous goal data, including time spent, and key achievements ove rthe past 5 years. You can start with 2015 if you feel overwhelmed assesing all 5 years.
  * 10 entry __list entry__ of __group entries__. Group struct consists of:
    * Personal Aim/Hobby(__short text__) AUTO
    * Est. time spent each month(__short text__) AUTO
    * How has time increased/decreased since 2011?(__short text__) AUTO
    * What have you achieved in this area since 2011?(__long text__)
    * How do engaging in these activities make you feel?(__long text__)
    * Do you do this activity alone/with another? If so, who?(__dropdown__)
  * 10 items required
  * Each list entry should be a collapsible element, revealing group entry when expanded.
* 2A) Which of these hobbies, if any, would you be willing to give up if some huge new priority came along, and required more of your time?
  * Can be __short text__ OR dynamically populated __dropdown__ from list entries in step 1. 
* 2B)Which would you NOT give up under (almost)any circumstance?'
  * Can be __short text__ OR dynamically populated __dropdown__ from list entries in step 1.
* 3) What Personal Aims and Hobbies were you not able to get going over the past 5 years, that you really wanted to do? (List up to 5)
  * __List entry__ of __group entries__. Group struct consists of:
    * Personal Aim/Hobby(__short text__)
    * Why?(__long text__)
    * Max items:5
    * Each list entry should be a collapsible element, revealing group entry when expanded.

## Step 16
* 1)Take time to evaluate your general health status
  * __Group entry__, struct consits of:
    * How much of a priority has health been for you?(__dropdown__ of enums _PriorityLevels_)
    * How do you feel now,physical health wise ?(1-10 scale , __number__)
    * Do you think you are a healthy person? (1-10 scale , __number__)

* 2)Take time to evaluate your Fitness and Exercise behavior
  * __Group entry__, struct consits of:
    * Do you excersise? If not, why?(__long text__)
    * How often do you exercise? (__dropdown__ of enums _ExerciseFrequency_)
    * What type of exercise do you do? (__dropdown__ of enums _ExerciseTypes_)
    * What were your top 3 fitness goals in 2011-2015 and how did you do with them?(__list entry__ of __group entries__). Group entry struct:
      * Goal(__short text__)
      * Goal Outcome(__dropdown__ of enums _CommonGoalOutcomes_)
  * "Top fitness goals" has 3 required __list entries__ by default.
  * Each list entry should be collapsible.
* 3)Take time to evaluate your general health status
  * __Group entry__, struct consists of:   
    * What is your typical diet?(__long text__),
    * How healthy is your diet?(1-10 scale, __number__),
    * How often do you eat? (__dropdown__ of enums _EatingFrequency_)
    * Do you make your own meals?(__yes/no__) 
    * Do you eat organic?(__yes/no__)
    * Do you take supplements?(Vitamins,protein shakes, etc)(__yes/no__)
    * How often do you over indulge with emotional eating(eating too much or eating junk food excessively)?(__dropdown__ of enums _EmotionalEating_)
* 4)Take time to evaluate your Sleep pattern
  * __Group entry__, struct consists of:
      * How many hours do you typically sleep?(__dropdown__ of enums _HoursSleep_)
      * Is that enough? If not, how many hours do you really need?(__short text__)
      * What is the quality of your sleep?(1-10 scale, __number__)
      * Do you have sleep issues? If so, why?(__long text__)
      * What time do you generally go to bed?(__dropdown__ of enums _BedTimes_)
      * Do you take coffee or take anything to stay awake or energized daily?(__short text__)
* 5) Take time to evaluate your Body Care
  * __Group entry__, struct consists of:
    * What do you do to physically take care of yourself? How often per month?(__long text__)
    * Where in your body do you carry stress of tension? (__dropdown__ of enums _CarryStress_)
    * Do you have any notable health issues? (__long text__)
    * How prominent are they in your life?(1-10 scale, __Number__)
    * How often do you get sick?(Number of days per year on average from 2011-2015)(__Number__)
    * Do you drink coffee or take anything to stay awake or energized daily?(__dropdown__ of enums _TakeEnergizer_)
* 6)Take time to evaluate your Mental & Emotional Health
  * __Group Entry__, struct consists of:
    * What is the range of your stress levels throughout a typical week?(1-10 scae, 1 number for low-end and another for high-end).(__Group entry__), struct:
      * Low-End(1-10 Scale, __Number__)
      * High End(1-10 scale, __Number__)
    * How do you deal with stress? (__long text__)
    * Are you able to express your emotions in a healthy way? How do you communicate your feelings? (__Long Text__)
    * Are you aware of how stressful situations impact your health and life? Give 3 examples.(__Group entry__), struct:
      * Example 1(__long text__)
      * Example 2(__long text__)
      * Example 3(__long text__)
    * Example 1, 2 and 3 should be collapsible.

## Step 17
  * 1)Take time to evaluate your relationship with yourself.
    * How do you typically treat yourself? (__Number__, 1-10 scale)
    * How do you treat yourself in the process of having a learning curve, which inevitably involves making mistakes and learning from failures.(Using a 10-pt Scale with 1=little patience to 10=very patient and nurturing). (__Number__, 1-10 scale).
    * What message run in your head about yourself on a daily basis? (__long text__)
    * What are some of the typical main messages that you have used to judge or shame yourself? (__long text__)
    * Name 5 specific people whom you truly value. (__list entry__).
      * 5 required people valued(__short text__)
    * How many of these people do you love based on their weight or waist size? (__Number__)
    * How many of these people do you treat with the same contempt and impatience that you have described about yourself? (__Number__)
  * 2)Take time to evaluate your relationship to others.
    * __Group entry__, struct:
      * How comfortable do you feel giving to others in your daily life?(Using a 10-pt scale with 1=not at all comfortable and 10=very much comfortable). (__Number__, 1-10 scale)
      * Do you trust the value of what you have to offer or do you tend to second guess your choices? (Using a 10 pt scale with 1=no true value and 10=trusting and valueing what you give fully). (__Number__, 1-10 scale)
      * How comfortable do you feel receiving from others in your daily life? (Using a 10-pt scale with 1=not at all comfortable and 10=very much comfortable). (__Number__, 1-10 scale)
      * Do you feel worthy and comfortable, even with compliments or acknowledgments that come your way? Or do you deflect and belittle the moment in some way? (Using a 10-pt Scale with 1=fully valuing and  appreciating what has been shared to 10=deep discomfort with the whole thing) (__Number__, 1-10 scale)
      * What goals have you had in terms of Relationship Quality (RQ) over the past five years? (__list entry__ of __group entries__), struct:
        * Goal(__short text__)
        * Goal Outcome (__dropdown__ of enums _CommonGoalOutcomes_)
      * Have you had an intimate, committed relationship over the past 5 years?(__yes/no__)
      * If yes, how would you evaluate the quality of the connection and communication, on the whole? (Using a 10-pt Scale with 1= a major struggle to 10= the ultimate connection)(__Number__, 1-10 scale)
      * Name 2-3 people whose relationships to you improved over the past 5 years.(__list entry__ of __group entries__). Struct:
        * Person (__short text__)
        * How did it improve? (__long text__)
      * Think of some moments in your history when you have offered gifts (whether material things or time and energy invested) that you were most excited to give. (__long text__)
      * Now remember how it made YOU feel to be able to touch someone's life in a meaningful way. It most likely opened your heart and created very pleasureable feelings, adding to a sense of having value to add to someone's life. (__long text__
      * Next time you face the opportunity of receiving, whether it is a physical gift, a compliment or an investment of time and energy into your life... remember that the other person has the opportunity to experience the same pleasure and trust that they have something of value to offer. (__long text__)

## Step 18
  1) What changes have taken place in your PE since 2011?(i.e. you moved, downsized your home, moved in with a new roommate, bought more plants for the house, etc). (__Long Text__)
  2) Who do you live with right now, and how does that effect your lifestyle and motivation?. (__Long Text__)
  3) Are you truly happy where you are or do you stay there because you are afraid of change (or because this is all you’ve ever known)? (__Long Text__)
  4) Do you authentically connect to the culture in your town or city? (__Yes/No__)
  5) Do you feel like you’re surrounded by like minded people or that you can get your social needs met in this environment (depending on which ones are priority) in terms of (friends, family, dating life, night life, hobbies, nature, music/art scene, affordability, etc)? (__Yes/No__)
  6) Do the climate elements(i.e. humid, dry, rainy, etc) suit you here, physically and mentally)? (__Yes/No__)
  7) What goals did you have for PE since 2011?(List up to 5.)
   * (__List Entry__) of (__Group Entries__), struct:
    * Goal(__short text__)
    * To what degree did you meet the goal on a scale of 1-10(__Number__, 1-10 scale)
    * Why?(__long text__)
   * List items should be collapsible

## Step 19
  1) Take the time to evaluate your spiritual views
  * What are your current views and feelings about Spirituality? What does it mean to you? (__Long text__)
  * Who and what influenced your Spiritual views early on in life? (__Long text__)
  * Who are your current role models or mentors in this area? Why do you admire their approach to and views on life? (__Long text__)
  2) Take time to evaluate your spiritual practices
  * How much time do you spend specifically, each week, on Spiritual practices, Interactions, reading, writing, etc.?(__Long text__)
  * How have your Spiritual practices and/or beliefs changed in the past 5 years?(__Long text__)
  3) Take time to evaluate your Spiritual Insights & Growth
  * What internal qualities(Iqs: Goal Type 4) have been influenced - positively or negatively - by Spiritual practices - or lack thereof?
  * List 5-10 insights that you have gained, in relation to the 5 components of Spirituality noted above, over the past 5 years? (__List entry__ of __group entries__)
    * What Is My Purpose On Earth? (__long text__)
    * Beyond My Outer Form, What Am I? (__long text__)
    * My Karma Has Shown Me... (__long text__)
    * I have healed emotional wounds from...(__long text__)
     
## Step 20
  1)Reflect back on your Day 11 Worksheet (The 5-Year Life Report), and make refinements or additional notes, given what you have seen here. Be more technical than before, especially when it comes to how you spent your Time & Energy.
  * Review your goals, time spent, and key achievements listed on Day 11. What, if anything, has changed with your time and energy allotment?(__list entry__ of __group entries__). Struct:
    * New insights(be as technical as you can)(__long text__)
    * Specific changes to make to previous wk(__long text__)
  2)Reflect back on your Day 2 Worksheet (More or Less Time), and make refinements or additional notes, in relation to how your time allocation has changed over the past 5 years; and how you ideally would like to make changes in the current breakdown across Life Categories.
  * Reflect back on your Day 2 Worksheet (More or Less Time), and make refinements or additional notes, in relation to how your time allocation has changed over the past 5 years; and how you ideally would like to make changes in the current breakdown across Life Categories.
    * a)Has anything changed with your life category breakdown?(__long text__)
    * b)Has anything changed with your 3 things that you want to DO LESS of in general(i.e. "Watching TV")?(__long text__)
    * c)Has anything changed with your 3 things that you want to DO MORE of in general(i.e. "Exercising")?(__long text__)
  3) Reflect back on your 7 Assessments [Days 13-19]
  * Rank the 7 Areas in terms of the order of importance you gave them over the past 5 years.
    * 7 __dropdowns__ of enums _AssesmentTypes_, labeled rank 1,rank 2.....rank 7
      * __dropdown__ must hold state, once an option is selected, it should not be available for selection in other fields
  4) If the 7 areas were a pie, how would you slice up your energy and motivation level?(Total should = 100%)
   * 7 __number__ inputs labeled: Career, Personality & Hobbies, Health, Relationship, Financial, Place & Environment, Spirituality
    * All inputs combined must have a max value of 100.
    * A floating bank should appear, or a meter, displaying how much 'percentage' user has left.
    * Error msg to appear if user inputs over 100% 'Please remove x percent'
    * Pie graph to dynamically generate based on input?
  5) Give yourself a final evaluation for each of the past 5-years, as well as an overall 5-Year Score(1-10 score per year, for a total maximum high score of 50/50, per each of the 7 Areas that were assessed).
  * __group entry__, struct(repeates for every year through 2015):
    * Career 2011(__Number__)  
    * Personality and Hobbies 2011(__Number__)  
    * Health 2011 (__Number__)  
    * Relationships 2011 (__Number__)  
    * Financial 2011(__Number__)  
    * Place and Environment 2011(__Number__)  
    * Spirituality 2011(__Number__)
  * each year/sub-sctruct should be a collapsible element.
  * min value = 1, max value= 10 for each input.
  * At the bottom of the page, there should be inputs that dynamically calculate total school for each category over all 5 years.
  6) Have one other person(per Area) - be it a family member or friend, and preferably one of your CEO of Me Board Members - give you a Score for the past 5 years(on a 1-10 scale), and then multiply that number by 5, to arrive at your 3rd Party Rating(this number will be between 5-50; and you should have one for each of the 7 Assessment Areas).
  * __group entry__, struct(repeates for every year through 2015):
    * Career 2011(__Number__)  
    * Personality and Hobbies 2011(__Number__)  
    * Health 2011 (__Number__)  
    * Relationships 2011 (__Number__)  
    * Financial 2011(__Number__)  
    * Place and Environment 2011(__Number__)  
    * Spirituality 2011(__Number__)
  * each year/sub-sctruct should be a collapsible element.
  * min value = 1, max value= 10 for each input.
  * At the bottom of the page, there should be inputs that dynamically calculate total school for each category over all 5 years.

## Step 21
1)Imagine different areas of your garden, as in the Life Categories which you have created back on Day 2. Who planted most of the seeds in your garden over the course of your life?
* __List entry__ of __group entries__, struct:
  * Area Of Garden(__dropdown__ of enums _LifeCategory_)
  * Self Influence (__Number__, max value 100(%))
  * Other Influence ( __Number__, max value 100(%))          
  * Name of Other (__Short text__)
* min entries: 9(one for each _LifeCategory_)
* Each life category should be a collapsible element
* Self influence + Other influence must = 100%
* Area Of Garden __dropdown__ must dynamically repopulate select options - any category selected should not be available again unless unselected.
2) Are you committed to taking full ownership of your life garden going forward?
* __Yes/No__
3) Reflecting on the 7 Self-Assessments from days 13-19, list two BHAGs for 2020
* __group entry__, struct:
   * Career Shortcoming: __long text__ 
   * Career BHAG: __long text__
   -- repeats for all 7 Categories - Career, Personality and Hobbies, Health, Relationships, Financial, Place and Environment, Spirituality
* All categories should be collapisble elements.
4) Think about how strong your current tools(skills,approach,etc) are for tending to your garden - Strengths & Weaknesses from Day 3 is a useful review.
* __List entry__ of __group entries__, struct:
  * Skill(__dropdown__ of enums _CharachterStrength_)
  * Proficiency Level(Using a 10pt Scale with 1=beginner to 10=master)(__number__, min_value:1, max_value:10)
  * Aspiration Level(__number__, min_value:1, max_value:10)
  * What improvements needs to happen for you to reach your aspirational 2020 level?(__long text__)
* Each __List entry__ should be a collapisble element labeled by Skill
* Skill __dropdown__ must dynamically repopulate options, any category selected should not be available again unless unselected.
4) Think about how strong your current tools(skills,approach,etc) are for tending to your garden - Strengths & Weaknesses from Day 3 is a useful review.
* __List entry__ of __group entries__, struct:
  * Skill(__dropdown__ of enums _CharachterStrength_)
  * Proficiency Level(Using a 10pt Scale with 1=beginner to 10=master)(__number__, min_value:1, max_value:10)
  * Aspiration Level(__number__, min_value:1, max_value:10)
  * What improvements needs to happen for you to reach your aspirational 2020 level?(__long text__)
* Each __List entry__ should be a collapisble element labeled by Skill
* Skill __dropdown__ must dynamically repopulate options, any category selected should not be available again unless unselected.

## Step 22
1) Did you do your MANTRA today(assigned on Day 21)?
* __Yes/No__
2) Did you EXERCISE and meditate yet today(assigned on Day 8)?
* __Yes/No__
3) Did you MEDITATE yet today(assigned on Day 8)?
* __Yes/No__
4) What do you dream about?
* Describe the general themes, quality and lucidity of your dreams(__long text__)
* How often do you remember your dreams?(__dropdown__ of enums _DreamsRemember_)
* Have your dreams ever come true (i.e., you dreamt about something and then it happened(__yes/no__)
5) For the remainder of the program (8 Nights of Dreaming), try to remember and write your dreams down first thing in the morning – or even if you wake up in the middle of the night, the way Jason described his experience in the video. ( __List entry__ of __long texts__)
* Required entries:8
6) What are your life dreams? This doesn’t have to be restricted to what your literal dreams (during sleep) are. Right now, go beyond 2020 and even your 20/20 BHAGs (from Day 21’s Assignment)... and allow yourself to dream, in this moment, about everything you want your life to be. Anything is possible. Describe what you see.(__long text__)

## Step 23
1) Did you do your MANTRA today(assigned on Day 21)?(__Yes/No__)
2) Did you EXERCISE and meditate yet today(assigned on Day 8)?(__Yes/No__)
3) Did you MEDITATE yet today(assigned on Day 8)?(__Yes/No__)
4) If you could change jobs, and do something totally new, what would it be?(__Long text__)
5) Reflecting back on Day 13’s Assignment – particularly the questions on Fulfillment – what changes would you need to make in your career to get both answers (on Fulfillment and Motivation) to 10 on the scale?(__Long text__)
6) Back on Day 21, you were asked to list 2 BHAGs (Big Hairy Audacious Goals) for Career and 6 other areas of life. Focusing on Career only now, take that a step further, by adding 3-5 more Career BHAGs (so you should now have 5-7 Career BHAGs).(__List entry__ of __long text__)
* Min items:3, Max:
7)Also on Day 21, Question 3 asked about specific skills that you are looking to build over the next 5 years. Go deeper into that now, with a career focus, making sure you have 3-5 career specific skills that you plan to develop. #Skillbug
* __List entry__ of __group entries__, struct:
  * Skill(__Short text__)
  * What will you do in 2017 to develop this skill? (__Long text__)
  * How much time per week will you dedicate to this? (__Long text__)
8) The average worker spends 40 hrs * 50 weeks working = 2,000 hours. How many hours will you spend working in 2016? #Workbug(__Number__)

## Step 24
1) Did you do your MANTRA today(assigned on Day 21)?(__Yes/No__)
2) Did you EXERCISE and meditate yet today(assigned on Day 8)?(__Yes/No__)
3) Did you MEDITATE yet today(assigned on Day 8)?(__Yes/No__)
4) The year is 2020. How much money does you bank have in it? Take a picture or screenshot of your current bank account balance, print it out, and edit the date and cash balance, writing in 12/31/2020 and your desired number.(__Number__)
5) Write a short story about what it will take for you to achieve your Money BHAG? (__Long text__)
6) Who is your “finance team” that has helped you to not only attain but also manage your financial success?
* __List entry__ of __short text__
7) What do you plan to do with any excess money that you come into by 2020?(__Long text__)
8) Describe how your life will be different in 2020, as a result of the achievement of your Money BHAG.(__Long text__)
9) How much more or less will you work as a result? (__Long text__)
10) How many days a year will you be off or on vacation? (__Short text__)
11) What additional material things will you have or have access to that you now don’t? (__Long text__)
12) How will you feel, that is different than what you feel now? (__Long text__)
13) Think about one other person in your life, who you want to see succeed with and change their relationship to money. Who is it?(__Short text__)
14) How do you want to see them change their financial fortunes by 2020?(__Long text__)
15) How can you help them achieve this goal?(__Long text__)
16) List one wish that you have for the world or a particular sector of the world when it comes to money. (__Long text__)
17) What group of people or country can be most influential in helping this goal be attained?(__long text__)

## Step 25
1) Did you do your MANTRA today(assigned on Day 21)?(__Yes/No__)
2) Did you EXERCISE and meditate yet today(assigned on Day 8)?(__Yes/No__)
3) Did you MEDITATE yet today(assigned on Day 8)?(__Yes/No__)
4) The Year is 2020. Reflect on Day 15's assignment (Q3), and the Personal Aims that you were not able to achieve.
* __Group entry__, struct:
  * Were those Aims on your 2020 Bucket List?(__long text__)
  * Why were you able to attain those goals and make time for those hobbies?(__long text__)
* User should be able easily able to access dashboard, or some other way to access step 15 information, without leaving the screen or with links easily connecting the information.
5) List any other new goals for your 2020 List
* __List entry__ of goals(__short text__).
6) Prioritize the items of the list using 1= the most important, 2= second most important etc.
* __Group entry__, struct:  
  * Bucket List Priority(__short text__)
  * Importance Level(1-10 scale , __number__)
  * Time Spent(__short text__)
7) Looking back from 2020 to 2016, which areas in your personal time have you cut down on or out completely? (__Long text__)
8) Think about one other person in your life, who you want to see enjoy more time for themselves, doing the things that you know would make them happy. Who is it? (__short text__)
9) How do you want to see them attain those personal goals, making it happen by 2020?(__Long text__)
10) How can you help him/her achieve his/her personal goals?(__Long text__)
11) List one wish that you have for the world or a particular sector of the world when it comes to personal aims and hobbies.(__Long text__)
12) What advice would you give people who are on board with your wish- how can we all work together towards this aim in our personal lives?(__Long text__)
13) How can you help, be it in any small way, to see this goal be achieved? (__Long Text__)

## Step 26
1) Did you do your MANTRA today(assigned on Day 21)?(__Yes/No__)
2) Did you EXERCISE and meditate yet today(assigned on Day 8)?(__Yes/No__)
3) Did you MEDITATE yet today(assigned on Day 8)?(__Yes/No__)
4) The year is 2020. You have achieved all of your health goals and feel on top of the world, physically, mentally and emotionally. Describe what changes you made in your life to reach this state.  What changes and achievements did you make across the following areas:
* __Group entry__, struct:
  * Prioritizing your Health Goals vs. other Areas(__Long text__)
  * Fitness & Exercise(__Long text__)
  * Nutrition & Diet(__Long text__)
  * Sleep(__Long text__)
  * Body Care(__Long text__)
  * Mental & Emotional Health(__Long text__)
* All __long text__ elements should live inside collapsible accordion component.
5) Think about one other person in your life, who you want to see make drastic improvements in their physical health.
* __Group Entry__, struct:
  * Who is it?(__Short text__)
  * How should they change by 2020?(__Long text__)
  * How can you help?(__Long text__)
6) List one wish that you have for the world or a particular sector of the world when it comes to Health.(__Long text__)
7) What group of people or country can be most influential in helping this goal be attained?(__Short text__)
8) How can you help, be it in any small way, to see this goal be achieved?(__Long text__)

## Step 27
1)The first way I want to encourage a healthier flow of giving and receiving is to take deep, proactive breaths. As you breathe IN, you receive. As you breathe OUT, you assert or give back to life. So take a deep breath in the nose, filling up the lower belly. Then breathe fully out of the mouth with an open, dropped jaw. Do this fully in both directions. This will show your nervous system how safe you are do engage in the act of giving and receiving. This is the foundational work. Did you do this?(__Yes/No__)
2)Now ask yourself what you discovered in the first inventory about how you have typically treated yourself in the last five years?
* __Group Entry__, struct:
  * Inventory Summary(__Long text__)
  * Is that reality where you want to find yourself in 2020?(__Yes/No__)
  * If no, list out a few of those replacement self-thoughts that you intend to actualize going forward(__Long text__)
  * Describe your relationship to self in 2020. (__Long text__)
3)Replacing your habitual negative thinking (internal messages) with purposely looking for things to acknowledge about yourself. This can be simply, small things. So scan your life and get in a daily practice of acknowledging yourself. Find things that encourage a consistent, positive, and self-affirming view of yourself.
* __Group Entry__, struct:
  * I am proud of myself for _________ that I took(at some point)(__Short Text__)
  * I feel great that I chose ________ or that I treated someone well or _________ (__Short text__)
  * I want to acknowledge my gift/talent/ability _________ (__Short text__)
* These should all be "Fill in the blank components", to be researched/discussed/developed
4) Write a few down several days in a row. Repeat that for several weeks, until it becomes a more natural part of your life. This is GIVING to self... and letting yourself feel the impact of those positive, honest messages will enhance how you receive.
* __Group Entry__, struct:
  * Day 1(__Long text__)
  * Day 2(__Long text__)
  * Day 3(__Long text__)
5) Final piece of your relationship to self. Get used to stopping several times a day to ask yourself: “What are 3 feelings that I am feeling right now in this moment?” To get a list of feelings with some wonderful clues, visit http://www.ronbaker.net/feelings/'
* __Group Entry__, struct:
  * Feeling 1(__Short text__)
  * Feeling 2(__Short text__)
  * Feeling 3(__Short text__)
* Need clickable links in t-comb labels
6) What did you discover from your first inventory about giving and receiving with others from the last 5 years?
* __Group Entry__, struct:
  * Write down your thoughts from your first inventory about giving and receiving with others(__Long text__)
  * Is that where you would like to find yourself in 2020?(__Yes/No__)
  * If not, then are you willing to interrupt old choices that no longer serve you AND replace them with healthier alternatives?(__Yes/No__)
7) PREPARE for moments to come with your various relationships, by making yourself aware of some of the things you value and appreciate about others. Remember, when you have a moment of connection with each of those people, be willing to share out loud ONE thing that you appreciate about them.
* __List Entry__ of __group entries__, struct:
  * Name 3 different people you value(__Group entry__ of 3 __short text__ elements)
  * Name 3 specific things you appreciate and value about each one(__Group entry__ of 3 __short text__ elements)
  * Describe the state of your relationships in 2020
* All list entries should live inside of collapsible elements.
8) What have you done by 2020 to heal and repair the relationships that you noted have regressed in the Day 17 Assignment? (__Long text__)
9) In order to create a balance of what you give, what specific needs are you aware of that you have in your life (physical, emotional or mental needs)? List them here, at least 3 for each category (physical, mental, emotional). As you learn to identify those needs, it becomes safe to then communicate them one at a time to others.
* __Group entry__, struct:
  * Physical Needs(__List entry__ of __short texts__)
  * Mental Needs(__List entry__ of __short texts__)
  * Emotional Needs(__List entry__ of __short texts__)
* All list entries should be collapsible elements
* Min items 3 for all __list entries__
10) Start with naming ONE need. Are you willing to communicate this need to another person, allowing yourself to receive the support? Start with simple things, to build up confidence. (i.e. I need help with moving some furniture around in my living room. I need a shoulder rub. I need someone to listen while I vent about something that just happened.) Once YOU identify the need, then you can look to your support structure to begin to practice mutual giving and receiving.
*__group entry__, struct:
  * Name of need(__short text__)
  * Willing to communicate this to another person?(__Yes/no__)
11)Meditate on and come up with one 20/20 Relationship Vision for the world. This could revolve around how people all over the world treat each other, or deal with groups of people (i.e. families, specific societies/cities, countries), internally or externally (i.e. foreign relations).(__Long text__)
12)If you simply ask yourself, would I be willing to offer the same thing to this friend/loved one in a similar way to how I am asking them to help support me?(__Yes/no__)

##Step 28
1) Did you do your MANTRA today(assigned on Day 21)?(__Yes/No__)
2) Did you EXERCISE and meditate yet today(assigned on Day 8)?(__Yes/No__)
3) Did you MEDITATE yet today(assigned on Day 8)?(__Yes/No__)
4) What major P&E goals [BHAGs] do you envision or yourself by 2020?
* __List entry__ of goals(__short text__)
5) Your Bucket List can include simple goals as well – not everything has to be a monumental BHAG List out up to 10 items for your 2020 PE Bucket List
* __List entry__ of __group entries__, struct:
  * Bucket PE BHAGs(__short text__)
  * Prioritize your BHAG with 1= most important, 2= second most important (__number__)
  * Estimate how much time per year (2016-2020) you plan to spend on avg working toward this BHAG(__short text__)
* All list entries should be collapsible elements
6) Think about one other person in your life, who you want to see enjoy a major transformation in their PE surroundings.
* __Group entry__, struct:
  * Who?(__Short text__)
  * How do you want to see them attain those PE goals, making it happen by 2020?(__Long text__)
  * How can you help them achieve their PE goals?(__Long text__)
7) What have you done by 2020 to heal and repair the relationships that you noted have regressed in the Day 17 Assignment?(__Long text__)
8) List one wish that you have for the world or a particular sector of the world when it comes to personal aims and hobbies.(__Long text__)
9) What advice would you give people who are on board with your wish – how can we all work together towards this aim in our personal lives?(__Long text__)
10)How can you help, be it in any small way, to see this goal be achieved?(__Long text__)






 





  















































      