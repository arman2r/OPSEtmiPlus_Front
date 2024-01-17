/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementPlus from 'element-plus'
import es from 'element-plus/es/locale/lang/es'
import 'element-plus/dist/index.css'
//import "./App.css"

let elementPlusLocale = null;
elementPlusLocale = await import ('element-plus/es/locale/lang/es'); // remover esto cuando se tenga vpn
/*
switch ((<any>window).GetLocale())
{
	// en
	default: elementPlusLocale = await import ('element-plus/es/locale/lang/es'); break;
	case 'es': elementPlusLocale = await import ('element-plus/es/locale/lang/en'); break;
}*/
//createApp(App).use(router).use(ElementPlus, {locale: es}).mount('#app');
//(<any>window).SetAxiosSettings (axios); // habilitar cuando se tenga vpn

createApp(App).use(router).use(ElementPlus, {locale: elementPlusLocale.default}).mount('#app')
