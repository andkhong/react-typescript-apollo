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

## Test
1. npm test

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
7. Testing
    i. Jest
        a. Testing Framework that works well with any framework/library
    ii. Enzyme 
        a. Powerful shallow testing tool for React

## Feature Roadmap
1. Profile
2. Support Chat
3. Host Forms
4. Payment

## Todo / In Progress
1. Web3 (Highest Priority)
    i. Payment Flow
2. Host Signup
    i. Create Listing
3. Host/Guest Cancellation
4. Lazy Load Image Component

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
2. React-Slick (10.5 kb)
    i. Well maintained, optimized slider
    ii. Easy to integrate and use
3. Web3 (300kb)
    i. Javascript Etherium API
4. Date-FNS (7kb)
    i. Powerful date parsing extension from Javascript's native date object
5. qs (3kb)
    i. Powerful & easy to use query params parsing/handling tool

## Bugs
1. Handle Apollo Client Bug reporting