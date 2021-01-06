import React from 'react'
import ReactDOM from 'react-dom'
// import About from './About'
import List from './List'
// import Cnt from './Contact'
// import Page from './Page'
// import Didmount from './didmount'
import Netflix from './Netflix'
import NetflixMv from './NetflixMv'
import Equal from './Equal'
import Exapmle from './example'
import Exleeffect from './Exampleeffect'
import CustomHooks from './CustomHooks'
import Stunt from './ClassState'
import Text from './Usestate'
import App from './Useeffect'
import Newcustom from './Newcustom_1'
import AryFunct from './List_props'
import List_funt from './List_state'


let curadate = new Date(2020,10,29,9);
curadate = curadate.getHours()


let greeting = " ";

const stylesheet = { }

if(curadate > 1 && curadate < 12){
  greeting = "Good Morning";
  stylesheet.color = "red"
}
else if(curadate >= 12  && curadate < 19){
  greeting = "Good Afternoon";
  stylesheet.color = "purple"
}
else{
  greeting = "Good Night";
  stylesheet.color = "black"
}


ReactDOM.render(
    <React.Fragment>
      <h2>Think tanker <span style= {stylesheet}>{greeting}</span></h2>
      {/* <About /> */}
      <List />
      {/* <Page /> */}
      {/* <h1>{Cnt}</h1> */}
      {/* <Didmount /> */}
      {/* <funct /> */}
        {/* <Netflix /> */}
      {/* <NetflixMv /> */}
      {/* <Equal /> */}
      {/* <Exapmle /> */}
      {/* <Exleeffect /> */}
      {/* <CustomHooks /> */}
      {/* <Stunt id="22"/> */}
      {/* <Text /> */}
      {/* <Newcustom /> */}
      {/* < App /> */}
      {/* <AryFunct /> */}
      <List_funt />
    </React.Fragment>,
    document.getElementById('root')
);
