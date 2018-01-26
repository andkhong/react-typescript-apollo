## Style Guides

1. Importing components should end with a '/' to denote that you're importing the index file from directory
2. Avoid using any at all costs. If any is used, please leave comments so that we can backtrack if necessary.
3. If importing assets, use require instead of import syntax.
4. If possible, build style components rather than style sheets for reusability purposes.
5. Use .tsx for files that use JSX; for all other cases, use .ts

## Functional VS Class 
1. Functional components over class if the class does not have a need for local state and/or life cycle hooks
2. If using functional components, use const rather than function syntax for better syntax.

## Frontend maintenance. 
1. Please download npm-check as a global cli and run it at least once a day to help maintain all of our packages.
    i. If the download lists that there is no breaking change, please install and test.
    ii. If there is a major possible breaking change, please make a seperate branch and test it. 
        a. If possible (** LOW PRIORITY **), alert team members and research possible breaks.
        b. Run and add tests.
2. Please download yarn as some libraries such as React-Dates depends on dependency sync. You will run into into issues/error if you simply use npm install. For further troubles, contact your FE lead.

