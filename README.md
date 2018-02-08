A GART Project
1. GraphQL
2. Apollo Client 2.0
3. React
4. Typescript

## How To:
1. yarn install (please use yarn since a few libraries have version problems)
2. npm run dev (Develop)
    i. If you run into caching problems, change the port in the build/configs.js
3. npm run build (Deploy & test prod build)

## Core Technologies
1. Typescript
2. React + ReactDOM
3. React Router v4
4. GraphQL + Apollo Client 2.0
    i. Incredibaly powerful data fetching api
    ii. Caching layer to optimize api requests
    iii. State management tools that scales very well and is highly maintainable
5. Styled-Components
    i. Modular Resusable Code
    ii. Can potentially build a monolithic React App without outputing a single CSS file
    iii. Easy transition to Server-Side Rendering
        a. Highly optimized for SSR
6. Webpack v3 + Babel
    i. Dynamic Imports = Code-Splitting/Lazy-Loading/Incremental-builds
    ii. Optimized Development builds for increased productivity
    iii. Optimized Production builds for increased performance on all devices

## Feature Roadmap
1. Authentication Flow
    i. Login
    ii. Registration
    iii. Forgot Password
2. Booking
    i. Schdule
    ii. Reviews
    iii. Comments
    iv. Location
    v. Security
      a. Checks to see if login/token is currently valid
3. Profile
4. Support Chat
5. Host Forms

## Todo / In Progress
1. State management + Async (Highest Priority)
    i. Write GraphQL login/register/forgot mutations
2. HOCs
    i. Dependency Inject (Highest Priority)
        a. Google Maps
        b. Google Analytics
3. Modals
    i. Maps
        a. Stop Google Maps from re-rendering due to Modal changes (Low Priority)
    ii. Routing
        a. Destroy modal on back button instead of going back (Low Priority)
4. Utils
    i. Date Parser (Low Priority)
    ii. Form Validations Checks (Low Priority)
5. Jest (High Priority)
    i. Set up testing suite
    ii. Research Travis/Jenkins
    iii. Write Tests
6. Web3 (Highest Priority)

## State-Management
1. Apollo Client 2.0
    i. No longer exclusive to GraphQL server code!!!
    ii. REST API compatitible 

## Outside Dependencies
1. React-Dates (133kb)
    i. Calendar Date Picking
    ii. Maintained & owned by AirBnB
    iii. Moment is a major dependecy. Had to include it, but as long it is not used elsewhere in the app, it will not bundled!
    iv. DO NOT USE MOMENT ANYWHERE EXCEPT WITHIN THE CALENDAR COMPONENT
    v. DO NOT USE MOMENT ANYWHERE EXCEPT WITHIN THE CALENDAR COMPONENT
2. Web3 (300kb)
    i. Javascript Etherium API
3. Date-FNS (7kb)
    i. Powerful date parsing extension from Javascript's native date object
4. qs (3kb)
    i. Powerful & easy to use query params parsing/handling tool

## Potential Dependecies
1. React-slick (image carosoel)
    i. Kevin build if we need it?