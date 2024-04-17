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
    ],
});

export default router;