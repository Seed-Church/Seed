import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import SideNavP from '../components/SideNavP'
export default () => {
  const [isOpen, setOpen] = useState(true)
  const toggle = () => setOpen(!isOpen)
  return (
    <Router>
        <SideNavP />
    </Router>
  );
}
