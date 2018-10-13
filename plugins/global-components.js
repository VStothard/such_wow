import Vue from 'vue';

//import components
import PageHeader from '@/components/content/PageHeader';
import ImageWithText from '@/components/content/ImageWithText';
import BlogPost from '@/components/content/BlogPost';
import BlogFilter from '@/components/content/BlogFilter';
import BlogTileGrid from '@/components/content/BlogTileGrid';
import BlogTile from '@/components/content/BlogTile';
import BlogPostCarousel from '@/components/content/BlogPostCarousel';
import BlogPostSocial from '@/components/content/BlogPostSocial';
import BlogPostContent from '@/components/content/BlogPostContent';
import InstaFeed from '@/components/content/InstaFeed';
import ContactBar from '@/components/content/ContactBar';
import Nav from '@/components/general/Navigation';
import Footer from '@/components/content/Footer';

import Button from '@/components/general/Button';
import FullWidthImage from '@/components/general/FullWidthImage';

import Form from '@/components/form/Form';

//register components
Vue.component('PageHeader', PageHeader); 
Vue.component('ImageWithText', ImageWithText); 
Vue.component('BlogPost', BlogPost); 
Vue.component('BlogFilter', BlogFilter); 
Vue.component('BlogTileGrid', BlogTileGrid);
Vue.component('BlogTile', BlogTile); 
Vue.component('BlogPostCarousel', BlogPostCarousel); 
Vue.component('BlogPostSocial', BlogPostSocial);
Vue.component('BlogPostContent', BlogPostContent); 
Vue.component('InstaFeed', InstaFeed); 
Vue.component('ContactBar', ContactBar); 
Vue.component('Nav', Nav); 
Vue.component('Footer', Footer); 

Vue.component('Button', Button); 
Vue.component('FullWidthImage', FullWidthImage); 

Vue.component('Form', Form); 



