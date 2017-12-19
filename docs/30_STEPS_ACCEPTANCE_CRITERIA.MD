#2020 30 Steps Acceptance Criteria

This is a guide/acceptance criteria for developing each of the 30 Steps included in this application. It can be used as a check list when developing data entry components and/or forms.
See docs/COMPONENT_UX_GUIDE.MD for further reference/details on individual __components__

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




 

  