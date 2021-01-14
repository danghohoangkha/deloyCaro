import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout,loginLayout } from "./layouts";
// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/userDetail";
import ChatManage from "./views/chatManage";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/userManagement";
import BlogPosts from "./views/BlogPosts";
import SignIn from './views/login';
import matchManage from './views/matchManagement';
import MatchUser from './views/matchOfUser';
// import { NotificationsNone } from "@material-ui/icons";
export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/user-management"/>
  },
  {
    path: "/login",
    exact: true,
    layout:loginLayout,
    component: SignIn
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite/:id",
    layout: DefaultLayout,
    component: (location)=><UserProfileLite location={location}/>
  },
  {
    path: "/match-management",
    layout: DefaultLayout,
    component: matchManage
  },
  {
    path: "/chat_match/:id",
    layout: DefaultLayout,
    component: (location)=><ChatManage location={location}/>
  },
  {
    path : "/match-of-user/:id",
    layout: DefaultLayout,
    component: (location)=><MatchUser location = {location}/>
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/user-management",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blogPost",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
