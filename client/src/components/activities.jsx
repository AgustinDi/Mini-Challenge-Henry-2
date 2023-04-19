import React from "react";
import {data} from '../helper/activity.json';
import dataSql from '../helper/sqlActivity.json';
const imgSQL = import.meta.env.VITE_IMG_SQL;
const url = import.meta.env.VITE_URL;

export default function Activities() {
    return (
        <div>
            <ol>
              {data.map((activity,index)=><li key={index}>{activity}: <a href={url + 'solution/' + (index+1)} target="_blank">Resultado</a></li>)}
              <li>Dada la siguiente base de datos relacional: <br/>
                <img src={imgSQL}></img> <br/>
                Resolver las Siguientes consultas en sql:
                <ol>
                    {dataSql.data.map((act,index)=><li key={index}>{act}: <a href={url + 'solution/5/' + (index+1)} target="_blank">Resultado</a></li>)}
                </ol>
              </li>
            </ol>
        </div>
    )
}