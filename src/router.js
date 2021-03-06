import Vue from 'vue'
import Router from 'vue-router'

import HomePageHeader from "./components/subComponents/HomePageHeader"
import HomePageIndex1 from "./components/subComponents/HomePageIndex1"
import HomePageIndex2 from "./components/subComponents/HomePageIndex2"
import HomePage from "./components/HomePage"
import One from "./components/subComponents/One"
import Lyrics from "./components/subComponents/Lyrics"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/HomePageHeader',
      name: 'HomePageHeader',
      component: HomePageHeader
    },
    
    {
      path: '/HomePageIndex1',
      name: 'HomePageIndex1',
      component: HomePageIndex1
    },
    {
      path: '/HomePageIndex2',
      name: 'HomePageIndex2',
      component: HomePageIndex2
    },
    {
      path: '/One',
      name: 'One',
      component: One,
    },
    {
      path: '/Lyrics',
      name: 'Lyrics',
      component: Lyrics,
    },
   
  ]
})
