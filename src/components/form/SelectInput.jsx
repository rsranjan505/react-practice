import React from 'react'

import { useEffect, useRef } from "react";
import $ from "jquery";
window.jQuery = window.$ = $;
require("jquery-nice-select");

export default function SelectInput() {
  const selectRef = useRef();

  useEffect(() => {
    $(selectRef.current).niceSelect();
  }, []);

  const getItem = () => {
    // let selected = $(selectRef.current).val();
    alert(` You have selected `);
  };

  return (
    <>
     
          <select ref={selectRef} onChange={getItem} name="subject" className="form-select nice-select ">
            <option 
                    disabled="disabled"
                    selected="selected"
                    hidden="">Select</option>
            <option value="Engine Diagnostics">Spa &amp; Massage</option>
            <option value="Facial & Massage">Facial &amp; Massage</option>
            <option value="Engine Diagnostics">Head Massage</option>
            <option value="Sports Massage">Sports Massage</option>
            <option value="Stone Massage">Stone Massage</option>
          </select>
       
    </>
  );
}
