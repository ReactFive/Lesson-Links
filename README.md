#Lesson Links

[www.lesson-links.com](https://www.lesson-links.com)

Lesson Links is a React.js, Reflux, MongoDB, Express app thatallows teachers to create video-based lessons that are 
easily accessible, facilitate student/teacher conversations, and enable the assessment of student understanding.

## File structure

 ```
 +--client/
 ├── index.js - main view and routes 
 ├── components/
 │   └──  *.js (all react components in sub directories by parent component)      
 │
 ├── stores
 │   └──  all stores
 │
 ├── public/   (bundled assets for deployment)
 │   ├──  assets/
 │   └──  js/
 │
 ├── utils
 │   └── actions.js
 │   ├── routes.js
 │   └── sass
 │          └── .scss - write your styles here to be compiled to style.css
 │ 
 ├── actions.js - main html file
 ├── routes.js  
 │
 ├── sass/ 
 │   └── *.scss (by component)  
 │
 
 +--server/
 │
 │── controllers/
 |   └── exercise/lesson/user.js
 | 
 │── models
 |   └── mongoose schemas exercise/lesson/user.js
 |
 ├── express.js - main html file
 ├── routes.js 
 ├── mongoose.js - main html file
 ├── passport.js
 ├── auth.js 
 ├── configuration.js (gitignored!)
 ├── index.js 
 │
 └── views/ 
     └── index.html

 ```
 
## Start the engines

Create a configuration file pointing to a mongoDB collection and, if needed, Oauth credentials.
Then gulp will compile the jsx with Babel and the server will start on the following command.

```
npm start

```

## Development Team

[Abhi Gulati](https://github.com/AbhiGulati), [Richard Van Camp](https://github.com/RikuVan), [Colin Wiley]
(https://github.com/AnkyrinRepeat), [Isto Barton](https://github.com/istobarton), 
[Esteban Castaño](https://github.com/ecastano)



 
