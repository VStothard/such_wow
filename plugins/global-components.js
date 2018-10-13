import Vue from 'vue';

//import components
import PageHeader from '@/components/content/PageHeader';
import ImageWithText from '@/components/content/ImageWithText';
import BlogTileGrid from '@/components/content/BlogTileGrid';
import BlogTile from '@/components/content/BlogTile';
import BlogPostCarousel from '@/components/content/BlogPostCarousel';
import InstaFeed from '@/components/content/InstaFeed';
import ContactBar from '@/components/content/ContactBar';
import Nav from '@/components/general/Navigation';
import Footer from '@/components/content/Footer';

import Button from '@/components/general/Button';

import Form from '@/components/form/Form';

//register components
Vue.component('PageHeader', PageHeader); 
Vue.component('ImageWithText', ImageWithText); 
Vue.component('BlogTileGrid', BlogTileGrid);
Vue.component('BlogTile', BlogTile); 
Vue.component('BlogPostCarousel', BlogPostCarousel); 
Vue.component('InstaFeed', InstaFeed); 
Vue.component('ContactBar', ContactBar); 
Vue.component('Nav', Nav); 
Vue.component('Footer', Footer); 

Vue.component('Button', Button); 
Vue.component('Form', Form); 



