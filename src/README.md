## Style Guides

1. Importing components should end with a '/' to denote that you're importing the index file from directory
2. Avoid using any at all costs. If any is used, please leave comments so that we can backtrack if necessary.
3. If importing images, use require instead of import syntax.
    i. If importing SVGs, use the HOC/Rsvg with the svg asset path.
4. If possible, build style components rather than style sheets for reusability purposes.
5. Use .tsx for files that use JSX; for all other cases, use .ts
6. Variables should be using camelCases unless dealing with local/session storages. Hyphens are favored to denote local/session storages
7. When exporting class components, avoid using export default at class level but rather at bottom of script for legibility purposes.
8. Import ordering
    i. Major Libraries
    ii. HOCs
    iii. Styled Components
    iv. Assets
    v. Components / Shared
    vi. utils
    vii. Interfaces

## Functional VS Class 
1. Functional components over class if the class does not have a need for local state and/or life cycle hooks
2. If using functional components, use const rather than function syntax for short syntax and slight optimization purposes.

## Frontend maintenance. 
1. Please run npm run update at least once a day to help maintain all of our packages.
    i. If the download lists that there is no breaking change, please install and test.
    ii. If there is a major possible breaking change, please make a seperate branch and test it. 
        a. If possible (** LOW PRIORITY **), alert team members and research possible breaks.
        b. Run and add tests.
2. Please download yarn as some libraries such as React-Dates depends on dependency sync. You will run into into issues/error if you simply use npm install. For further troubles, please contact your FE lead (Kevin). If (Kevin) is unavailable, contact Andy.
