#2020 30 Steps Acceptance Criteria

This is a guide/acceptance criteria for developing each of the 30 Steps included in this application.
See docs/COMPONENT_UX_GUIDE.MD for further reference/details on individual __components__

## Step 4
  * 1) List 3-15 potential Board members who can positively impact different areas of your life.
    * Each Board Member is a __list entry__ of __group entries__. Group struct consists of a Board Member(__short text__), Life Category(__dropdown__ of enums _lifeCategory_), and Interaction Frequency (__dropdown__ of enums _interactionFrequency_).
    * Min items 3, Max items 15. 
    * All fields in group entry required.
    * List items should contain data in a pop-up, otherwise collapse to a title(clickable to trigger pop up with all data for list item). This is to limit vertical content for better UX. 
  * 2) Make a list (up to 10) of any current or potential support groups and meetups, formal or informal,  that are a source of positive energy for you, in one or more domains of life.
    * Each Support Group is a __list entry__ of __group entries__. Group struct consists of a Support Group(__short text__) and Life Category(__dropdown__ of enums _lifeCategory_).
    * Min items 1, Max items 10. 
    * All fields in group entry required.
    * List items should contain data in a pop-up, otherwise collapse to a title(clickable to trigger pop up with all data for list item). This is to limit vertical content for better UX. 

## Step 5
  * 1) Make a list of 10 recent goals and classify them according to the 7 Goal Types.
    * Each Goal is a __list entry__ of __group entries__. Group struct consists of a Goal(__short text__) and Goal Type(__dropdown__ of enums _goalTypes_).
    * Required Items:10
    * All fields in group entry required.
    * After entry, list items should display on screen as GOAL with goal type Nested(slight smaller text, below).

 

  