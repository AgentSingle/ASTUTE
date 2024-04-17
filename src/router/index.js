import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: "/",
        name: "Home",
        component: () => import("../views/Home/HomePage.vue"),
      },
      {
        path: "/Dart",
        name: "Dart",       
        component: () => import("../views/Tutorials/DartTutorial/DartTutorial.vue"),
        redirect: {
          name: 'Dart.DartTutorial',
        },
        children: [
          {
            path: "",
            name: "DartTutorial",
            component: () => import("../views/Tutorials/DartTutorial/dt/dartVariables.vue"),
          }
        ]     
      },
      {
        path: "/Flutter",
        name: "Flutter",       
        component: () => import("../views/Tutorials/FlutterTutorial/FlutterTutorial.vue"),       
      },
      {
        path: '/:catchAll(.*)', // Fallback route to handle 404 errors
        component: () => import("../views/NotFound/NoteFound.vue"),
      }
    ],
});

export default router;