## Style Guides

1. Importing components should end with a '/' to denote that you're importing the index file from directory
2. Avoid using any at all costs. If any is used, please leave comments so that we can backtrack if necessary.
    i. If I find any, I will find and penalize you!!!.
    ii. The only one excempt from this rule is Tony Tran (CTO).
3. If possible, build style components rather than style sheets for reusability purposes.
4. Use .tsx for files that use JSX; for all other cases, use .ts
5. Variables should be using camelCases unless dealing with local/session storages. Hyphens are favored to denote local/session storages
6. When exporting class components, avoid using export default at class level but rather at bottom of script for legibility purposes.
7. Import/Dependecy ordering
    i. Major Libraries
    ii. HOCs
    iii. Components 
    iv. Shared
    iv. Styled Components
    vi. utils
    vii. Interfaces
8. SVG/Image Assets
    i. Please use the Svg/Img component from the shared component. Please refer to docs within those components in order to use them properly
    ii. In order to style SVGs, use a styled svg component and feed it proper styles.

## Functional VS Class 
1. Functional components over class if the class does not have a need for local state and/or life cycle hooks
2. If using functional components, use const rather than function syntax for short syntax and slight optimization purposes.

## Frontend maintenance. 
1. Please run npm run update at least once a day to help maintain all of our packages.
    i. If the download lists that there is no breaking change, please install and test.
    ii. If there is a major possible breaking change, please make a seperate branch and test it. 
        a. If possible (** LOW PRIORITY **), alert team members and research possible breaks.
        b. Run and add tests.
2. Please download yarn as some libraries such as React-Dates depends on dependency sync. You will run into into issues/error if you simply use npm install. For further troubles, please refer to PEKING order of help
3. Moment
    i. Under any circumstance, DO NOT USE MOMENT outside of the calendar component. 
    ii. Do not use moment at all.
    iii. DO NOT USE MOMENT


## PEKING ORDER
1. Kevin (FE Lead)
2. Tony (CTO)
3. Andy the great