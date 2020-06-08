import React from 'react'
import { Tabs, Tab, Panel } from '@bumaga/tabs' 
import tabsStyles from "./tabs.module.css";
import { Link } from "gatsby";
// import Images from '../../../src/imageSorce';


const TabsVertical = () => (
  <section className={tabsStyles.tabs}>  
    <Tabs>
      <ul className={tabsStyles.tabsList}>
        <Tab>
          <li className={tabsStyles.tabsList__item}>
            {/* <button className={tabsStyles.tabsList__item-button}> */}
            <Link to="/" className={tabsStyles.tabsList__itemLink} >Profile</Link>
            {/* </button> */}
          </li>
        </Tab>

        <Tab>
          <li className={tabsStyles.tabsList__item}>
            {/* <button className={tabsStyles.tabsList__item-button}> */}
            <Link to="/" className={tabsStyles.tabsList__itemLink} >Experience</Link>
            {/* </button> */}
          </li>
        </Tab>

        <Tab>
          <li className={tabsStyles.tabsList__item}>
            {/* <button className={tabsStyles.tabsList__item-button}> */}
            <Link to="/" className={tabsStyles.tabsList__itemLink} >Personality</Link>
            {/* </button> */}
          </li>
        </Tab>
      </ul>

      <Panel>
        <div className={tabsStyles.tabsText}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
        </div>
        <div className={tabsStyles.tabsImg}><span>Image Title-1</span><img alt="tab show" src='https://source.unsplash.com/random#500x1000'></img></div>
      </Panel>

      <Panel>
        <div className={tabsStyles.tabsText}>
          <p>Text</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
        </div>
        <div className={tabsStyles.tabsImg}><span>Image Title-2</span><img alt="tab show" src='https://source.unsplash.com/random#500x1000'></img></div>
      </Panel>

      <Panel>
        <div className={tabsStyles.tabsText}>
          <p>Text</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
        </div>
        <div className={tabsStyles.tabsImg}><span>Image Title-3</span><img alt="tab show" src='https://source.unsplash.com/random#500x1000'></img></div>
      </Panel>


    </Tabs>
  </section>
);

export default TabsVertical;