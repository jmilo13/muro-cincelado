import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Autor from './pages/Autor'
import Atention from './pages/Atention'
import NotFound from './pages/NotFound'
import Post1 from './posts/Post1'


class App extends React.Component {
    render(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/post1" component={Post1} />
                    <Route exact path="/psicologo-camilo-gonzalez" component={Autor} />
                    <Route exact path="/modalidad-de-intervencion/" component={Atention} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
    }
}

export default App