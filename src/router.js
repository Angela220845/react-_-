import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
export default class IRouter extends React.Component{
    render(){
        // 登录页、详情页、首页三者路由是平级，需要使用一个最外层的元素包裹。
        return (
            <HashRouter>
                <App> </App>
            </HashRouter>
        )
    }
}