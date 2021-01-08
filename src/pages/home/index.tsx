import React, {useEffect } from 'react';
import "./index.css";
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { StoreState } from '../../types/index';
import { Dispatch } from 'redux';
import {connect} from "react-redux";
interface Props {
    demonum: number;
    onSetNum: (num:number) => void;
  }
  

const mapStateToProps = (state: StoreState): { demonum: number } => ({
    demonum: state.demonum
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onSetNum: (data:number) => dispatch({type:"SET_DATA",data})
})
  

function Home(props:Props){
  useEffect(() => {
    // 相当于 componentDidMount
    console.log("componentDidMount",props);
    setTimeout(()=>{
        props.onSetNum(20);
    },2000)
  }, [])
  const { demonum,onSetNum } = props;

  const doSetNum = () =>{
    props.onSetNum(100);
  }

  return(
    <div>
        <h1 onClick={doSetNum}>Home页面{demonum}</h1>
        <Button className="demo_button" type="warning">xxx</Button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);