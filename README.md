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
1. Typescript (Awesome Typescript Loader + tsconfig.json)
2. React + ReactDOM
3. React Router v4
4. GraphQL + Apollo Client 2.0
    i. Incredibaly powerful data fetching api
    ii. Caching layer to optimize api requests
    iii. State management tools that scales very well and is highly maintainable
5. Styled-Components
    i. Modular Resusable Code
    ii. Can potentially build a monolithic React App without outputing a single CSS file
    iii. Easier to transition to Server-Side Rendering
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

## Todo / In Progress
1. State management + Async
    i. Write GraphQL login/register/forgot mutations
2. HOCs
    i. Dependency Inject (Highest Priority)
    ii. SVG + Styled-Component
3. Maps
    i. Stop Google Maps from re-rendering after model is closed (High Priority)
4. Routing
    i. Modal Breaking on back (Low Priority)
5. Styled-Components
    i. Resolve Typescript checks (Low Priority)
6. Utils
    i. Date Parser
    ii. validate form entries
7. Modals
    i. Optimize modals to prevent unnecessary background rerendering

## State-Management
1. Apollo Client 2.0
    i. No longer exclusive to GraphQL server code!!!
    ii. REST API compatitible 

## Outside Dependencies
1. React-Dates (133kb)
    i. Calendar Date Picking
    ii. Maintained & owned by AirBnB
2. React-Slick (11kb)
    i. Image carousel
    ii. Strong Maintences with large community
3. Date-FNS (7kb)
    i. Powerful date parsing extension from Javascript's native date object
4. qs (3kb)
    i. Powerful & easy to use query params parsing/handling tool