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
6. Webpack v3 + Babel
    i. Dynamic Imports = Code-Splitting/Lazy-Loading/Incremental-builds
    ii. Optimized Development builds for increased productivity
    iii. Optimized Production builds for increased performance on all devices

## Feature Roadmap
1. Authentication Flow
    i. Login
    ii. Registration
    iii. Forgot Password
2. Header
    i. Navigation Flow
3. Footer
    i. Team
    ii. Credits
4. Main View
  i. All available listings
    a. Filter
5. Routing
    i. Dynamic Routes
    ii. Authenticate accessible routes with tokens
6. Booking
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
    ii. Authenticated Routes
3. Routing
    i. Sidebar Navigation for Terms
    ii. Modal Breaking on back
    iii. Render dynamic routes
4. Styled-Components
    i. Resolve Typescript checks
5. Infrastructure
    i. Write Linter
6. Build Tools
    i. Fix Common Chunks to work with styled components

## State-Management
1. Apollo Client 2.0
    i. No longer exclusive to GraphQL server code!!!
    ii. REST API compatitible 

