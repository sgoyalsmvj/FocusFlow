import React from "react";
import NavBar from "./NavBar";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const listTask = [];


//   console.log("Render Landing Page");

  listTask.push("Task 1");
  listTask.push("Task 2");
  listTask.push("Task 3");

  return (
     <div className="bg-orange-500 h-screen" >
          
           <NavBar/>
         
              <div className="h-[600px] bg-gray-500">

             <div className="flex justify-center items-center"><div className=" rounded-4xl flex justify-center items-center h-[100px] mt-[40px] "><h1 className="text">What do you want to Learn Today?</h1></div></div>
              
                    
                    <div className="h-[400px] flex justify-center items-center bg-red-500">

                        <div>
                                  
                        <div className="flex justify-center items-center w-[200px]">
                                <h1 className="">Write the task to Add + </h1>   

                         </div>


                         <div className="flex justify-center items-start mt-[40px] bg-green-500 h-[200px] w-[200px]">
                                 
                                <ul className="h-full w-full bg-red-500 ">
                                    {listTask.map((task) => {
                                        return <li className="rounded-lg border-2 text-center mb-3"> {task} <button className="ml-[50px]">+</button></li>;
                                    })}
                                </ul>


                         </div>



                        </div>
                        
                         



                    </div>

                    

              </div>

    
     </div>

  );
};

export default LandingPage;
