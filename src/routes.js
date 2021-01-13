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
    path: process.env.PUBLIC_URL+"/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/user-management"/>
  },
  {
    path:process.env.PUBLIC_URL+"/login",
    exact: true,
    layout:loginLayout,
    component: SignIn
  },
  {
    path: process.env.PUBLIC_URL+"/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: process.env.PUBLIC_URL+"/user-profile-lite/:id",
    layout: DefaultLayout,
    component: (location)=><UserProfileLite location={location}/>
  },
  {
    path: process.env.PUBLIC_URL+"/match-management",
    layout: DefaultLayout,
    component: matchManage
  },
  {
    path: process.env.PUBLIC_URL+"/chat_match/:id",
    layout: DefaultLayout,
    component: (location)=><ChatManage location={location}/>
  },
  {
    path : process.env.PUBLIC_URL+"/match-of-user/:id",
    layout: DefaultLayout,
    component: (location)=><MatchUser location = {location}/>
  },
  {
    path: process.env.PUBLIC_URL+"/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: process.env.PUBLIC_URL+"/user-management",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: process.env.PUBLIC_URL+"/blogPost",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
