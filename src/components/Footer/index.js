/*
* @Author: beyondouyuan
* @Date:   2018-04-18 20:05:58
* @Last Modified by:   beyondouyuan
* @Last Modified time: 2018-05-06 19:21:05
*/
import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-wrapper">
                <div className="source">
                    <a href="https://beyondouyuan.github.io/" target="_blank">博客</a>
                </div>
                <div className="vendor">
                    <ul className="vendor-list">
                        <li className="vendor-item">
                            <span>CNode API</span>
                            <a href="https://cnodejs.org">
                                <img src="https://cnodejs.org/public/images/cnodejs.svg" alt="cnode" />
                            </a>
                        </li>
                        <li className="vendor-item">
                            <span>Github</span>
                            <a href="https://beyondouyuan.io/">
                                <img src="https://cnodejs.org/public/images/cnodejs.svg" alt="github" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer