# Hatchways_BackendAssessment
Online assessment as part of an application process for an unnamed company

## Implementation details:
1. Two fetch routes have been constructed within the controller file
2. Used hash table to remove duplicates for multiple query parameters
3. Testing done using Mocha + Chai
4. Concurrent requests handled
5. Caching is a work in progress

## Usage:
1. Run ``` npm install ``` to install dependencies
2. Run ``` node index.js ``` to start the server (will run on port 3000)
3. Step 1 solution will be found on localhost:3000/api/ping
4. Step 2 solution will be found on localhost:3000/posts/:tags/:sortBy?/:direction?
   - Example: http://localhost:3000/api/posts/politics,tech/likes/asc
