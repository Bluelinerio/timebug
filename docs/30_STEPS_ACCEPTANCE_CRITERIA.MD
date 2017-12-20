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
  