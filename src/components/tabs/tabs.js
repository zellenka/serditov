import React from 'react'
import { Tabs, Tab, Panel } from '@bumaga/tabs' 
import tabsStyles from "./tabs.module.css";
// import Images from '../../../src/imageSorce';


const TabsVertical = () => (
  <section className={tabsStyles.tabs}>  
    <Tabs>
      <ul className={tabsStyles.tabsList}>
        <Tab>
          <li className={tabsStyles.tabsList__item}>
            {/* <button className={tabsStyles.tabsList__item-button}> */}
            <a href="#tab1" className={tabsStyles.tabsList__itemLink} >Profile</a>
            {/* </button> */}
          </li>
        </Tab>

        <Tab>
          <li className={tabsStyles.tabsList__item}>
            {/* <button className={tabsStyles.tabsList__item-button}> */}
            <a href="#tab2" className={tabsStyles.tabsList__itemLink} >Experience</a>
            {/* </button> */}
          </li>
        </Tab>

        <Tab>
          <li className={tabsStyles.tabsList__item}>
            {/* <button className={tabsStyles.tabsList__item-button}> */}
            <a href="#tab3" className={tabsStyles.tabsList__itemLink} >Personality</a>
            {/* </button> */}
          </li>
        </Tab>
      </ul>

      <Panel>
        <div className={tabsStyles.tabsText}>
          <p>Text 1</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
        </div>
        <div className={tabsStyles.tabsImg}><img src='https://source.unsplash.com/random#500x1000' alt="tab show"></img></div>
      </Panel>

      <Panel>
        <div className={tabsStyles.tabsText}>
          <p>Text 2</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
        </div>
        <div className={tabsStyles.tabsImg}><img src='https://source.unsplash.com/random#500x1000' alt="tab show"></img></div>
      </Panel>

      <Panel>
        <div className={tabsStyles.tabsText}>
          <p>Text 3</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic blanditiis, aut voluptas quibusdam maxime expedita quaerat quo consequuntur laboriosam numquam sunt eos, fugit minima. Obcaecati quibusdam accusantium blanditiis provident labore. </p>
        </div>
        <div className={tabsStyles.tabsImg}><img src='https://source.unsplash.com/random#500x1000' alt="tab show"></img></div>
      </Panel>


    </Tabs>
  </section>
);

export default TabsVertical;