import { useNavigate } from 'react-router-dom';
// import WS from './addrecipeWS';
import React from 'react';

export function AddRecipe() {
  const navigate = useNavigate();
  const initialInput = {
    title: "",
    hours: 0,
    minutes: 0,
    description: "",
    url: "",
    category: "Breakfast",
    user:localStorage.getItem('user'),
  }
  const [inputs, setInputs] = React.useState(initialInput);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log({inputs});
    await uploadRecipe()
    // console.log(localStorage.getItem('recipes'));
    setInputs(initialInput);
  }

  async function uploadRecipe(){
    // let recipes = [];
    let newRecipe = inputs;
    try{
      const response = await fetch('/api/newrecipe', {
          method: 'post',
          headers: {'Content-type':'application/json; charset=UTF-8',},
          body: JSON.stringify(newRecipe),
      });

      let recipes = await response.json();
      recipes.push(newRecipe);
      let recipesJSON = JSON.stringify(recipes);
      localStorage.setItem('recipes', recipesJSON);
      // ws.send(recipesJSON);
    }
    catch{
      // recipes.push(newRecipe);
      // let recipesJSON = JSON.stringify(recipes);
      // localStorage.setItem('recipes', recipesJSON);
      // ws.send(recipesJSON);    
      console.log("catch");
    }    
  }



  // useEffect(() => {
  //   WS();
  // }, []);

  
  return (
    <main>
        <div className="container col-sm-6 text-bg-light rounded px-5 py-4 text-center">
            <h1>Add a Recipe</h1>

            <form id="recipeForm" className="pt-3" onSubmit={handleSubmit}>
                <div className="input-group pb-3">
                    <span className="input-group-text">Title</span>
                    <input 
                      className="form-control" 
                      id="title" 
                      name='title'
                      type="text" 
                      placeholder="Recipe Title" 
                      value={inputs.title || ""}
                      onChange={handleChange}
                    /> <br />
                </div>

                <div className="row pb-3">
                    <div className="col input-group">
                        <span className="input-group-text">hours</span>
                        <input 
                          className="form-control" 
                          type="number" 
                          id="time-hours" 
                          name='hours'
                          value={inputs.hours || 0}
                          min="0" 
                          max="12" 
                          step="1"
                          onChange={handleChange}
                        />
                    </div>
                    <div className="col input-group">
                        <span className="input-group-text">minutes</span>
                        <input 
                          className="form-control"  
                          type="number" 
                          id="time-min"
                          name='minutes' 
                          value={inputs.minutes || 0}
                          min="0" 
                          max="59" 
                          step="1" 
                          onChange={handleChange}
                        /> <br />
                    </div>
                </div>

                <div className="input-group pb-3">
                    <span className="input-group-text">Description</span>
                    <textarea 
                      className="form-control" 
                      id="description"
                      name='description'
                      value={inputs.description || ""}
                      onChange={handleChange}
                    ></textarea>
                </div>

                <div className="input-group pb-3">
                    <span className="input-group-text">url</span>
                    <input 
                      className="form-control" 
                      id="url" 
                      name='url'
                      type="url" 
                      placeholder="URL to recipe" 
                      value={inputs.url || ""}
                      onChange={handleChange}
                    /> <br />
                </div>

                <div className="input-group pb-3">
                    <span className="input-group-text">Category</span>
                    <select 
                      className="form-select" 
                      id="category"
                      name='category'
                      value={inputs.category || "Breakfast"}
                      onChange={handleChange}
                    >
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                        <option>Desserts</option>
                        <option>Appetizers</option>
                        <option>Snacks</option>
                        <option>Latin</option>
                        <option>Asian</option>
                        <option>European</option>
                        <option>Oceanic</option>
                        <option>African</option>
                    </select>
                </div>
            
                <button className="btn btn-sm btn-info mb-4" type="submit">Add Recipe</button>
            </form>
            <p className="mb-0"><i>"Laughter is brightest in the place where food is good"- Irish Proverb</i></p>
            <button className="btn btn-sm btn-outline-secondary mt-3"  onClick={() => navigate('/recipebook')}>Return to Cookbook</button>
        </div>
    </main>
  );
}