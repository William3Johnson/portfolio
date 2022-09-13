import React from 'react';
import { updateEmail, updateMessage, updateName } from '../redux/contactSlice';
import {useAppSelector, useAppDispatch} from '../redux/hook';
import ProjectCard from './utilities/ProjectCard';
import RoundedButton from './utilities/RoundedButton';
import SectionTitle from './utilities/SectionTitle';

const dogeBotPic = require('../resources/DogeBot2.png')

type propType = {
  id:string
}


//MAIN
function ProjectsPanel(props:propType) {
    
  return (
    <div id={props.id} className=' w-full flex flex-col justify-center items-center'>


        <div className='w-fit max-w-[80%] grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-8'>

            <SectionTitle text='My Projects'/>

            <ProjectCard id='dogeBot' title='Portfolio Page' imgSrc={dogeBotPic} description={
                <div>This page I made for myself. It's made with React with Typescript and styled with Tailwind CSS. This project
                    definitly helped me refine my front end skills.
                </div>
            }/>
            <ProjectCard id='dogeBot' title='Stack' imgSrc={dogeBotPic} description={
                <div> A UI/UX time management app prototype I made with Figma. It is important to note that the project did not
                    start out to be an app but a vague client goal of 'reducing stress in life'. In the project I analysed 
                    the problem thoroughly and explored various possibilities to find the optimal design solution.
                </div>
            }/>
            <ProjectCard id='dogeBot' title='DogeBot' imgSrc={dogeBotPic} description={
                <div>A Python Discord bot I have made for my friend group since we can't find a stable bot to replace Rhythm.
                It finds songs with name or exact url and place them in an editable queue to be streamed in voice channels.
                </div>
            }/>

            <ProjectCard id='dogeBot' title='FridgeLogger' imgSrc={dogeBotPic} description={
                <div>Part of a IoT project that transforms any fridge to a smart fridge. This is an API that take data from said IoT
                    device that logs food usage for research. It is a .net project writtent in C# that employs EF core, clean 
                    architecture, connect to an Azure SQL server and is deployed via a ci/cd pipeline to Azure.
                </div>
            }/>
        </div>
    </div>
  );
}

export default ProjectsPanel;