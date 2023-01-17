const db = require('../utils/database');
const Categories = require('../models/categories.models');
const Courses = require('../models/courses.models');
const Users = require('../models/users.models');
const UsersCourses = require('../models/usersCourses.models');
const Videos = require('../models/videos.models');

const user = [
    {first_name: "Hernan", last_name: "Lopez", password: "123456", email: "hernan@gmail.com" },
    {first_name: "Liliana", last_name: "Lopez", password: "123456", email: "llili@gmail.com" },
    {first_name: "Aldo", last_name: "Lopez", password: "123456", email: "aldo@gmail.com" }
];

const courses = [
    { title: "Curso computacion", description: "Es el curso de computacion basica", instructor: "Javier"},
    { title: "Curso mecanica", description: "Es el curso de computacion basica", instructor: "Adrian"},
    { title: "Curso arte", description: "Es el curso de computacion basica", instructor: "Alejandra" }
];

const categories = [
    { name: "Informatica", course_id: 1 },
    { name: "Mecanica", course_id: 2},
    { name: "Arte", course_id: 3}
];

const videos = [
    { title: "Introduccion a la informatica", url: "hhtp://cursosenlinea/cursoinformatica/video1", course_id:1 },
    { title: "Introduccion a la informatica 2", url: "hhtp://cursosenlinea/cursoinformatica/video2", course_id:1 },
    { title: "Mecanica 1", url: "hhtp://cursosenlinea/cursomecanica/video1", course_id:2 },
    { title: "Arte 1", url: "hhtp://cursosenlinea/cursoarte/video1", course_id:3 }
];

const usersCourses = [
    { user_id: 1, course_id: 1 },
    { user_id: 2, course_id: 2 },
    { user_id: 3, course_id: 3 }
];

db.sync( { force: true } )
  .then( () => {
    console.log("Iniciando sembradio de informacion");
    user.forEach( (user) => Users.create(user) );

    setTimeout( () => {
        courses.forEach( (courses) => Courses.create(courses) );
    },100 );

    setTimeout( () => {
        categories.forEach( (categories) => Categories.create(categories) );
    },200 );

    setTimeout( () => {
        videos.forEach( (videos) => Videos.create(videos) );
    },300 );
  
    setTimeout( () => {
        usersCourses.forEach( (usersCourses) => UsersCourses.create(usersCourses) );
    },400 );
  } )
  .catch( (error) => console.log(error) );

  