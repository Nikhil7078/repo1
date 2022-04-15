import React from 'react'

export const AddTodo = () => {
    return (
        <div>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Enter Title</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Enter Description About Task </label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
        
                <button type="submit" class="btn btn-light">AddTodo</button>
            </form>
        </div>
    )
}