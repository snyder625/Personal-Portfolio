import React from 'react'
import './projects.css'
import Project from '../project/Project'
import { projects } from '../../data.js'

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">Create & inspire. It's Rizwan</h1>
            <p className="pl-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia in mi at gravida. Cras sit amet finibus leo, vel ornare ipsum. Sed eget ultrices diam, nec tincidunt justo.</p>
        </div>
        <div className="pl-list">
            {projects.map((item)=> (
              <Project key={item.id} img={item.img} link={item.link} />
            ))}
        </div>
    </div>
  )
}

export default ProductList